import React, { FC } from "react"
import { BadgeHead, BadgeStats, BadgeList } from "@/widgets/profile"


export const Badges: FC = () => {
    return (
        <div className="space-y-6">
            <BadgeHead />
            <BadgeStats />
            <BadgeList />
        </div>
    );
}