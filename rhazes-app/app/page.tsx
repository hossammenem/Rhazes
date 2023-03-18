"use client";
import "./page.css";

// Components
import SmNavbar from "./components/SmNavbar";
import SliderNavbar from "./components/SliderNavbar";
import LgNavbar from "./components/LgNavbar";
import LangChangeBtn from "./components/LangChangeBtn";
import HamburgerBtn from "./components/HamburgerBtn";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import News from "./components/News";
import ContentCreators from "./components/ContentCreators";
import Schedule from "./components/Schedule";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed -z-10 h-screen w-screen before:absolute before:inset-0 before:h-full before:w-full before:bg-bg2 before:opacity-[0.35] before:content-['']"></div>
      <div className="h-screen w-screen">
        <nav className="relative mx-auto flex h-16 w-4/5 border-b-2 border-b-green-100">
          <LgNavbar />
          <SliderNavbar />
          <HamburgerBtn />
          <LangChangeBtn />
        </nav>
        <SmNavbar />
        <Hero />
      </div>

      <AboutUs />
      <News />
      <ContentCreators />
      <Schedule />
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}
