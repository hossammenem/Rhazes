import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/legacy/image";
import useLang from "../Hooks/useLang";

export default function News() {
  const lang = useLang();

  return (
    <section className="max-w-screen flex h-96 flex-col" id="news-section">
      <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">
        {lang.newsTitle}
      </h1>

      <div className="relative mx-auto flex h-96 w-[26rem] flex-row items-center justify-center gap-2 overflow-hidden p-3 xs:w-[20rem] md:w-screen">
        <SmSlide img="bg" alt="streamer1" />
        <SmSlide img="streamers_frame" alt="streamer2" />
        <SmSlide img="bg&logo" alt="streamer3" />

        <LgSlide img="bg" alt="streamer1" />
        <LgSlide img="streamers_frame" alt="streamer2" />
        <LgSlide img="bg&logo" alt="streamer3" />

        <button className="news-btn right-0" id="btn-next">
          <MdKeyboardArrowRight />
        </button>

        <button className="news-btn left-0" id="btn-prev">
          <MdKeyboardArrowLeft />
        </button>
      </div>
    </section>
  );
}

const SmSlide = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className="news-slide group absolute h-40 w-64 transition-all duration-300 ease-in-out xs:w-56 md:hidden">
      <Image
        src={`/imgs/${img}.png`}
        alt={alt}
        layout={"fill"}
        objectFit={"cover"}
        quality={100}
      />
      <div className="relative">
        <div className="absolute inset-0 h-40 w-64 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

const LgSlide = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className="group relative hidden h-40 w-72 md:block">
      <Image
        src={`/imgs/${img}.png`}
        alt={alt}
        layout={"fill"}
        objectFit={"cover"}
        quality={100}
      />
      <div className="relative">
        <div className="absolute inset-0 h-40 w-72 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
      </div>
    </div>
  );
};
