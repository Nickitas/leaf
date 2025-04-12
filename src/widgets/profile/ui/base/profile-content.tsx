import React, { FC, ReactNode } from "react";

import { ProfileMenuMob } from "./profile-menu-mob";

interface ProfileContentProps {
    children: ReactNode;
}

export const ProfileContent: FC<ProfileContentProps> = ({ children }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <ProfileMenuMob />
            <div className="p-4 md:p-6">{children}</div>
        </div>
    );
};