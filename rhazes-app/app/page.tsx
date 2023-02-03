import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className="flex h-screen w-screen self-center bg-black text-3xl font-bold underline">
      Rhazes
    </h1>
  );
}
