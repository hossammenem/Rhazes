import Providers from "./providers";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head />
      <body className="bg-[#0d0d0d]">
        <Providers>{children}</Providers>
      </body>
    </>
  );
}
