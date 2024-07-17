import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <h2 className="text-4xl bold">Hola Mundo</h2>
        {children}
      </main>
    </>
  );
}
