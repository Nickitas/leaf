import React, { FC, } from "react";
import { WalletActions, WalletBalanceCard, WalletLastTransactions } from "@/widgets/profile";

export const Wallet: FC = () => {

    return (
        <div className="space-y-6">
            <WalletBalanceCard />
            <WalletLastTransactions />
            <WalletActions />
        </div>
    );
};