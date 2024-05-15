"use client";

import React, { ChangeEvent } from "react";
import {
  useRouter,
  useParams,
  useSelectedLayoutSegments,
} from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ChangeLocale() {
  const router = useRouter();
  const locale = useParams()?.locale || 'en';
  const urlSegments = useSelectedLayoutSegments();

  const handleLocaleChange = (locale: string) => {
    router.push(`/${locale}/${urlSegments.join("/")}`);
  };

  return (
    <div className="flex flex-row items-center" test-id="i18n-switcher">
      <Button
        variant={"link"}
        test-id="en"
        onClick={() => handleLocaleChange("en")}
        className={cn(
          "text-primary bg-muted hover:no-underline",
          locale !== "en" && "text-red-400 bg-transparent hover:text-primary"
        )}>
        EN
      </Button>
      <Button
        variant={"link"}
        test-id="id"
        onClick={() => handleLocaleChange("id")}
        className={cn(
          "text-primary bg-muted hover:no-underline",
          locale !== "id" && "text-red-400 bg-transparent hover:text-primary"
        )}>
        ID
      </Button>
    </div>
  );
}
