"use client";
import { usePathname } from "next/navigation";

export default function Head() {
  const pathname = usePathname();
  const title = pathname?.includes("en") ? "Home" : "الصفحة الرئيسية";
  const description = pathname?.includes("en")
    ? "Home Page of Rahzes Esport's organization"
    : "الصفحة الرئيسية لمنظمة الرازي للرياضة الالكترونية";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/imgs/logo.png" />
    </>
  );
}
