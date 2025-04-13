export interface IUser {
  id: string;
  accessToken: string;
  name: string;
  email: string;
  bio: string;
  joinDate: string;
  level: number;
  levelProgress: number;
  balance: number,
  co2Reduced: number;
  plasticReduced: number,
  treesSaved: number,
  rating: number;
  badges: string[];
  totalTransactionsSum: {
    _sum: {
      amount: number | null;
    };
  };
}
