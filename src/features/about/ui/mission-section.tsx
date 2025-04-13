import React from "react";

export const MissionSection = () => {
    return (
        <section className="py-16 container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                        Наша миссия
                    </h2>
                    <p className="text-lg mb-4">
                        Мы создаем платформу, которая объединяет людей для решения экологических проблем через прозрачные и доступные инструменты.
                    </p>
                    <p className="text-lg mb-4">
                        Наша цель - сделать экологические инициативы простыми для понимания и участия каждого.
                    </p>
                    <p className="text-lg">
                        Мы верим, что только вместе мы можем создать устойчивое будущее для нашей планеты.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Видео о нашей миссии</span>
                    </div>
                </div>
            </div>
        </section>
    );
};