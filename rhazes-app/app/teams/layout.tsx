export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head />
      <body className="bg-[#0d0d0d]">{children}</body>
    </>
  );
}
