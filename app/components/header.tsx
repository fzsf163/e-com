import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import * as React from "react";
import { useHydrated } from "remix-utils/use-hydrated";

import {
  getTheme,
  setTheme as setSystemTheme,
} from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const hydrated = useHydrated();
  const [, rerender] = React.useState({});
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const setTheme = React.useCallback(
    (theme: string) => {
      setSystemTheme(theme);
      rerender({});
    },
    [rerender]
  );
  const theme = getTheme();

  return (
    <header>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="size-8 rounded-md border cursor-pointer flex items-center justify-center"
              // biome-ignore lint/a11y/useSemanticElements: <explanation>
              role="button"
              tabIndex={0}
            >
              <span className="sr-only">Theme selector</span>
              {!hydrated ? null : theme === "dark" ? (
                <MoonIcon />
              ) : theme === "light" ? (
                <SunIcon />
              ) : (
                <LaptopIcon />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Button
                type="button"
                className="w-full"
                onClick={() => setTheme("light")}
                aria-selected={theme === "light"}
                variant={"ghost"}
              >
                Light
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                type="button"
                className="w-full"
                onClick={() => setTheme("dark")}
                aria-selected={theme === "dark"}
                variant={"ghost"}
              >
                Dark
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                type="button"
                className="w-full"
                onClick={() => setTheme("system")}
                aria-selected={theme === "system"}
                variant={"ghost"}
              >
                System
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
