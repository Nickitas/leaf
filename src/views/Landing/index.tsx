import React, { FC } from 'react';

import { HeroSection, FeaturesSection, ProjectsSection, CTASection } from '@/widgets/landing';

import cls from './index.module.scss';

export const Landing: FC = () => (
    <article className={cls.landing}>
        <HeroSection />
        <FeaturesSection />
        <ProjectsSection />
        <CTASection />
    </article>
);