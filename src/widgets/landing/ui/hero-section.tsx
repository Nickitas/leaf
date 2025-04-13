import Link from "next/link";
import { Button } from "@heroui/button";
import { appRoutes } from "@/kernel/routes";

export const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Объединяем усилия для <span className="text-green-600">зелёного</span>{" "}
          будущего
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Сообщество людей, которые верят, что даже маленькие шаги могут
          привести к большим изменениям.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" color="primary" as={Link} href={appRoutes.signIn}>
            Присоединиться
          </Button>
          <Button size="lg" variant="bordered" as={Link} href={appRoutes.about}>
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};
