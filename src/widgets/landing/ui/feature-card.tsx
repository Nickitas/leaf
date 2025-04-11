import clsx from 'clsx';
import { Feature } from '../model/types/feature.interface';

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  feature: Feature;
  variant?: 'default' | 'compact';
}

export const FeatureCard = ({
  feature,
  variant = 'default',
  className,
  ...props
}: FeatureCardProps) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl p-6 border border-gray-100 hover:border-green-100 transition-all',
        variant === 'default' ? 'shadow-sm hover:shadow-md' : '',
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 text-2xl">
          {feature.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className={clsx(
            'text-gray-600',
            variant === 'default' ? 'text-base' : 'text-sm'
          )}>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};