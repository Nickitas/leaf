import Link from 'next/link';
import { Logo } from '@/shared/ui/logo';
import { SocialLinks } from './social-links';
import { siteConfig } from '@/shared/config/site';

export const Footer = () => {
    return (
        <footer className="bg-background-dark text-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-1 space-y-5">
                        <Logo className="text-white text-2xl" />
                        <p className="text-gray-300">
                            Инновационная платформа для достижения экологических целей через прозрачность и доступные инструменты
                        </p>
                        <div className="pt-2">
                            <SocialLinks />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-white mb-6">Навигация</h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {siteConfig.navMenuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-start"
                                >
                                    <span className="mr-2 text-primary-500">•</span>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Контакты</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="mr-3 text-primary-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </span>
                                info@eco.life.ru
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-primary-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </span>
                                +7 (967) 318-30-30
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-primary-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                г. Ростов-на-Дону, ул. Шолохова, 1
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} EcoLeaf. Все права защищены.</p>
                    <p className="mt-2 text-sm">Сделано с ♥ для нашей планеты</p>
                </div>
            </div>
        </footer>
    );
};