import React from "react";
import { Card, CardBody } from "@heroui/card";

export const ValuesSection = () => {
    const values = [
        {
            title: "Прозрачность",
            description: "Все проекты и транзакции полностью открыты для проверки",
            icon: "🔍",
        },
        {
            title: "Инновации",
            description: "Используем современные технологии для экологических решений",
            icon: "💡",
        },
        {
            title: "Сообщество",
            description: "Объединяем людей для достижения общих целей",
            icon: "👥",
        },
        {
            title: "Устойчивость",
            description: "Фокусируемся на долгосрочном положительном воздействии",
            icon: "🌱",
        },
    ];

    return (
        <section className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-600 dark:text-primary-400">
                Наши ценности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                        <CardBody className="text-center">
                            <span className="text-4xl mb-4 inline-block">{value.icon}</span>
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
};