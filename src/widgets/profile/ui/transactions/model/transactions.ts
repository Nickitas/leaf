export interface Transaction {
    id: string;
    project: string;
    date: string;
    amount: number;
    type: string;
    status: string;
}


export const transactions: Transaction[] = [
    {
        id: "1",
        project: "Очистка реки Волга",
        date: "2023-10-15T14:30:00Z",
        amount: 1500,
        type: "donation",
        status: "completed",
    },
    {
        id: "2",
        project: "Посадка деревьев в Москве",
        date: "2023-10-10T09:15:00Z",
        amount: 500,
        type: "donation",
        status: "completed",
    },
    {
        id: "3",
        project: "Бонус за активность",
        date: "2023-10-05T12:00:00Z",
        amount: 100,
        type: "bonus",
        status: "completed",
    },
    {
        id: "4",
        project: "Переработка пластика",
        date: "2023-09-28T16:45:00Z",
        amount: 2000,
        type: "donation",
        status: "completed",
    },
    {
        id: "5",
        project: "Возврат средств",
        date: "2023-09-20T11:20:00Z",
        amount: 300,
        type: "refund",
        status: "completed",
    },
];