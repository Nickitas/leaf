"use client";

import { motion } from 'framer-motion';
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
        'bg-gradient-to-br from-green-50 to-white',
        'dark:from-gray-800 dark:to-gray-900',
        'rounded-xl p-6 border border-green-100',
        'dark:border-gray-700',
        'transition-all duration-300',
        'hover:border-primary-400 dark:hover:border-primary-500',
        variant === 'default' ? 'shadow-sm' : '',
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-4">
        <motion.div 
          whileHover={{ rotate: 10, scale: 1.1 }}
          className={clsx(
            'flex items-center justify-center w-12 h-12 rounded-lg',
            'bg-primary-100 text-primary-600',
            'dark:bg-primary-900 dark:text-primary-200',
            'text-2xl'
          )}
        >
          {feature.icon}
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className={clsx(
            'text-gray-600 dark:text-gray-300',
            variant === 'default' ? 'text-base' : 'text-sm'
          )}>
            {feature.description}
          </p>
        </div>
      </div>
      
      <motion.div 
        className="absolute inset-0 rounded-xl border-2 border-primary-400 opacity-0 pointer-events-none"
        whileHover={{ opacity: 0.2 }}
      />
    </div>
  );
};