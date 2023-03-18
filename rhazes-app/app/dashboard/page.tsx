"use client";
import "../page.css";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Link from "next/link";
import { FaArrowLeft, FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function AdminDashboard() {
  return (
    <>
      <div className="fixed -z-10 h-screen w-screen before:absolute before:inset-0 before:h-full before:w-full before:bg-bg2 before:opacity-[0.35] before:content-['']"></div>
      <header className="mx-auto flex w-full max-w-screen-md flex-row items-center p-6">
        <Link href="/" className="flex flex-row items-center gap-2">
          <FaArrowLeft />
          <p>Home</p>
        </Link>

        <h1 className="title-underline mx-auto w-fit p-4 text-center text-5xl">
          Admin Dashboard
        </h1>

        <div className="flex flex-row items-center gap-2">
          <p>admin</p>
          <FaUserAlt />
        </div>
        <FiLogOut className="ml-4" />
      </header>

      <section className="mt-16">
        <h1 className="title-underline mx-auto mb-10 w-fit p-2 text-3xl">
          Add To Schedule
        </h1>
        <Form />
        <Preview />
      </section>
    </>
  );
}
