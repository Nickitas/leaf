"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';

interface EcoProgressProps {
    value: number;
    className?: string;
    showIndicator?: boolean;
}

export function EcoProgress({
    value,
    className,
    showIndicator = true,
}: EcoProgressProps) {
    const controls = useAnimation();
    const limitedValue = Math.min(Math.max(value, 0), 100);

    useEffect(() => {
        controls.start({
            width: `${limitedValue}%`,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        });
    }, [limitedValue, controls]);

    return (
        <div className={clsx("w-full", className)}>
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                    animate={controls}
                    initial={{ width: 0 }}
                    className={clsx(
                        "h-full rounded-full",
                        "bg-gradient-to-r from-green-400 via-green-500 to-emerald-500",
                        "shadow-[0_0_8px_rgba(74,222,128,0.6)]"
                    )}
                >
                    {/* Анимированные листики */}
                    {showIndicator && (
                        <motion.div
                            animate={{
                                x: ['0%', '100%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute right-0 top-0 h-4 w-4 -translate-y-1/2 transform"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="text-white"
                            >
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z"
                                    fill="white"
                                />
                            </svg>
                        </motion.div>
                    )}
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-between px-1">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="h-1 w-1 rounded-full bg-white dark:bg-gray-800 opacity-70"
                        />
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400"
            >
                <span>Прогресс</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                    {Math.round(limitedValue)}%
                </span>
            </motion.div>

            {limitedValue >= 100 && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-2 flex justify-center"
                >
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-3 py-1 text-sm font-medium text-green-800 dark:text-green-200">
                        🎉 Цель достигнута!
                    </span>
                </motion.div>
            )}
        </div>
    );
}