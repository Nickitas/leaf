"use client";

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { NewsletterForm } from '../ui/newsletter-form';
import Link from 'next/link';
import { appRoutes } from '@/kernel/routes';
import { HeartFilledIcon } from '@/shared/ui/icons';

export const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-28 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            x: [-50, 0, -50],
            y: [-50, 0, -50],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white mix-blend-overlay"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-white mix-blend-overlay"
        />
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-white/20 text-white mb-6">
              Присоединяйтесь
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Готовы сделать мир <span className="text-primary-200">чище</span>?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-primary-100 dark:text-primary-200 mb-10 max-w-2xl mx-auto"
          >
            Станьте частью нашего экологического сообщества или поддержите один из проектов прямо сейчас
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-primary-600 transition-colors"
              startContent={<HeartFilledIcon className="text-danger" />}
              as={Link}
              href={appRoutes.projects.main}
            >

              Поддержать проект
            </Button>
            <Button
              size="lg"
              variant="solid"
              className="bg-white text-primary-600 hover:bg-primary-50 transition-colors"
              as={Link}
              href={appRoutes.volunteer}
            >
              Стать волонтером
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/20"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6"
            >
              Будьте в курсе экологических новостей
            </motion.h3>
            <NewsletterForm />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
};