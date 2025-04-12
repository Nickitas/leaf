import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={clsx("flex items-center text-2xl font-bold", className)}>
      <Image src={"/logo.svg"} alt="" width={30} height={20} />
      Leaf
    </Link>
  );
};
