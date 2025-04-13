"use client";

import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { EcoProgress } from "@/shared/ui/progress/EcoProgress";
import { DonateModal } from "@/features/project/ui/donate-modal";
import { useGetProjectById } from "@/entities/project";
import Image from "next/image";

export function ProjectId({ id }: { id: string }) {
  const { project, isLoading } = useGetProjectById(id);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!project) {
    return;
  }

  if (
    typeof project.currentFunding === "undefined" ||
    typeof project.goalFunding === "undefined" ||
    typeof project.endDate === "undefined" ||
    typeof project.type === "undefined" ||
    typeof project.description === "undefined" ||
    typeof project.title === "undefined"
  ) {
    return <div>Упс, пусто</div>;
  }

  const progress = (project.currentFunding / project.goalFunding) * 100;
  const daysLeft = Math.ceil(
    (new Date(project.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="space-y-6 p-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <DonateModal projectId={project.id} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardBody>
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <Image src={"/jungles.png"} alt={""} width={800} height={700}/>
              </div>

              <h2 className="text-xl font-bold mb-4">О проекте</h2>
              <p className="mb-6">{project.description}</p>

              {project.purpose && (
                <>
                  <h2 className="text-xl font-bold mb-4">Цель проекта</h2>
                  <p>{project.purpose}</p>
                </>
              )}
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Детали проекта</h2>
            </CardHeader>
            <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.location && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Местоположение
                  </p>
                  <p>{project.location}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Тип проекта
                </p>
                <p>
                  {project.type === "TreePlanting"
                    ? "Посадка деревьев"
                    : project.type === "WaterCleaning"
                      ? "Очистка воды"
                      : "Возобновляемая энергия"}
                </p>
              </div>
              {project.startDate && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Дата начала
                  </p>
                  <p>{project.startDate}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Дата завершения
                </p>
                <p>{project.endDate}</p>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Финансирование</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Собрано: {project.currentFunding} ₽</span>
                  <span>Цель: {project.goalFunding} ₽</span>
                </div>
                <EcoProgress value={progress} />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Осталось дней
                  </p>
                  <p>{daysLeft}</p>
                </div>
                {/* <div>
                  <p className="text-gray-500 dark:text-gray-400">Статус</p>
                  <p>{project?.isActive ? "Активен" : "Не активен"}</p>
                </div> */}
              </div>

                <DonateModal 
                  projectId={project.id} 
                  variant="full" 
                  // refetchProjects={fetchProjects}
                />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Достижения</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <span className="text-green-600 dark:text-green-400">🌳</span>
                </div>
                <div>
                  <p className="font-medium">500+ деревьев</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Уже посажено
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
