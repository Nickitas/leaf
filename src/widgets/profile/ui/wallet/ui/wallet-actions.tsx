import React, { FC } from "react";
import { Button } from "@heroui/button";

export const WalletActions: FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant='bordered' size="lg" className="h-24">
                <div className="text-center">
                    <p className="text-lg">💳</p>
                    <p>Привязать карту</p>
                </div>
            </Button>
            <Button variant="solid" size="lg" className="h-24">
                <div className="text-center">
                    <p className="text-lg">🔄</p>
                    <p>История операций</p>
                </div>
            </Button>
        </div>
    );
};