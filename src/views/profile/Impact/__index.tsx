'use client';

import React, { FC, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import GLTFLoader from 'three-gltf-loader';

interface ARVisualizationProps {
    level: number;
    progress: number;
    className?: string;
}

const EcoTreeModel = ({ level }: { level: number }) => {
    const group = useRef<THREE.Group>(null);
    const { scene } = useGLTF('/glb/eco-plant.glb');
    const [hovered, setHovered] = useState(false);

    // Анимация роста и реакции на hover
    useFrame((state) => {
        if (group.current) {
            const growthFactor = 0.5 + (level / 10);
            const hoverFactor = hovered ? 1.05 : 1.0;
            const pulseFactor = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.02;

            group.current.scale.lerp(
                new THREE.Vector3(
                    growthFactor * hoverFactor * pulseFactor,
                    growthFactor * hoverFactor * pulseFactor,
                    growthFactor * hoverFactor * pulseFactor
                ),
                0.1
            );
        }
    });

    return (
        <primitive
            ref={group}
            object={scene}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        />
    );
};

const ParticleEffects = ({ count, level }: { count: number; level: number }) => {
    const particles = useRef<THREE.Points>(null);
    const particlesGeometry = useRef<THREE.BufferGeometry>(new THREE.BufferGeometry());
    const particlesMaterial = useRef<THREE.PointsMaterial>(
        new THREE.PointsMaterial({
            size: 0.1,
            color: new THREE.Color('#4ade80'),
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        })
    );

    useEffect(() => {
        const particlesCnt = count * 100;
        const posArray = new Float32Array(particlesCnt * 3);
        const colorArray = new Float32Array(particlesCnt * 3);
        const sizeArray = new Float32Array(particlesCnt);

        for (let i = 0; i < particlesCnt; i++) {
            // Позиции
            posArray[i * 3] = (Math.random() - 0.5) * 10;
            posArray[i * 3 + 1] = Math.random() * 5;
            posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;

            // Цвета (вариации зеленого)
            colorArray[i * 3] = 0.2 + Math.random() * 0.3;
            colorArray[i * 3 + 1] = 0.6 + Math.random() * 0.3;
            colorArray[i * 3 + 2] = 0.3 + Math.random() * 0.2;

            // Размеры
            sizeArray[i] = 0.05 + Math.random() * 0.1;
        }

        particlesGeometry.current.setAttribute(
            'position',
            new THREE.BufferAttribute(posArray, 3)
        );
        particlesGeometry.current.setAttribute(
            'color',
            new THREE.BufferAttribute(colorArray, 3)
        );
        particlesGeometry.current.setAttribute(
            'size',
            new THREE.BufferAttribute(sizeArray, 1)
        );

        particlesMaterial.current.vertexColors = true;
    }, [count]);

    // Анимация частиц
    useFrame((state) => {
        if (particles.current) {
            const time = state.clock.getElapsedTime();
            particles.current.rotation.y = time * 0.1;

            const positions = particlesGeometry.current.attributes.position.array as Float32Array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] += Math.sin(time + i) * 0.01;
            }
            particlesGeometry.current.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={particles}>
            <bufferGeometry attach="geometry" ref={particlesGeometry} />
            <pointsMaterial attach="material" ref={particlesMaterial} />
        </points>
    );
};

const LevelEffects = ({ level }: { level: number }) => {
    const effects = useRef<THREE.Group>(null);
    const [models, setModels] = useState<THREE.Object3D[]>([]);

    useEffect(() => {
        const loadModels = async () => {
            const loader = new GLTFLoader();
            const effectsToLoad = [];

            if (level >= 3) effectsToLoad.push('/glb/butterfly.glb');
            if (level >= 5) effectsToLoad.push('/glb/bird.glb');
            if (level >= 7) effectsToLoad.push('/glb/squirrel.glb');

            const loadedModels = await Promise.all(
                effectsToLoad.map(url =>
                    new Promise<THREE.Object3D>(resolve =>
                        loader.load(url, (gltf) => resolve(gltf.scene.clone()))
                    )
                )
            );

            setModels(loadedModels);
        };

        loadModels();
    }, [level]);

    useFrame((state) => {
        if (effects.current) {
            const time = state.clock.getElapsedTime();
            effects.current.children.forEach((obj, idx) => {
                obj.position.x = Math.sin(time * 0.5 + idx) * 2;
                obj.position.y = 1 + Math.cos(time * 0.7 + idx) * 0.5;
                obj.position.z = Math.cos(time * 0.3 + idx) * 2;
            });
        }
    });

    return (
        <group ref={effects}>
            {models.map((model, i) => (
                <primitive key={i} object={model} />
            ))}
        </group>
    );
};

const ARVisualization = ({ level, progress }: ARVisualizationProps) => {
    const [arSupported, setArSupported] = useState(false);
    const [mode, setMode] = useState<'view' | 'ar'>('view');
    const controlsRef = useRef<any>(null);
    const { camera, gl } = useThree();

    useEffect(() => {
        const checkARSupport = async () => {
            if ('xr' in navigator) {
                try {
                    const supported = await navigator.xr?.isSessionSupported('immersive-ar');
                    setArSupported(!!supported);
                } catch (e) {
                    console.error('AR check failed:', e);
                }
            }
        };

        checkARSupport();
        camera.position.set(0, 1.5, 3 + level * 0.2);
    }, [camera, level]);

    const startArSession = async () => {
        try {
            const session = await navigator.xr!.requestSession('immersive-ar');
            await gl.xr.setSession(session);
            setMode('ar');

            session.addEventListener('end', () => {
                setMode('view');
            });
        } catch (err) {
            console.error('AR session error:', err);
        }
    };

    return (
        <>
            <ambientLight intensity={0.5 + level * 0.05} />
            <directionalLight
                position={[10, 10, 20]}
                intensity={1 + level * 0.1}
                color={level > 5 ? '#fff8e1' : '#ffffff'}
            />
            <hemisphereLight
                intensity={0.5}
                groundColor="#4ade80"
            />

            <EcoTreeModel level={level} />
            <ParticleEffects count={level} level={level} />
            <LevelEffects level={level} />

            {mode === 'view' && !gl.xr.isPresenting && (
                <Html center>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs"
                    >
                        <h3 className="text-lg font-bold mb-2">Ваш эко-уровень: {level}</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                                className="bg-green-600 h-2 rounded-full"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {arSupported ? (
                            <Button
                                onPress={startArSession}
                                className="w-full bg-green-600 hover:bg-green-700"
                            >
                                🚀 Запустить AR-режим
                            </Button>
                        ) : (
                            <p className="text-sm text-gray-500">
                                AR не поддерживается вашим устройством
                            </p>
                        )}
                    </motion.div>
                </Html>
            )}

            {mode === 'view' && (
                <OrbitControls
                    ref={controlsRef}
                    enableZoom={true}
                    enablePan={false}
                    minDistance={3}
                    maxDistance={10}
                    autoRotate={level > 3}
                    autoRotateSpeed={0.5 + level * 0.1}
                />
            )}
        </>
    );
};

export const Impact: FC<ARVisualizationProps> = ({ level, progress, className }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative h-[400px] md:h-[600px] bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden ${className}`}>
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse text-green-600">Загрузка 3D...</div>
                </div>
            )}

            <Canvas
                camera={{ position: [0, 0, 5], fov: 20 }}
                gl={{ antialias: true, alpha: true }}
                onCreated={() => setLoaded(true)}
            >
                <ARVisualization level={level} progress={progress} />
            </Canvas>

            <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>🌱 Уровень {level}</span>
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                Вращайте модель пальцем/мышью
            </div>
        </div>
    );
};
