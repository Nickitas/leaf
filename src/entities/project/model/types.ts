export interface IProject {
  title: string;
  description: string;
  currentAmount: number;
  purposeAmount: number;
  type: string;
  endDate: string;
  esg: {
    co2Reduction: number;
    overallScore: number;
    ratingCategory: number | null;
    ratingDate: string;
  };
}
