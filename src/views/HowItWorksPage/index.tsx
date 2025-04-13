import Link from "next/link";
import { Button } from "@heroui/button";
import { appRoutes } from "@/kernel/routes";
import cls from "./index.module.scss";

export const HowItWorksPage = () => {
  return (
    <div className="space-y-6">
      {/* Баннер с контентом */}
      <div className={cls.banner}> </div>

      <div className="relative container flex flex-col items-center  mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Как это <span className="text-green-400">работает</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Инвестируя в устойчивые проекты с помощью Leaf, вы оказываете прямое
          положительное влияние на людей и планету.
        </p>
        <Button size="lg" color="primary" as={Link} href={appRoutes.signIn}>
          Начать сейчас
        </Button>
      </div>

      {/* Основной контент страницы */}
      <div className="container mx-auto px-4 text-center pt-96 md:pt-80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-4">1</div>
            <h2 className="text-2xl font-semibold mb-4">Регистрация</h2>
            <p className="text-gray-600">
              Создайте аккаунт за 2 минуты. Без сложных форм и требований.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-4">2</div>
            <h2 className="text-2xl font-semibold mb-4">Выбор проекта</h2>
            <p className="text-gray-600">
              Изучите проверенные ESG-проекты с прозрачной отчетностью и
              рейтингами.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-4">3</div>
            <h2 className="text-2xl font-semibold mb-4">Инвестирование</h2>
            <p className="text-gray-600">
              Вложите любую сумму и отслеживайте экологический и социальный
              эффект.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-4">4</div>
            <h2 className="text-2xl font-semibold mb-4">Ваш вклад</h2>
            <p className="text-gray-600">
              Получайте обновления о прогрессе и визуализируйте свой вклад через
              AR-датчики.
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center pb-16">
          <Button size="lg" color="primary" as={Link} href={appRoutes.signIn}>
            Начать сейчас
          </Button>
          <Button
            size="lg"
            variant="bordered"
            as={Link}
            href={appRoutes.projects.main}
          >
            Смотреть проекты
          </Button>
        </div>
      </div>
    </div>
  );
};
