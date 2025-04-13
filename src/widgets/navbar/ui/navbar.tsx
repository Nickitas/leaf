"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { appRoutes } from "@/kernel/routes";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { link as linkStyles } from "@heroui/theme";
import { User } from "lucide-react";

import { useAuthStore } from "@/entities/auth/store/auth.store";

import { siteConfig } from "@/shared/config/site";
import { Logo } from "@/shared/ui/logo";
import { ThemeSwitch } from "@/widgets/theme-switch/ui/theme-switch";
import { GithubIcon, CheckIcon } from "@/shared/ui/icons/ui/icons";
import { useGetTotalInvested } from "@/entities/transaction";
import { useGetUser } from "@/entities/user";

export const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuthStore();
  const { totalInvested } = useGetTotalInvested();

  const { user, isLoading } = useGetUser();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <div className="flex justify-start items-center gap-1">
            <Logo />
          </div>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <Chip
          color="success"
          startContent={<CheckIcon size={18} />}
          variant="faded"
        >
          Фонд: {totalInvested} руб
        </Chip>
        {user ? (
          <>
            <Button as={Link} href={appRoutes.profile.main} color="primary">
              <User />
            </Button>
          </>
        ) : (
          <>
            <NavbarItem className="hidden md:flex">
              <Button as={Link} href={appRoutes.signIn} color="primary">
                Войти
              </Button>
            </NavbarItem>
            <NavbarItem className="hidden md:flex">
              <Button
                as={Link}
                href={appRoutes.signUp}
                variant="bordered"
                color="primary"
              >
                Регистрация
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 2 ? "primary" : "foreground"}
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {user ? (
            <>
              <Button color="danger" onPress={() => logout(router)}>
                Выйти
              </Button>
            </>
          ) : (
            <>
              <NavbarItem className="md:flex">
                <Button as={Link} href={appRoutes.signIn} color="primary">
                  Войти
                </Button>
              </NavbarItem>
              <NavbarItem className="md:flex">
                <Button
                  as={Link}
                  href={appRoutes.signUp}
                  variant="bordered"
                  color="primary"
                >
                  Регистрация
                </Button>
              </NavbarItem>
            </>
          )}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
