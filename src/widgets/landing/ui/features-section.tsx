import { features } from '../model/mock/features'
import { FeatureCard } from './feature-card'

export const FeaturesSection = () => {
    return (
        <section className="py-20">
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard feature={feature} key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    )
}