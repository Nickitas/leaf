import React, { FC } from "react";

import { ProfileHead } from "./profile-head";
import { ProfileMenu } from "./profile-menu";
import { ProfileCard } from "./profile-card";

export const ProfileAside: FC = () => {
    return (
        <aside className="hidden md:block space-y-6">
            <ProfileHead />
            <ProfileMenu />
            <ProfileCard />
        </aside>
    );
};