import Link from "next/link";

import { Button } from "@heroui/button";

import { appRoutes } from "@/kernel/routes";
import { MissionSection } from "@/features/about/ui/mission-section";
import { TeamMemberCard } from "@/features/about/ui/team-member-card";
import { StatsSection } from "@/features/about/ui/stats-section";
import { ValuesSection } from "@/features/about/ui/values-section";


export const About = () => {
  return (
    <article className="bg-background-light dark:bg-background-dark">
      <section className="relative bg-gradient-to-r from-primary-600 to-accent-DARK dark:from-primary-800 dark:to-accent-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наша миссия - зелёное будущее</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Объединяем людей для решения экологических проблем через прозрачные и инновационные решения
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="solid" color="primary" size="lg" as={Link} href={appRoutes.signIn}>
              Присоединиться
            </Button>
            <Button variant="bordered" color='success' size="lg" as={Link} href={appRoutes.projects.main}>
              Наши проекты
            </Button>
          </div>
        </div>
      </section>

      <MissionSection />

      <StatsSection />

      <ValuesSection />

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-600 dark:text-primary-400">
          Наша команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMemberCard
            name="Буланов Игорь"
            role="Backend Developer"
            bio="Специалист по Node.js и микросервисной архитектуре с 5-летним опытом. Любит решать сложные алгоритмические задачи."
            image="/team/1.jpg"
          />
          <TeamMemberCard
            name="Соловьев Денис"
            role="Frontend Developer"
            bio="React-разработчик с глубокими знаниями TypeScript. Специализируется на создании сложных интерфейсов с анимациями."
            image="/team/2.jpg"
          />
          <TeamMemberCard
            name="Морозов Игорь"
            role="Backend Developer"
            bio="Эксперт по Node.js. Разрабатывает высоконагруженные API и оптимизирует запросы к базам данных."
            image="/team/3.jpg"
          />
          <TeamMemberCard
            name="Кодацкий Никита"
            role="Product Manager"
            bio=""
            image="/team/4.jpg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50 dark:bg-primary-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы внести свой вклад?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Присоединяйтесь к нашему сообществу и участвуйте в создании устойчивого будущего
          </p>
          <Button as={Link} href={appRoutes.signIn} size="lg" className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-500">
            Начать сейчас
          </Button>
        </div>
      </section>
    </article>
  );
};
