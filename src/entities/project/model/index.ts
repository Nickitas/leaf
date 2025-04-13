interface IMainImpact {
  type: string; 
  value: number;
}

interface IEnvironmentalRequest {
  mainImpact: IMainImpact;
  renewableEnergyUsed: boolean;
  waterMinimized: boolean;
  biodiversityImpact?: string;
  landRestored?: number;
  wasteRecycled?: number;
  waterSaved?: number;
  co2Reduction?: number;
  treesPlanted?: number;
}

interface ISocialRequest {
  jobsCreated: { enabled: boolean; count?: number };
  communityEngagement: { enabled: boolean; count?: number };
  resourceAccess: { enabled: boolean; description?: string };
  educationPrograms?: number;
}

interface IGovernanceRequest {
  financialTransparency: boolean;
  regularReports: boolean;
  riskManagement: boolean;
  stakeholderEngagement: boolean;
}

export interface IProjectRequest {
  id: string;
  title: string;
  purpose: string;
  endDate: string;
  goalFunding: number;
  description: string;
  type: string;
  location: string;
  startDate: string;
  shortDescription: string;
  environmental: IEnvironmentalRequest;
  social: ISocialRequest;
  governance: IGovernanceRequest;
}

interface IESGScoreResponse {
  id: string;
  ratingDate: string;
  projectId: string;
  overallScore: number;
  environmentalScore: number;
  socialScore: number;
  governanceScore: number;
  ratingCategory: string;
  co2Reduction?: number | null;
  treesPlanted?: number | null;
  waterSaved?: number | null;
  wasteRecycled?: number | null;
  landRestored?: number | null;
  renewableEnergyUsed?: boolean;
  waterMinimized?: boolean;
  biodiversityImpact?: string;
  jobsCreated?: number;
  communityEngagement?: number;
  resourceAccess?: string;
  educationPrograms?: number;
  financialTransparency?: boolean;
  regularReports?: boolean;
  riskManagement?: boolean;
  stakeholderEngagement?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IProjectResponse extends IProjectRequest {
  id: string;
  userId: string;
  currentFunding?: number;
  createdAt: string;
  updatedAt: string;
  esg?: IESGScoreResponse;
}