import React, { FC } from "react";
import { Button } from "@heroui/button";

interface MainHeadProps {
    isEditing: boolean;
    setIsEditing: (state: boolean) => void;
    editCancel: () => void;
    submit: () => void;
}

export const MainHead: FC<MainHeadProps> = ({ 
    isEditing, 
    setIsEditing,
    editCancel,
    submit,
}) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Мой профиль</h1>
            {isEditing ? (
                <div className="space-x-2">
                    <Button
                        variant='ghost'
                        color='danger'
                        onPress={editCancel}
                    >
                        Отмена
                    </Button>
                    <Button
                        variant="solid"
                        onPress={submit}
                    >
                        Сохранить
                    </Button>
                </div>
            ) : (
                <Button color='success' onPress={() => setIsEditing(true)}>
                    Редактировать
                </Button>
            )}
        </div>
    );
};