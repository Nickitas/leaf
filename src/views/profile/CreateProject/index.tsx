"use client";

import React, { FC } from 'react';
import { Button } from '@heroui/button';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Select, SelectItem } from '@heroui/select';
import { Input, Textarea } from '@heroui/input';
import { Switch } from '@heroui/switch';
import { DateRangePicker } from "@heroui/react";
import { parseDate } from "@internationalized/date";

const projectTypes = [
    { key: "TreePlanting", label: "Посадка деревьев" },
    { key: "WaterCleanup", label: "Очистка воды" },
    { key: "RenewableEnergy", label: "Возобновляемая энергия" },
    { key: "WasteRecycling", label: "Переработка отходов" },
    { key: "Biodiversity", label: "Биоразнообразие" },
    { key: "Other", label: "Другое" },
];

const impactType = [
    { key: "CO2Reduction", label: "Сокращение CO2" },
    { key: "TreesPlanted", label: "Посадка деревьев" },
    { key: "WaterCleaned", label: "Очистка воды" },
    { key: "WasteRecycled", label: "Переработка отходов" },
    { key: "LandRestored", label: "Восстановление земли" },
    { key: "Other", label: "Другое" },
];

export const CreateProject: FC = () => {
    return (
        <div className="space-y-6 bg-background-light dark:bg-background-dark min-h-screen p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        Создать новый проект
                    </h1>
                    <div className="space-x-2">
                        <Button className="border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400">
                            Сохранить черновик
                        </Button>
                        <Button className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-500">
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
                                    label="Название проекта"
                                    placeholder="Введите название"
                                    required
                                    className="focus:ring-primary-500 focus:border-primary-500"
                                />
                                <Textarea
                                    label="Краткое описание"
                                    placeholder="Кратко опишите проект (макс. 200 символов)"
                                    rows={3}
                                    className="focus:ring-primary-500 focus:border-primary-500"
                                />
                                <Textarea
                                    label="Полное описание"
                                    placeholder="Подробное описание проекта"
                                    rows={6}
                                    className="focus:ring-primary-500 focus:border-primary-500"
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Select
                                        className="w-full"
                                        items={projectTypes}
                                        label="Тип проекта"
                                        placeholder="Выберите тип"
                                    >
                                        {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
                                    </Select>
                                    <Input
                                        label="Местоположение"
                                        placeholder="Где будет реализован проект?"
                                        required
                                        className="focus:ring-primary-500 focus:border-primary-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <DateRangePicker
                                        isRequired
                                        className="w-full"
                                        label="Период реализации проекта"
                                        defaultValue={{
                                            start: parseDate(new Date().toISOString().split('T')[0]),
                                            end: parseDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]),
                                        }}
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
                                    label="Целевая сумма"
                                    placeholder="500"
                                    type="number"
                                    required
                                    className="focus:ring-primary-500 focus:border-primary-500"
                                />
                                <Textarea
                                    label="Цель сбора"
                                    placeholder="На что будут использованы средства?"
                                    rows={3}
                                    className="focus:ring-primary-500 focus:border-primary-500"
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
                                    <span className="text-gray-500 dark:text-gray-400">Изображение проекта</span>
                                </div>
                                <Button
                                    className="w-full mt-4 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400"
                                >
                                    Загрузить изображение
                                </Button>
                            </CardBody>
                        </Card>

                        <Card className="border border-gray-200 dark:border-gray-700">
                            <CardHeader className="bg-primary-50 dark:bg-primary-900/20">
                                <h2 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
                                    Дополнительные настройки
                                </h2>
                            </CardHeader>
                            <CardBody className="space-y-4 bg-white dark:bg-gray-800">
                                <Switch defaultChecked className="data-[checked]:bg-primary-600">
                                    Финансовая прозрачность
                                </Switch>
                                <Switch defaultChecked className="data-[checked]:bg-primary-600">
                                    Регулярные отчеты
                                </Switch>
                                <Switch defaultChecked className="data-[checked]:bg-primary-600">
                                    Управление рисками
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
                                className="w-full"
                                items={impactType}
                                label="Тип воздействия"
                                placeholder="Выберите тип воздействия"
                            >
                                {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
                            </Select>
                            <Input
                                label="Значение воздействия"
                                type="number"
                                className="focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Input
                                label="Посажено деревьев"
                                type="number"
                                className="focus:ring-primary-500 focus:border-primary-500"
                            />
                            <Input
                                label="Восстановлено земли"
                                type="number"
                                className="focus:ring-primary-500 focus:border-primary-500"
                            />
                            <Input
                                label="Переработано отходов"
                                type="number"
                                className="focus:ring-primary-500 focus:border-primary-500"
                            />
                            <Input
                                label="Сэкономлено воды"
                                type="number"
                                className="focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <Switch defaultChecked className="data-[checked]:bg-primary-600">
                                Использование возобновляемой энергии
                            </Switch>
                            <Switch defaultChecked className="data-[checked]:bg-primary-600">
                                Минимизация использования воды
                            </Switch>
                        </div>

                        <Textarea
                            label="Влияние на биоразнообразие"
                            placeholder="Опишите влияние проекта на экосистему"
                            className="focus:ring-primary-500 focus:border-primary-500"
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
                                <Switch defaultChecked className="data-[checked]:bg-primary-600">
                                    Создание рабочих мест
                                </Switch>
                                <Input
                                    label="Количество рабочих мест"
                                    type="number"
                                    disabled
                                    className="focus:ring-primary-500 focus:border-primary-500"
                                />
                            </div>

                            <div className="space-y-4">
                                <Switch defaultChecked className="data-[checked]:bg-primary-600">
                                    Вовлечение сообщества
                                </Switch>
                                <Input
                                    label="Количество участников"
                                    type="number"
                                    disabled
                                    className="focus:ring-primary-500 focus:border-primary-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Switch defaultChecked className="data-[checked]:bg-primary-600">
                                Обеспечение доступа к ресурсам
                            </Switch>
                            <Textarea
                                label="Описание доступа"
                                placeholder="Какие ресурсы и для кого?"
                                disabled
                                className="focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>

                        <Input
                            label="Образовательные программы"
                            type="number"
                            className="focus:ring-primary-500 focus:border-primary-500"
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};