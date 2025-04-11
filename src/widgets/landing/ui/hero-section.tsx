import { Button } from "@heroui/button"

export const HeroSection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Объединяем усилия для <span className="text-green-600">зелёного</span> будущего
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                    Инновационная платформа для привлечения широкой аудитории к экологическим проектам через прозрачность и доступные инструменты
                </p>
                <div className="flex gap-4 justify-center">
                    <Button size="lg">Присоединиться</Button>
                    <Button size="lg" variant='bordered'>
                        Узнать больше
                    </Button>
                </div>
            </div>
        </section>
    )
}