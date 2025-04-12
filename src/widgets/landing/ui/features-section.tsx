import { features } from '../model/mock/features';
import { FeatureCard } from './feature-card';

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-600 mb-4">
            Почему мы?
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Инновационные решения для экологических инициатив
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              feature={feature} 
              key={index} 
              variant="default"
            />
          ))}
        </div>
      </div>
    </section>
  );
};