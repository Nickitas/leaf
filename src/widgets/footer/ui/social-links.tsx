import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Telegram',
    href: '#',
    icon: 'telegram-icon.svg',
  },
  {
    name: 'VK',
    href: '#',
    icon: 'vk-icon.svg',
  },
  {
    name: 'YouTube',
    href: '#',
    icon: 'youtube-icon.svg',
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={social.name}
        >
          <span className="sr-only">{social.name}</span>
          <Image 
            src={`/icons/${social.icon}`} 
            alt={social.name} 
            width={60}
            height={60}
            className="h-6 w-6"
          />
        </Link>
      ))}
    </div>
  );
};