"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks } from '../model/mock/social-links';


const leafVariants = {
  hover: {
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.7 },
  },
  tap: {
    scale: 0.9,
  },
};

export const SocialLinks = () => {
  return (
    <div className="flex space-x-3">
      {socialLinks.map((social) => (
        <motion.div
          key={social.name}
          whileHover="hover"
          whileTap="tap"
          className="relative group"
        >
          <motion.div
            variants={leafVariants}
            className={`absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 ${social.leafColor}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19Z"
                fill="currentColor"
              />
              <path
                d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>

          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="relative block"
          >
            <motion.div
              className={`absolute inset-0 rounded-full ${social.color} opacity-0 group-hover:opacity-20`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className={`flex items-center justify-center w-12 h-12 rounded-full ${social.color} bg-opacity-10 backdrop-blur-sm border border-green-100 border-opacity-20 transition-all duration-300 group-hover:bg-opacity-30 group-hover:shadow-lg`}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
                className="filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};