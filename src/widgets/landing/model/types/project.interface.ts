export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription?: string;
    imageUrl: string;
    goalFunding: number;
    currentFunding: number;
    deadline?: Date;
    category: 'ecology' | 'recycling' | 'conservation' | 'education';
    status: 'active' | 'completed' | 'planned';
    creatorId: string;
    createdAt: Date;
    updatedAt: Date;
}