import React, { FC, } from "react";
import { TransactionHead } from "@/widgets/profile/ui/transactions/ui/transaction-head";
import { TransactionTabs } from "@/widgets/profile/ui/transactions/ui/transaction-tabs";


export const Transactions: FC = () => {

    return (
        <div className="space-y-6">
            <TransactionHead />
            <TransactionTabs />
        </div>
    );
};