import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/">
      <Image src={"/logo.svg"} alt="" width={100} height={50} />
    </Link>
  );
};
