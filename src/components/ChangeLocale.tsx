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
console.log(urlSegments)
  const handleLocaleChange = (locale: string) => {
    router.push(`/${locale}/${urlSegments.join("/")}`);
  };

  return (
    <div className="flex flex-row items-center">
      <Button
        variant={"link"}
        onClick={() => handleLocaleChange("en")}
        className={cn(
          "text-primary bg-muted hover:no-underline",
          locale !== "en" && "text-muted bg-transparent hover:text-primary"
        )}>
        EN
      </Button>
      <Button
        variant={"link"}
        onClick={() => handleLocaleChange("id")}
        className={cn(
          "text-primary bg-muted hover:no-underline",
          locale !== "id" && "text-muted bg-transparent hover:text-primary"
        )}>
        ID
      </Button>
      {/* <select onChange={handleLocaleChange} value={params.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="id">id Indonesia</option>
      </select> */}
    </div>
  );
}
