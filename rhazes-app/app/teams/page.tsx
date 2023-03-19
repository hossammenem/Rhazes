import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Teams() {
  return (
    <>
      <div className="fixed -z-10 h-screen w-screen before:absolute before:inset-0 before:h-full before:w-full before:bg-bg2 before:bg-cover before:bg-no-repeat before:opacity-[0.35] before:content-['']"></div>
      <header className="w-full max-w-screen-lg p-4 mx-auto">
        <Link href="/" className="flex flex-row items-center gap-2">
          <FaArrowLeft />
          <p>Home</p>
        </Link>
      </header>

      <section className="flex h-screen w-screen items-center justify-center">
        <p className="text-4xl">Coming Soon...</p>
      </section>
    </>
  );
}
