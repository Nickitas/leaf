import React, { FC, ReactNode } from "react";
import { ProfileAside, ProfileContent } from "@/widgets/profile";

interface BaseProps {
    children: ReactNode;
}

export const Base: FC<BaseProps> = ({ children }) => {
    return (
        <>
            <ProfileAside />

            <ProfileContent>
                {children}
            </ProfileContent>
        </>
    );
};