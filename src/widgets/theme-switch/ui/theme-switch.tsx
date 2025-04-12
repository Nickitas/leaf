"use client";

import { FC } from "react";
import { Switch, SwitchProps } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { SunFilledIcon, MoonFilledIcon } from "@/shared/ui/icons/ui/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Switch
      defaultSelected
      color='success'
      size="md"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunFilledIcon className={className} /> : <MoonFilledIcon className={className} />
      }
      onChange={onChange}
      className={className}
      classNames={classNames}
    />
  );
};
