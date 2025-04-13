export interface ITransaction {
  id?: string;
  projectId?: string,
  project?: {
    title: string;
  };
  amount: number;
  type: "refill" | "donation";
  updatedAt?: string;
  status?: "completed"
}
