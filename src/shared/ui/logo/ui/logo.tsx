import clsx from 'clsx';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={clsx("text-2xl font-bold", className)}>
      Eco<span className="text-green-500">Life</span>
    </Link>
  );
};