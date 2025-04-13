import React, { FC } from "react";
import Link from "next/link";

import { Button } from "@heroui/button";

import { appRoutes } from "@/kernel/routes";

export const WalletActions: FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant='bordered' size="lg" className="h-24">
                <div className="text-center">
                    <p className="text-lg">💳</p>
                    <p>Привязать карту</p>
                </div>
            </Button>
            <Button variant="solid" size="lg" className="h-24" as={Link} href={appRoutes.profile.transactions}>
                <div className="text-center">
                    <p className="text-lg">🔄</p>
                    <p>История операций</p>
                </div>
            </Button>
        </div>
    );
};