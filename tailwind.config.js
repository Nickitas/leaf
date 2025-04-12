import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: '#16a34a', // Основной зеленый
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a', // Используем как основной
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          DEFAULT: '#10b981', // Дополнительный зеленый
          dark: '#059669',
        },
        background: {
          light: '#f8fafc', // Светлый фон
          dark: '#1e293b', // Темный фон
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary.DEFAULT'),
          '--color-accent': theme('colors.accent.DEFAULT'),
          '--color-background': theme('colors.background.light'),
          '--color-text': theme('colors.gray.900'),
        },
        '.dark': {
          '--color-primary': theme('colors.primary.600'),
          '--color-accent': theme('colors.accent.dark'),
          '--color-background': theme('colors.background.dark'),
          '--color-text': theme('colors.gray.100'),
        },
      });
    }
  ],
}

module.exports = config;