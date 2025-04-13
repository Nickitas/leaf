"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ToastProvider } from "@heroui/toast";
import { useUserStore } from "@/entities/user/store/user-store";
import { useEffect } from "react";
import { useAuthStore } from "@/entities/auth/store/auth.store";


export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  const { checkAuth } = useAuthStore();
  const { fetchUser } = useUserStore();

  useEffect(() => {
    checkAuth();
    
    fetchUser();
  }, [checkAuth, fetchUser]);

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      <ToastProvider />

    </HeroUIProvider>
  );
}
