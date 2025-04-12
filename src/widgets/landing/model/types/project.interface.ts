export type ProjectCategory = 
  | 'ecology' 
  | 'conservation' 
  | 'recycling' 
  | 'education' 
  | 'animals' 
  | 'water' 
  | 'forest';

export type ProjectStatus = 
  | 'draft' 
  | 'active' 
  | 'completed' 
  | 'suspended' 
  | 'archived';

export interface Project {
  // Основная информация
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  
  // Медиа
  imageUrl: string;
  gallery?: string[]; // Дополнительные изображения
  videoUrl?: string; // Видео презентация
  
  // Финансы
  goalFunding: number;
  currentFunding: number;
  donorsCount?: number; // Количество поддержавших
  
  // Временные параметры
  daysLeft: number;
  startDate?: Date; // Дата начала проекта
  endDate?: Date; // Планируемая дата завершения
  
  // Классификация
  category: ProjectCategory;
  status: ProjectStatus;
  tags?: string[]; // Дополнительные теги
  
  // География
  location?: string; // Город/регион
  coordinates?: { // Геокоординаты
    lat: number;
    lng: number;
  };
  
  // Авторство
  creatorId: string;
  teamMembers?: string[]; // ID участников команды
  
  // Даты
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date; // Дата публикации
  
  // Дополнительно
  isFeatured?: boolean; // Избранный проект
  socialLinks?: { // Ссылки на соцсети проекта
    website?: string;
    instagram?: string;
    facebook?: string;
  };
}