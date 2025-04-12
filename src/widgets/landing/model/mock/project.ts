import { Project } from "../types/project.interface";
import { riverCleanup } from "@/shared/styles/assets/images/projects";
import { treePlanting } from "@/shared/styles/assets/images/projects";
import { recyclingBins } from "@/shared/styles/assets/images/projects";
import { ecoEducation } from "@/shared/styles/assets/images/projects";

export const projects: Project[] = [
    {
        id: '1',
        title: 'Спасение реки Волги',
        shortDescription: 'Очистка береговой линии и восстановление экосистемы реки Волга',
        fullDescription: 'Полномасштабный проект по очистке береговой линии Волги на протяжении 50 км. Включает уборку мусора, высадку прибрежной растительности и мониторинг состояния воды.',
        imageUrl: riverCleanup.src,
        gallery: [
            '/images/projects/river-gallery1.webp',
            '/images/projects/river-gallery2.webp'
        ],
        goalFunding: 500000,
        currentFunding: 275000,
        donorsCount: 124,
        daysLeft: 30,
        category: 'ecology',
        status: 'active',
        location: 'Волгоградская область',
        coordinates: {
            lat: 48.708,
            lng: 44.513
        },
        creatorId: 'user1',
        teamMembers: ['user11', 'user12'],
        createdAt: new Date('2023-05-15'),
        updatedAt: new Date('2023-10-20'),
        publishedAt: new Date('2023-05-20'),
        isFeatured: true,
        socialLinks: {
            website: 'https://volga-clean.ru',
            instagram: 'volga_clean_project'
        },
        tags: ['река', 'очистка', 'экосистема']
    },
    {
        id: '2',
        title: 'Зеленые легкие города',
        shortDescription: 'Посадка 10 000 деревьев в городских парках и скверах',
        fullDescription: 'Масштабная высадка деревьев в городской черте для улучшения экологии и создания комфортной среды для жителей.',
        imageUrl: treePlanting.src,
        goalFunding: 300000,
        currentFunding: 120500,
        donorsCount: 89,
        daysLeft: 15,
        category: 'conservation',
        status: 'active',
        location: 'г. Москва',
        creatorId: 'user2',
        createdAt: new Date('2023-06-10'),
        updatedAt: new Date('2023-10-15'),
        publishedAt: new Date('2023-06-15'),
        tags: ['деревья', 'озеленение', 'город']
    },
    {
        id: '3',
        title: 'Переработка пластика',
        shortDescription: 'Установка контейнеров для раздельного сбора пластика',
        fullDescription: 'Организация системы раздельного сбора пластиковых отходов в каждом районе города с последующей переработкой.',
        imageUrl: recyclingBins.src,
        videoUrl: 'https://youtube.com/watch?v=recycling-project',
        goalFunding: 750000,
        currentFunding: 620000,
        donorsCount: 215,
        daysLeft: 45,
        category: 'recycling',
        status: 'active',
        location: 'г. Санкт-Петербург',
        creatorId: 'user3',
        createdAt: new Date('2023-04-01'),
        updatedAt: new Date('2023-10-18'),
        publishedAt: new Date('2023-04-10'),
        isFeatured: true,
        socialLinks: {
            instagram: 'spb_recycling'
        },
        tags: ['пластик', 'переработка', 'экология']
    },
    {
        id: '4',
        title: 'Школа экологического просвещения',
        shortDescription: 'Образовательные программы для детей и взрослых',
        fullDescription: 'Организация регулярных лекций, мастер-классов и экскурсий по экологической тематике.',
        imageUrl: ecoEducation.src,
        goalFunding: 200000,
        currentFunding: 85000,
        donorsCount: 42,
        daysLeft: 60,
        category: 'education',
        status: 'active',
        creatorId: 'user4',
        createdAt: new Date('2023-09-01'),
        updatedAt: new Date('2023-10-01'),
        tags: ['образование', 'лекции', 'дети']
    }
];