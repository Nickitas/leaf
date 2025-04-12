export interface IUser {
  id: string;
  accessToken: string;
  name: string;
  email: string;
  bio: string;
  joinDate: string;
  level: number;
  levelProgress: number;
  co2Economy: number;
  rating: number;
  badges: string[];
  totalTransactionsSum: {
    _sum: {
      amount: number | null;
    };
  };
}
