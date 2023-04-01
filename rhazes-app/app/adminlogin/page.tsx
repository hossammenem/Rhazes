"use client";
import "../page.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userInfo, setUserInfo] = useState({ name: "", password: "" });
  const router = useRouter();
  const handelOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    (e as unknown as Event).preventDefault();

    const res = await signIn("credentials", {
      name: userInfo.name,
      password: userInfo.password,
      redirect: false,
      callbackUrl: "/dashboard/",
    });

    console.log(res, res?.status)

    if (res && res.ok) router.push(res.url as string);
  };
  return (
    <>
      <div className="fixed -z-10 h-screen w-screen before:absolute before:inset-0 before:h-full before:w-full before:bg-bg2 before:bg-cover before:bg-no-repeat before:opacity-[0.35] before:content-['']"></div>
      <header className="mx-auto w-full max-w-screen-lg p-4">
        <Link href="/" className="flex flex-row items-center gap-2">
          <FaArrowLeft />
          <p>Home</p>
        </Link>
      </header>

      <section className="mt-64 flex w-screen flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold">Admin Login Page</h1>
        <form className="flex w-64 flex-col gap-4" onSubmit={handelOnSubmit}>
          <div className="wrapper h-12 w-full">
            <input
              type="text"
              className="cut-corners"
              placeholder="Enter Your Username"
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, name: target.value })
              }
            />
          </div>
          <div className="wrapper h-12 w-full">
            <input
              type="password"
              className="cut-corners"
              placeholder="Enter Your Password"
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
            />
          </div>
          <button className="button text-md w-20">Login</button>
        </form>
      </section>
    </>
  );
}
