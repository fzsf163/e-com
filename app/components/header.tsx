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
            <Button
              className="size-8 rounded-md border"
              size="icon"
              variant="secondary"
            >
              <span className="sr-only">Theme selector</span>
              {!hydrated ? null : theme === "dark" ? (
                <MoonIcon />
              ) : theme === "light" ? (
                <SunIcon />
              ) : (
                <LaptopIcon />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button
                type="button"
                className="w-full"
                onClick={() => setTheme("light")}
                aria-selected={theme === "light"}
              >
                Light
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                type="button"
                className="w-full"
                onClick={() => setTheme("dark")}
                aria-selected={theme === "dark"}
              >
                Dark
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                type="button"
                className="w-full"
                onClick={() => setTheme("system")}
                aria-selected={theme === "system"}
              >
                System
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
