"use client";

import React, { FC } from "react";

// import { } from '@/features/projects/ui';

import { SearchIcon } from "lucide-react";
import { Input } from "@heroui/input";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { EcoProgress } from "@/shared/ui/progress/EcoProgress";
import { Button } from "@heroui/button";
import { Tab, Tabs } from "@heroui/tabs";
import { appRoutes } from "@/kernel/routes";
import Link from "next/link";
import { IProjectResponse, useGetProjects } from "@/entities/project";
import { ProjectCard } from "@/widgets/landing/ui/project-card";

const projectTypes = [
  { key: "all", title: "Все проекты", filter: (p: any) => true },
  {
    key: "tree",
    title: "Посадка деревьев",
    filter: (p: any) => p.type === "TreePlanting",
  },
  {
    key: "water",
    title: "Очистка воды",
    filter: (p: any) => p.type === "WaterCleaning",
  },
  {
    key: "energy",
    title: "Возобновляемая энергия",
    filter: (p: any) => p.type === "RenewableEnergy",
  },
];

// const projectsData = {
//     list: [
//         {
//             id: "afd8fc55-9b03-4e29-ad25-8f5c738d8b7a",
//             title: "Древо насаждения в Ростове-на-Дону",
//             description: "Насаждаем деревья в городских парках и скверах для улучшения экологии города",
//             currentFunding: 400,
//             goalFunding: 500000,
//             type: "TreePlanting",
//             endDate: "2026-04-12T12:29:33.637Z",
//             esg: {
//                 co2Reduction: 210000,
//                 overallScore: 53,
//                 ratingCategory: "C",
//                 ratingDate: "2025-04-12T23:53:44.607Z"
//             },
//             donators: 1
//         },
//         {
//             id: "c9c9861f-e6af-420e-9f95-038d6591b72d",
//             title: "Очистка реки Дон",
//             description: "Проект по очистке береговой линии и воды реки Дон от мусора",
//             currentFunding: 0,
//             goalFunding: 500,
//             type: "WaterCleaning",
//             endDate: "2025-04-12T23:48:10.753Z",
//             esg: {
//                 co2Reduction: 0,
//                 overallScore: 33,
//                 ratingCategory: "D",
//                 ratingDate: "2025-04-12T23:48:40.298Z"
//             },
//             donators: 0
//         },
//         {
//             id: "ce853ae1-6d05-4e77-8ea4-673868a70c6b",
//             title: "Солнечные панели для школ",
//             description: "Установка солнечных панелей в городских школах",
//             currentFunding: 200,
//             goalFunding: 500,
//             type: "RenewableEnergy",
//             endDate: "2026-04-12T22:57:09.108Z",
//             esg: {
//                 co2Reduction: 0,
//                 overallScore: 33,
//                 ratingCategory: "D",
//                 ratingDate: "2025-04-12T22:57:11.095Z"
//             },
//             donators: 1
//         }
//     ]
// };

export function ProjectsTabs() {
  const { projects, isLoading } = useGetProjects();

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Project types" color="primary">
        {projectTypes.map((type) => (
          <Tab key={type.key} title={type.title}>
            <Card className="mt-4">
              <CardBody>
                {isLoading ? (
                  <div>Загрузка проектов...</div>
                ) : (
                  <ProjectsList projects={projects.filter(type.filter)} />
                )}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

function ProjectsList({ projects }: { projects: IProjectResponse[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export const Projects: FC = () => {
  return (
    <article>
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Все проекты</h1>
          <div className="relative w-64">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-9"
              placeholder="Поиск проектов..."
              type="search"
            />
          </div>
        </div>

        <ProjectsTabs />
      </div>
    </article>
  );
};
