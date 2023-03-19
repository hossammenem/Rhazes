import { usePathname } from "next/navigation";
import en from "../languages/en";
import ar from "../languages/ar";

export default function useLang() {
  const pathname = usePathname();
  const lang = pathname?.includes("en") ? en : ar;
  return lang;
}
