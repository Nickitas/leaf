import React, { FC } from "react";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/shared/ui/icons";



export const TransactionHead: FC = () => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">История транзакций</h1>
            <Input
                className="pl-9"
                placeholder="Поиск по проектам..."
                type="search"
                startContent={<SearchIcon />}
            />
        </div>
    );
};