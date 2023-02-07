"use client";
import { useEffect } from "react";
import "./page.css";
import initApp from "./pageDOM";
import Image from "next/legacy/image";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  useEffect(() => {
    const { hamburgerButton, menu, toggleMenu } = initApp();
    if (hamburgerButton && menu) {
      hamburgerButton.addEventListener("click", toggleMenu);
      menu.addEventListener("click", toggleMenu);
    }
    return () => {
      if (hamburgerButton && menu) {
        hamburgerButton.removeEventListener("click", toggleMenu);
        menu.removeEventListener("click", toggleMenu);
      }
    };
  }, [document.onresize]);

  return (
    <>
      <div className="h-screen w-screen bg-black">
        <nav className=" mx-auto flex h-16 w-[80%] border-b-2 border-b-green-100">
          <div className=" hidden lg:block">
            <Image width={200} height={130} className="position-img" layout="fixed" src={"/imgs/logo.png"} alt={"rhazes logo"} />
          </div>

          <div className="hidden h-full w-full lg:block">
            <ul className="flex h-full w-11/12 flex-row items-center justify-center gap-7">
              <li className="cursor-pointer font-bold hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                Home
              </li>
              <li className="cursor-pointer font-bold hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                About Us
              </li>
              <li className="cursor-pointer font-bold hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                Schedule
              </li>
              <li className="cursor-pointer font-bold hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                News
              </li>
              <li className="cursor-pointer font-bold hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                Our Teams
              </li>
              <li className="cursor-pointer font-bold hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                Lore
              </li>
            </ul>
          </div>

          <button className="z-20 mr-auto text-3xl text-white lg:hidden" id="hamburger-button">
            &#9776;
          </button>

          <div className="switch z-20 my-auto">
            <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" />
            <label htmlFor="language-toggle"></label>
            <span className="on">En</span>
            <span className="off">Ar</span>
          </div>

          <div className="fixed left-[-100vw] z-10 h-screen w-screen border-l-2 border-l-green-100 bg-black lg:hidden" id="menu" style={{ transition: "all ease-in-out 0.3s" }}>
            <ul className="mt-32 text-center text-xl font-bold text-white">
              <li className="mb-8 cursor-pointer">Home</li>
              <li className="mb-8 cursor-pointer">About Us</li>
              <li className="mb-8 cursor-pointer">Latest News</li>
              <li className="mb-8 cursor-pointer">Matches Schedule</li>
              <li className="mb-8 cursor-pointer">Our Teams</li>
              <li className="mb-8 cursor-pointer">Lore</li>
              <li className="mb-8 cursor-pointer">Contact Us</li>
            </ul>
            <ul className="flex flex-row justify-center gap-2 text-center text-xl text-white">
              <li className="cursor-pointer hover:text-[#0f90f3]" style={{ transition: "all ease-in-out 0.3s" }}>
                <FaFacebookSquare />
              </li>
              <li className="cursor-pointer hover:text-[#f00]" style={{ transition: "all ease-in-out 0.3s" }}>
                <FaYoutube />
              </li>
              <li className="cursor-pointer hover:text-[#2ab2f6]" style={{ transition: "all ease-in-out 0.3s" }}>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </nav>

        <nav className="fixed bottom-0 z-50 h-[70px] w-screen border-t-2 border-t-green-100 bg-black md:hidden">
          <div className="mx-auto flex w-[80%] justify-center">
            <ul className="flex flex-row items-center justify-center font-bold text-white">
              <li className="mr-4 cursor-pointer hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                Lore
              </li>
              <li className="cursor-pointer hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                Schedule
              </li>
              <li className="cursor-pointer" style={{ transition: "all ease-in-out 0.3s" }}>
                <Image width={90} height={62} layout="fixed" src={"/imgs/logo.png"} alt={"rhazes logo"} />
              </li>
              <li className="mr-4 cursor-pointer hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                News
              </li>
              <li className="cursor-pointer hover:text-green-100" style={{ transition: "all ease-in-out 0.3s" }}>
                Teams
              </li>
            </ul>
          </div>
        </nav>

        <section className="flex w-screen items-center justify-center text-white" style={{ height: "calc(100vh - (70px + 4rem))" }}>
          <div className="flex flex-col items-center">
            <h1 className="p-2 text-center text-5xl font-bold">CTA Goes Here</h1>
            <button className="button w-128 mt-8 h-12 px-8 text-2xl font-bold">Contact Us</button>
            <button className="button w-128 mt-8 h-12 px-8 text-2xl font-bold">Join Us</button>
          </div>
        </section>
      </div>

      <section className="min-h-96 w-screen bg-black">
        <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">Who Are We?</h1>
        <p className="mx-auto p-8 text-center text-xl leading-8 text-white lg:w-[55vw]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nostrum excepturi placeat, neque non est asperiores consectetur maiores facilis laudantium ut eius temporibus voluptates aliquam eos similique dicta necessitatibus eaque.</p>
      </section>

      <section className="max-w-screen flex h-96 flex-col bg-black">
        <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">Latest News</h1>

        <div className="relative mx-auto flex h-96 w-[26rem] flex-row items-center justify-center gap-2 overflow-hidden p-3 xs:w-[20rem] md:w-screen">
          <div className="news-slide group absolute h-40 w-64 bg-bg bg-cover xs:w-56 md:relative md:hidden" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg&logo.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>

          <div className="group hidden h-40 w-72 bg-bg bg-cover md:block" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg&logo.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>

          <div className="group hidden h-40 w-72 bg-bg bg-cover md:block" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg&logo.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>
          <div className="group hidden h-40 w-72 bg-bg bg-cover md:block" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg&logo.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>

          <div className="news-slide group absolute h-40 w-64 bg-bg bg-cover xs:w-56 md:relative md:hidden" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>

          <div className="news-slide group absolute h-40 w-64 bg-bg bg-cover xs:w-56 md:relative md:hidden" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg(darker).png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>

          <button className="btn-next absolute top-[45%] right-0 h-[40px] w-[40px] rounded-full border-2 border-green-100 bg-black text-4xl text-green-100 active:scale-90 md:hidden">
            <MdKeyboardArrowRight />
          </button>
          <button className="btn-prev absolute top-[45%] left-0 h-[40px] w-[40px] rounded-full border-2 border-green-100 bg-black text-4xl text-green-100 active:scale-90 md:hidden">
            <MdKeyboardArrowLeft />
          </button>
        </div>
      </section>

      <section className="min-h-16 flex w-screen flex-col bg-black">
        <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">Streamers</h1>
        <div className="my-8 flex w-full flex-wrap justify-center gap-4 p-4">
          <div className="group h-40 w-72 bg-bg bg-cover" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>
          <div className="group h-40 w-72 bg-bg bg-cover" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>
          <div className="group h-40 w-72 bg-bg bg-cover" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>
          <div className="group h-40 w-72 bg-bg bg-cover" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>
          <div className="group h-40 w-72 bg-bg bg-cover" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>
          <div className="group h-40 w-72 bg-bg bg-cover" style={{ transition: "all ease-in-out 0.3s" }}>
            <div className="relative">
              {/*  src="../imgs/bg.png" /> */}
              <div className="absolute inset-0 h-full w-full bg-white bg-cover opacity-0 transition-all group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] w-screen bg-black">
        <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">Schedule</h1>

        <div className="flex flex-col items-center justify-center gap-6 p-6 lg:flex-row">
          <div className="form-input relative h-32 w-96 bg-green-100 xs:w-80">
            <div className="form-input absolute top-[1px] left-[1px] flex h-[98%] w-[99%] flex-row items-center bg-black p-3">
              {/*  src="../imgs/logo.png" className="h-32 w-32 object-cover" /> */}
              <h1 className="mx-auto text-xl font-bold text-white">Rhazes E-sports</h1>
            </div>
          </div>

          <div className="h-32 w-56 bg-black">
            <div className="my-auto flex h-full flex-col items-center justify-center space-y-1 border-x-2 border-x-green-100">
              <h1 className="text-3xl font-bold text-white">3:0</h1>
              <h1 className="text-sm text-white">28 OCTOBER 2022, 06:00 PM</h1>
              <h1 className="text-sm text-white">LOL World Cup Final</h1>
            </div>
          </div>

          <div className="form-input relative h-32 w-96 bg-green-100 xs:w-80">
            <div className="form-input absolute top-[1px] left-[1px] flex h-[98%] w-[99%] flex-row items-center bg-black p-3">
              {/*  src="../imgs/T1_logo(4).jpg" className="h-32 w-32 object-cover" /> */}
              <h1 className="text-cen mx-auto text-2xl font-bold text-white">T1 Esports</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-[50vh] w-screen flex-col items-center gap-6 bg-black">
        <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">Contact Us</h1>
        <div className="h-full w-3/5 space-y-6 pb-6">
          <div className="flex w-full flex-col gap-6 md:flex-row">
            <div className="form-input relative h-16 w-full bg-green-100">
              <input type="text" placeholder="Enter Your Name" className="form-input absolute left-[1px] top-[1px] h-[97%] w-[99%] bg-black p-4 text-lg text-white focus-visible:outline-none" />
            </div>
            <div className="form-input relative h-16 w-full bg-green-100">
              <input type="text" placeholder="Enter Your E-mail" className="form-input absolute left-[1px] top-[1px] h-[97%] w-[99%] bg-black p-4 text-lg text-white focus-visible:outline-none" />
            </div>
          </div>
          <div className="form-input relative h-64 w-full bg-green-100">
            <textarea placeholder="Enter Your Message" className="form-input md:left[3px] absolute top-[1px] left-[1px] h-[99%] w-[99%] bg-black p-4 text-lg text-white focus-visible:outline-none md:w-[99.5%]"></textarea>
          </div>
          <button className="button h-12 w-36 px-8 text-2xl font-bold text-white">Submit</button>
        </div>
      </section>

      <footer className="mb-[70px] h-16 w-screen bg-black text-white md:mb-0">
        <div className="mx-auto flex h-full w-[80%] flex-row items-center">
          <ul className="flex flex-row gap-3">
            <li className="cursor-pointer hover:text-[#0f90f3]" style={{ transition: "all ease-in-out 0.3s" }}>
              <FaFacebookSquare />
            </li>
            <li className="cursor-pointer hover:text-[#f00]" style={{ transition: "all ease-in-out 0.3s" }}>
              <FaYoutube />
            </li>
            <li className="cursor-pointer hover:text-[#2ab2f6]" style={{ transition: "all ease-in-out 0.3s" }}>
              <FaTwitter />
            </li>
          </ul>

          <div className="ml-auto">&#169;Rhazes inc.</div>
        </div>
      </footer>
    </>
  );
}
