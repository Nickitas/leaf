import Link from 'next/link';
import { Logo } from '@/shared/ui/logo';
import { SocialLinks } from './social-links';
import { siteConfig } from '@/shared/config/site';


export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Лого и описание */}
          <div className="lg:col-span-1">
            <Logo className="text-white mb-4" />
            <p className="text-gray-400 mb-4">
              Инновационная платформа для достижения экологических целей через прозрачность и доступные инструменты
            </p>
            <SocialLinks />
          </div>

          {/* Навигация */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.navMenuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@ecoconnect.ru</li>
              <li>Телефон: +7 (123) 456-78-90</li>
              <li>Адрес: г. Москва, ул. Экологическая, 1</li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Leaf. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};