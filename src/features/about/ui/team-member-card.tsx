import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";

export const TeamMemberCard = ({
    name,
    role,
    bio,
    image,
}: {
    name: string;
    role: string;
    bio: string;
    image: string;
}) => {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardBody className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <Image width={200} height={200} src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-2">{role}</p>
                <p className="text-gray-600 dark:text-gray-400">{bio}</p>
            </CardBody>
        </Card>
    );
};