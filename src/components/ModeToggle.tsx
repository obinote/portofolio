"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant={"secondary"} size={"icon"} disabled={true}></Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant={"secondary"}
      size={"icon"}
      onClick={() => setTheme(`${isDark ? "light" : "dark"}`)}>
      {isDark ? (<Sun className="hover:cursor-pointer hover:text-primary" />) : (<Moon className="hover:cursor-pointer hover:text-primary" />)}
    </Button>
  );
}
