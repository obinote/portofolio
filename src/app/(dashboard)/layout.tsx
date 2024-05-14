import { ModeToggle } from "@/components/ModeToggle";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mx-auto px-8 py-6">
        <ModeToggle />
        <div>Lang</div>
      </div>
      <div className="container my-6">{children}</div>
    </div>
  );
}
