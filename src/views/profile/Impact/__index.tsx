// 'use client';

// import React, { FC, useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { useGLTF, Html, OrbitControls } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import { Button } from '@heroui/button';
// import GLTFLoader from 'three-gltf-loader';
// import { useGetUser } from '@/entities/user';


// const EcoTreeModel = ({ level }: { level: number }) => {
//     const group = useRef<THREE.Group>(null);
//     const { scene } = useGLTF('/glb/eco-plant.glb');
//     const [hovered, setHovered] = useState(false);

//     useFrame((state) => {
//         if (group.current) {
//             const growthFactor = 0.5 + (level / 10);
//             const hoverFactor = hovered ? 1.05 : 1.0;
//             const pulseFactor = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.02;

//             group.current.scale.lerp(
//                 new THREE.Vector3(
//                     growthFactor * hoverFactor * pulseFactor,
//                     growthFactor * hoverFactor * pulseFactor,
//                     growthFactor * hoverFactor * pulseFactor
//                 ),
//                 0.1
//             );
//         }
//     });

//     return (
//         <primitive
//             ref={group}
//             object={scene}
//             onPointerOver={() => setHovered(true)}
//             onPointerOut={() => setHovered(false)}
//         />
//     );
// };

// const LeafParticles = ({ level }: { level: number }) => {
//     const leaves = useRef<THREE.Group>(null);
//     const [leavesGeometry, setLeavesGeometry] = useState<THREE.BufferGeometry[]>([]);

//     // Количество листьев зависит от уровня (нелинейная прогрессия)
//     const calculateLeafCount = (level: number) => {
//         const baseCount = 10; // Минимальное количество
//         const multiplier = 3; // Множитель прогрессии
//         return baseCount + Math.pow(level, 1.5) * multiplier;
//     };

//     // Создаем геометрию листика (улучшенная форма)
//     const createLeafShape = (sizeVariation = 0) => {
//         const shape = new THREE.Shape();
//         const width = 0.5 + Math.random() * 0.3 * sizeVariation;
//         const height = 0.8 + Math.random() * 0.4 * sizeVariation;

//         shape.moveTo(0, 0);
//         shape.bezierCurveTo(width * 0.5, height * 0.3, width * 0.7, height * 0.7, 0, height);
//         shape.bezierCurveTo(-width * 0.7, height * 0.7, -width * 0.5, height * 0.3, 0, 0);

//         const extrudeSettings = {
//             steps: 1,
//             depth: 0.03 + Math.random() * 0.02,
//             bevelEnabled: false
//         };

//         return new THREE.ExtrudeGeometry(shape, extrudeSettings);
//     };

//     useEffect(() => {
//         const leafCount = Math.floor(calculateLeafCount(level));
//         const geometries = [];

//         // Создаем вариации листьев (3 разных типа)
//         for (let i = 0; i < leafCount; i++) {
//             const sizeVar = i % 3; // Вариации размера
//             geometries.push(createLeafShape(sizeVar * 0.5));
//         }

//         setLeavesGeometry(geometries);
//     }, [level]);

//     useFrame((state) => {
//         if (leaves.current) {
//             const time = state.clock.getElapsedTime();
//             const windIntensity = 0.5 + Math.sin(time * 0.3) * 0.3;

//             leaves.current.children.forEach((leaf, idx) => {
//                 // Позиция зависит от уровня (чем выше уровень - шире распределение)
//                 const levelFactor = 1 + level * 0.1;
//                 const angle = (idx / leaves.current!.children.length) * Math.PI * 2;
//                 const radius = 1.5 * levelFactor + Math.sin(time * 0.2 + idx * 0.05) * 0.5;

//                 // Базовые координаты
//                 leaf.position.x = Math.cos(time * 0.15 + angle) * radius;
//                 leaf.position.y = 1 + Math.sin(time * 0.25 + angle * 1.3) * (1 + level * 0.2);
//                 leaf.position.z = Math.sin(time * 0.15 + angle) * radius;

//                 // Вращение с эффектом ветра
//                 leaf.rotation.x = Math.sin(time * 0.5 + idx) * 0.5 * windIntensity;
//                 leaf.rotation.y = Math.cos(time * 0.3 + idx) * 0.5 * windIntensity;
//                 leaf.rotation.z = Math.sin(time * 0.4 + idx) * 0.5 * windIntensity;

//                 // Размер листьев (немного варьируется)
//                 const size = 0.15 + Math.sin(time * 2 + idx) * 0.02;
//                 leaf.scale.set(size, size, size);

//                 // Периодическое "подпрыгивание" листьев
//                 if (idx % 7 === Math.floor(time * 2) % 7) {
//                     leaf.position.y += Math.sin(time * 5) * 0.1;
//                 }
//             });
//         }
//     });

//     return (
//         <group ref={leaves}>
//             {leavesGeometry.map((geo, idx) => (
//                 <mesh key={idx} geometry={geo}>
//                     <meshStandardMaterial
//                         color={new THREE.Color(
//                             0.2 + Math.random() * 0.3, // R
//                             0.5 + Math.random() * 0.4, // G
//                             0.2 + Math.random() * 0.2  // B
//                         )}
//                         side={THREE.DoubleSide}
//                         transparent
//                         opacity={0.7 + Math.random() * 0.2}
//                         roughness={0.5}
//                         metalness={0.1}
//                     />
//                 </mesh>
//             ))}
//         </group>
//     );
// };

// const LevelEffects = ({ level }: { level: number }) => {

//     const effects = useRef<THREE.Group>(null);
//     const [models, setModels] = useState<THREE.Object3D[]>([]);

//     useEffect(() => {
//         const loadModels = async () => {
//             const loader = new GLTFLoader();
//             const effectsToLoad = [];

//             if (level >= 3) effectsToLoad.push('/glb/butterfly.glb');
//             if (level >= 5) effectsToLoad.push('/glb/bird.glb');
//             if (level >= 7) effectsToLoad.push('/glb/squirrel.glb');

//             const loadedModels = await Promise.all(
//                 effectsToLoad.map(url =>
//                     new Promise<THREE.Object3D>(resolve =>
//                         loader.load(url, (gltf) => resolve(gltf.scene.clone()))
//                     )
//                 )
//             );

//             setModels(loadedModels);
//         };

//         loadModels();
//     }, [level]);

//     useFrame((state) => {
//         if (effects.current) {
//             const time = state.clock.getElapsedTime();
//             effects.current.children.forEach((obj, idx) => {
//                 obj.position.x = Math.sin(time * 0.5 + idx) * 2;
//                 obj.position.y = 1 + Math.cos(time * 0.7 + idx) * 0.5;
//                 obj.position.z = Math.cos(time * 0.3 + idx) * 2;
//             });
//         }
//     });

//     return (
//         <group ref={effects}>
//             {models.map((model, i) => (
//                 <primitive key={i} object={model} />
//             ))}
//         </group>
//     );
// };

// interface ARVisualizationProps {
//     level?: number;
//     progress?: number;
//     ecoImpact?: {
//         treesSaved: number;
//         co2Reduced: number;
//         plasticReduced: number;
//     };
// }

// const ARVisualization = ({ level, progress, ecoImpact }: ARVisualizationProps) => {
//     const [arSupported, setArSupported] = useState(false);
//     const [mode, setMode] = useState<'view' | 'ar'>('view');
//     const controlsRef = useRef<any>(null);
//     const { camera, gl } = useThree();

//     useEffect(() => {
//         const checkARSupport = async () => {
//             if ('xr' in navigator) {
//                 try {
//                     const supported = await navigator.xr?.isSessionSupported('immersive-ar');
//                     setArSupported(!!supported);
//                 } catch (e) {
//                     console.error('AR check failed:', e);
//                 }
//             }
//         };

//         checkARSupport();
//         camera.position.set(0, 1.5, 3 + level * 0.2);
//     }, [camera, level]);

//     const startArSession = async () => {
//         try {
//             const session = await navigator.xr!.requestSession('immersive-ar');
//             await gl.xr.setSession(session);
//             setMode('ar');

//             session.addEventListener('end', () => {
//                 setMode('view');
//             });
//         } catch (err) {
//             console.error('AR session error:', err);
//         }
//     };

//     return (
//         <>
//             <ambientLight intensity={0.5 + level * 0.05} />
//             <directionalLight
//                 position={[10, 10, 20]}
//                 intensity={1 + level * 0.1}
//                 color={level > 5 ? '#fff8e1' : '#ffffff'}
//             />
//             <hemisphereLight
//                 intensity={0.5}
//                 groundColor="#4ade80"
//             />

//             <EcoTreeModel level={level} />
//             <LeafParticles level={level} />
//             <LevelEffects level={level} />

//             {mode === 'view' && !gl.xr.isPresenting && (
//                 <Html
//                     position={[-20, 2, -30]}
//                     transform
//                     wrapperClass="html-bottom-wrapper"
//                     center
//                 >
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg w-[50vw]"
//                     >
//                         <h3 className="text-lg font-bold mb-2">Ваш эко-уровень: {level}</h3>
//                         <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
//                             <div
//                                 className="bg-green-600 h-2 rounded-full"
//                                 style={{ width: `${progress}%` }}
//                             />
//                         </div>

//                         {ecoImpact && (
//                             <div className="mb-4 space-y-2">
//                                 <p className="text-sm">
//                                     <span className="font-semibold">🌳 Спасено деревьев:</span> {ecoImpact.treesSaved}
//                                 </p>
//                                 <p className="text-sm">
//                                     <span className="font-semibold">☁️ Сокращено CO₂:</span> {ecoImpact.co2Reduced} кг
//                                 </p>
//                                 <p className="text-sm">
//                                     <span className="font-semibold">🧴 Утилизировано пластика:</span> {ecoImpact.plasticReduced} кг
//                                 </p>
//                             </div>
//                         )}

//                         {arSupported ? (
//                             <Button
//                                 onPress={startArSession}
//                                 className="w-full bg-green-600 hover:bg-green-700"
//                             >
//                                 🚀 Запустить AR-режим
//                             </Button>
//                         ) : (
//                             <p className="text-sm text-gray-500">
//                                 AR не поддерживается вашим устройством
//                             </p>
//                         )}
//                     </motion.div>
//                 </Html>
//             )}

//             {mode === 'view' && (
//                 <OrbitControls
//                     ref={controlsRef}
//                     enableZoom={true}
//                     enablePan={false}
//                     minDistance={3}
//                     maxDistance={10}
//                     autoRotate={level > 3}
//                     autoRotateSpeed={0.5 + level * 0.1}
//                 />
//             )}
//         </>
//     );
// };

// export const Impact: FC = () => {
//     const { user } = useGetUser();
//     const [loaded, setLoaded] = useState(false);

//     const ecoImpact = {
//         treesSaved: user?.treesSaved,
//         co2Reduced: user?.co2Reduced,
//         plasticReduced: user?.plasticReduced,
//     }

//     return (
//         <div className={`relative h-[400px] md:h-[600px] bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden ${className}`}>
//             {!loaded && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="animate-pulse text-green-600">Загрузка 3D...</div>
//                 </div>
//             )}

//             <Canvas
//                 camera={{ position: [0, 0, 5], fov: 20 }}
//                 gl={{ antialias: true, alpha: true }}
//                 onCreated={() => setLoaded(true)}
//             >
//                 <ARVisualization
//                     level={user?.level}
//                     progress={user?.levelProgress}
//                     ecoImpact={ecoImpact}
//                 />
//             </Canvas>

//             <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                 <span>🌱 Уровень {user?.level}</span>
//             </div>

//             <div className="absolute bottom-4 right-4 text-xs text-gray-500">
//                 Вращайте модель пальцем/мышью
//             </div>
//         </div>
//     );
// };