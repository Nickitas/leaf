"use client";

import React, { FC, useEffect } from 'react';

// import { } from '@/features/projects/ui';

import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { EcoProgress } from '@/shared/ui/progress/EcoProgress';
import { DonateModal } from '@/features/project/ui/donate-modal';


interface Project {
    id: string;
    title: string;
    description: string;
    purpose?: string;
    location?: string;
    startDate?: string;
    currentFunding: number;
    goalFunding: number;
    type: string;
    endDate: string;
    esg: {
        co2Reduction: number;
        overallScore: number;
        ratingCategory: string;
        ratingDate: string;
    };
    donators: number;
    isActive?: boolean;
}

const projectsData = {
    list: [
        {
            id: "afd8fc55-9b03-4e29-ad25-8f5c738d8b7a",
            title: "Древо насаждения в Ростове-на-Дону",
            description: "Насаждаем деревья в городских парках и скверах для улучшения экологии города",
            currentFunding: 400,
            goalFunding: 500000,
            type: "TreePlanting",
            endDate: "2026-04-12T12:29:33.637Z",
            esg: {
                co2Reduction: 210000,
                overallScore: 53,
                ratingCategory: "C",
                ratingDate: "2025-04-12T23:53:44.607Z"
            },
            donators: 1
        },
        {
            id: "c9c9861f-e6af-420e-9f95-038d6591b72d",
            title: "Очистка реки Дон",
            description: "Проект по очистке береговой линии и воды реки Дон от мусора",
            currentFunding: 0,
            goalFunding: 500,
            type: "WaterCleaning",
            endDate: "2025-04-12T23:48:10.753Z",
            esg: {
                co2Reduction: 0,
                overallScore: 33,
                ratingCategory: "D",
                ratingDate: "2025-04-12T23:48:40.298Z"
            },
            donators: 0
        },
        {
            id: "ce853ae1-6d05-4e77-8ea4-673868a70c6b",
            title: "Солнечные панели для школ",
            description: "Установка солнечных панелей в городских школах",
            currentFunding: 200,
            goalFunding: 500,
            type: "RenewableEnergy",
            endDate: "2026-04-12T22:57:09.108Z",
            esg: {
                co2Reduction: 0,
                overallScore: 33,
                ratingCategory: "D",
                ratingDate: "2025-04-12T22:57:11.095Z"
            },
            donators: 1
        }
    ] as Project[]
};

async function getProject(id: string): Promise<Project | undefined> {
    return projectsData.list.find((project) => project.id === id);
}

export async function ProjectId({ params }: { params: { id: string } }) {
    const [project, setProject] = React.useState<Project | null>(null);
    const [loading, setLoading] = React.useState(true);
  
    useEffect(() => {
      const fetchProject = async () => {
        try {
          const data = await getProject(params.id);
          if (data) {
            setProject(data);
          } else {
            console.error('Project not found');
          }
        } catch (error) {
          console.error('Error fetching project:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProject();
    }, [params.id]);
  
    if (loading) {
      return <div>Загрузка...</div>;
    }
  
    if (!project) {
      return <div>Проект не найден</div>;
    }
  
    const progress = (project.currentFunding / project.goalFunding) * 100;
    const daysLeft = Math.ceil((new Date(project.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

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
                                <span className="text-gray-500 dark:text-gray-400">Изображение проекта</span>
                            </div>

                            <h2 className="text-xl font-bold mb-4">О проекте</h2>
                            <p className="mb-6">{project.description}</p>

                            <h2 className="text-xl font-bold mb-4">Цель проекта</h2>
                            <p>{project.purpose}</p>
                        </CardBody>
                    </Card>


                    <Card>
                        <CardHeader>
                            <h2 className="text-xl font-bold">Детали проекта</h2>
                        </CardHeader>
                        <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Местоположение</p>
                                <p>{project.location}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Тип проекта</p>
                                <p>
                                    {project.type === "TreePlanting" ? "Посадка деревьев" :
                                        project.type === "WaterCleaning" ? "Очистка воды" : "Возобновляемая энергия"}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Дата начала</p>
                                <p>{project.startDate}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Дата завершения</p>
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
                                    <p className="text-gray-500 dark:text-gray-400">Осталось дней</p>
                                    <p>{daysLeft}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400">Статус</p>
                                    <p>{project.isActive ? "Активен" : "Не активен"}</p>
                                </div>
                            </div>

                            <DonateModal projectId={project.id} variant="full" />
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
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Уже посажено</p>
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}