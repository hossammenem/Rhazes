"use client";
import Providers from "./providers";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <head />
      <body className="bg-[#0d0d0d]">
        <Providers>{children}</Providers>
      </body>
    </SessionProvider>
  );
}
