"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Select, SelectItem } from "@heroui/select";
import { Input, Textarea } from "@heroui/input";
import { Switch } from "@heroui/switch";
import { DateRangePicker } from "@heroui/react";
import { parseDate, DateValue } from "@internationalized/date";
import { useRouter } from "next/navigation";
import { creatProject, IProjectRequest } from "@/entities/project";

const projectTypes = [
  { key: "TreePlanting", label: "Посадка деревьев" },
  { key: "WaterCleanup", label: "Очистка воды" },
  { key: "RenewableEnergy", label: "Возобновляемая энергия" },
  { key: "WasteRecycling", label: "Переработка отходов" },
  { key: "Biodiversity", label: "Биоразнообразие" },
  { key: "Other", label: "Другое" },
];

const impactTypes = [
  { key: "CO2Reduction", label: "Сокращение CO2" },
  { key: "TreesPlanted", label: "Посадка деревьев" },
  { key: "WaterCleaned", label: "Очистка воды" },
  { key: "WasteRecycled", label: "Переработка отходов" },
  { key: "LandRestored", label: "Восстановление земли" },
];

export const CreateProject = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IProjectRequest>({
    title: "",
    purpose: "",
    endDate: new Date().toISOString(),
    goalFunding: 0,
    description: "",
    type: "TreePlanting",
    location: "",
    startDate: new Date().toISOString(),
    shortDescription: "",
    environmental: {
      mainImpact: { type: "CO2Reduction", value: 0 },
      renewableEnergyUsed: true,
      waterMinimized: true,
      biodiversityImpact: "",
      landRestored: 0,
      wasteRecycled: 0,
      waterSaved: 0,
      co2Reduction: 0,
      treesPlanted: 0,
    },
    social: {
      jobsCreated: { enabled: true, count: 0 },
      communityEngagement: { enabled: true, count: 0 },
      resourceAccess: { enabled: true, description: "" },
      educationPrograms: 0,
    },
    governance: {
      financialTransparency: true,
      regularReports: true,
      riskManagement: true,
      stakeholderEngagement: true,
    },
    id: "", // Будет сгенерировано на сервере
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: IProjectRequest) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedInputChange = (
    section: keyof IProjectRequest,
    field: string,
    value: any
  ) => {
    setFormData((prev) => {
      const sectionData = prev[section];
      if (typeof sectionData !== "object" || sectionData === null) {
        return prev;
      }

      return {
        ...prev,
        [section]: {
          ...sectionData,
          [field]: value,
        },
      };
    });
  };

  const handleDateChange = (value: any | null) => {
    if (!value) return;

    setFormData((prev: IProjectRequest) => ({
      ...prev,
      startDate: value.start.toString(),
      endDate: value.end.toString(),
    }));
  };

  const handleSubmit = async (publish: boolean) => {
    setIsLoading(true);
    try {
      const response = await creatProject(formData);
      if (publish) {
        // Дополнительная логика для публикации
      }
      router.push(`/projects/${response.project.id}`);
    } catch (error) {
      console.error("Ошибка при создании проекта:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 bg-background-light dark:bg-background-dark min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Создать новый проект
          </h1>
          <div className="space-x-2">
            <Button
              className="border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400"
              onPress={() => handleSubmit(false)}
              isLoading={isLoading}
            >
              Сохранить черновик
            </Button>
            <Button
              className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-500"
              onPress={() => handleSubmit(true)}
              isLoading={isLoading}
            >
              Опубликовать проект
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Основная информация */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-primary-50 dark:bg-primary-900/20">
                <h2 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
                  Основная информация
                </h2>
              </CardHeader>
              <CardBody className="space-y-4 bg-white dark:bg-gray-800">
                <Input
                  name="title"
                  label="Название проекта"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Введите название"
                  required
                />
                <Textarea
                  name="shortDescription"
                  label="Краткое описание"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  placeholder="Кратко опишите проект (макс. 200 символов)"
                  rows={3}
                />
                <Textarea
                  name="description"
                  label="Полное описание"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Подробное описание проекта"
                  rows={6}
                />
                <Textarea
                  name="purpose"
                  label="Цель проекта"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  placeholder="Опишите цель проекта"
                  rows={3}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    selectedKeys={[formData.type]}
                    onSelectionChange={(keys) =>
                      setFormData((prev) => ({
                        ...prev,
                        type: Array.from(keys)[0] as string,
                      }))
                    }
                    items={projectTypes}
                    label="Тип проекта"
                    placeholder="Выберите тип"
                  >
                    {(item) => (
                      <SelectItem key={item.key}>{item.label}</SelectItem>
                    )}
                  </Select>
                  <Input
                    name="location"
                    label="Местоположение"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Где будет реализован проект?"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <DateRangePicker
                    isRequired
                    label="Период реализации проекта"
                    value={{
                      start: parseDate(formData.startDate.split("T")[0]),
                      end: parseDate(formData.endDate.split("T")[0]),
                    }}
                    onChange={handleDateChange}
                  />
                </div>
              </CardBody>
            </Card>

            {/* Финансирование */}
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-primary-50 dark:bg-primary-900/20">
                <h2 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
                  Финансирование
                </h2>
              </CardHeader>
              <CardBody className="space-y-4 bg-white dark:bg-gray-800">
                <Input
                  name="goalFunding"
                  label="Целевая сумма"
                  value={formData.goalFunding.toString()}
                  onChange={(e) =>
                    setFormData((prev: IProjectRequest) => ({
                      ...prev,
                      goalFunding: Number(e.target.value),
                    }))
                  }
                  type="number"
                  required
                />
              </CardBody>
            </Card>
          </div>

          {/* Превью проекта */}
          <div className="space-y-6">
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-primary-50 dark:bg-primary-900/20">
                <h2 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
                  Превью проекта
                </h2>
              </CardHeader>
              <CardBody className="bg-white dark:bg-gray-800">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Изображение проекта
                  </span>
                </div>
                <Button className="w-full mt-4 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400">
                  Загрузить изображение
                </Button>
              </CardBody>
            </Card>

            {/* Управление */}
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-primary-50 dark:bg-primary-900/20">
                <h2 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
                  Управление проектом
                </h2>
              </CardHeader>
              <CardBody className="space-y-4 bg-white dark:bg-gray-800">
                <Switch
                  isSelected={formData.governance.financialTransparency}
                  onValueChange={(value) =>
                    handleNestedInputChange(
                      "governance",
                      "financialTransparency",
                      value
                    )
                  }
                  className="data-[checked]:bg-primary-600"
                >
                  Финансовая прозрачность
                </Switch>
                <Switch
                  isSelected={formData.governance.regularReports}
                  onValueChange={(value) =>
                    handleNestedInputChange(
                      "governance",
                      "regularReports",
                      value
                    )
                  }
                  className="data-[checked]:bg-primary-600"
                >
                  Регулярные отчеты
                </Switch>
                <Switch
                  isSelected={formData.governance.riskManagement}
                  onValueChange={(value) =>
                    handleNestedInputChange(
                      "governance",
                      "riskManagement",
                      value
                    )
                  }
                  className="data-[checked]:bg-primary-600"
                >
                  Управление рисками
                </Switch>
                <Switch
                  isSelected={formData.governance.stakeholderEngagement}
                  onValueChange={(value) =>
                    handleNestedInputChange(
                      "governance",
                      "stakeholderEngagement",
                      value
                    )
                  }
                  className="data-[checked]:bg-primary-600"
                >
                  Вовлечение заинтересованных сторон
                </Switch>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Экологическое воздействие */}
        <Card className="mt-6 border border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-primary-50 dark:bg-primary-900/20">
            <h2 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
              Экологическое воздействие
            </h2>
          </CardHeader>
          <CardBody className="space-y-6 bg-white dark:bg-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                selectedKeys={[formData.environmental.mainImpact.type]}
                onSelectionChange={(keys) =>
                  handleNestedInputChange("environmental", "mainImpact", {
                    ...formData.environmental.mainImpact,
                    type: Array.from(keys)[0] as string,
                  })
                }
                items={impactTypes}
                label="Основной тип воздействия"
                placeholder="Выберите тип воздействия"
              >
                {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
              </Select>
              <Input
                label="Значение воздействия"
                value={formData.environmental.mainImpact.value.toString()}
                onChange={(e) =>
                  handleNestedInputChange("environmental", "mainImpact", {
                    ...formData.environmental.mainImpact,
                    value: Number(e.target.value),
                  })
                }
                type="number"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Input
                label="Посажено деревьев"
                value={formData.environmental.treesPlanted?.toString() || "0"}
                onChange={(e) =>
                  handleNestedInputChange(
                    "environmental",
                    "treesPlanted",
                    Number(e.target.value)
                  )
                }
                type="number"
              />
              <Input
                label="Восстановлено земли (кв.м)"
                value={formData.environmental.landRestored?.toString() || "0"}
                onChange={(e) =>
                  handleNestedInputChange(
                    "environmental",
                    "landRestored",
                    Number(e.target.value)
                  )
                }
                type="number"
              />
              <Input
                label="Переработано отходов (кг)"
                value={formData.environmental.wasteRecycled?.toString() || "0"}
                onChange={(e) =>
                  handleNestedInputChange(
                    "environmental",
                    "wasteRecycled",
                    Number(e.target.value)
                  )
                }
                type="number"
              />
              <Input
                label="Сэкономлено воды (л)"
                value={formData.environmental.waterSaved?.toString() || "0"}
                onChange={(e) =>
                  handleNestedInputChange(
                    "environmental",
                    "waterSaved",
                    Number(e.target.value)
                  )
                }
                type="number"
              />
            </div>

            <div className="space-y-2">
              <Switch
                isSelected={formData.environmental.renewableEnergyUsed}
                onValueChange={(value) =>
                  handleNestedInputChange(
                    "environmental",
                    "renewableEnergyUsed",
                    value
                  )
                }
                className="data-[checked]:bg-primary-600"
              >
                Использование возобновляемой энергии
              </Switch>
              <Switch
                isSelected={formData.environmental.waterMinimized}
                onValueChange={(value) =>
                  handleNestedInputChange(
                    "environmental",
                    "waterMinimized",
                    value
                  )
                }
                className="data-[checked]:bg-primary-600"
              >
                Минимизация использования воды
              </Switch>
            </div>

            <Textarea
              label="Влияние на биоразнообразие"
              value={formData.environmental.biodiversityImpact || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "environmental",
                  "biodiversityImpact",
                  e.target.value
                )
              }
              placeholder="Опишите влияние проекта на экосистему"
            />
          </CardBody>
        </Card>

        {/* Социальное воздействие */}
        <Card className="mt-6 border border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-primary-50 dark:bg-primary-900/20">
            <h2 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
              Социальное воздействие
            </h2>
          </CardHeader>
          <CardBody className="space-y-6 bg-white dark:bg-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Switch
                  isSelected={formData.social.jobsCreated.enabled}
                  onValueChange={(value) =>
                    handleNestedInputChange("social", "jobsCreated", {
                      ...formData.social.jobsCreated,
                      enabled: value,
                    })
                  }
                  className="data-[checked]:bg-primary-600"
                >
                  Создание рабочих мест
                </Switch>
                <Input
                  label="Количество рабочих мест"
                  value={formData.social.jobsCreated.count?.toString() || "0"}
                  onChange={(e) =>
                    handleNestedInputChange("social", "jobsCreated", {
                      ...formData.social.jobsCreated,
                      count: Number(e.target.value),
                    })
                  }
                  type="number"
                  isDisabled={!formData.social.jobsCreated.enabled}
                />
              </div>

              <div className="space-y-4">
                <Switch
                  isSelected={formData.social.communityEngagement.enabled}
                  onValueChange={(value) =>
                    handleNestedInputChange("social", "communityEngagement", {
                      ...formData.social.communityEngagement,
                      enabled: value,
                    })
                  }
                  className="data-[checked]:bg-primary-600"
                >
                  Вовлечение сообщества
                </Switch>
                <Input
                  label="Количество участников"
                  value={
                    formData.social.communityEngagement.count?.toString() || "0"
                  }
                  onChange={(e) =>
                    handleNestedInputChange("social", "communityEngagement", {
                      ...formData.social.communityEngagement,
                      count: Number(e.target.value),
                    })
                  }
                  type="number"
                  isDisabled={!formData.social.communityEngagement.enabled}
                />
              </div>
            </div>

            <div className="space-y-4">
              <Switch
                isSelected={formData.social.resourceAccess.enabled}
                onValueChange={(value) =>
                  handleNestedInputChange("social", "resourceAccess", {
                    ...formData.social.resourceAccess,
                    enabled: value,
                  })
                }
                className="data-[checked]:bg-primary-600"
              >
                Обеспечение доступа к ресурсам
              </Switch>
              <Textarea
                label="Описание доступа"
                value={formData.social.resourceAccess.description || ""}
                onChange={(e) =>
                  handleNestedInputChange("social", "resourceAccess", {
                    ...formData.social.resourceAccess,
                    description: e.target.value,
                  })
                }
                placeholder="Какие ресурсы и для кого?"
                isDisabled={!formData.social.resourceAccess.enabled}
              />
            </div>

            <Input
              label="Образовательные программы"
              value={formData.social.educationPrograms?.toString() || "0"}
              onChange={(e) =>
                handleNestedInputChange(
                  "social",
                  "educationPrograms",
                  Number(e.target.value)
                )
              }
              type="number"
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
