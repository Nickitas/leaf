import React, { FC, } from "react";
import { TransactionHead, TransactionTabs } from "@/widgets/profile";


export const Transactions: FC = () => {

    return (
        <div className="space-y-6">
            <TransactionHead />
            <TransactionTabs />
        </div>
    );
};