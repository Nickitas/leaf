export interface ITransaction {
  id?: string;
  projectId?: string,
  project?: {
    title: string;
  };
  amount: number;
  type: "refill" | "donation" | 'bonus';
  updatedAt?: string;
  status?: "completed"
}
