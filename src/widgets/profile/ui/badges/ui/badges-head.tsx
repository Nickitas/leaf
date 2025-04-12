import React, { FC } from 'react';
import { Button } from '@heroui/button';

export const BadgeHead: FC = () => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Мои достижения</h1>
            <Button variant="bordered">Поделиться</Button>
        </div>
    )
}