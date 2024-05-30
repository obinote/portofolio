export const dynamic = "force-dynamic";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container my-6">{children}</div>
    </>
  );
}
