import React from "react";

export const StatsSection = () => {
    const stats = [
        { value: "50+", label: "Завершенных проектов" },
        { value: "10K+", label: "Участников" },
        { value: "5M+", label: "Посаженных деревьев" },
        { value: "100%", label: "Прозрачность" },
    ];

    return (
        <section className="py-16 bg-primary-50 dark:bg-primary-900/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                                {stat.value}
                            </p>
                            <p className="text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};