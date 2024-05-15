import Header from "@/components/Header";
import React, { ReactNode } from "react";

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
