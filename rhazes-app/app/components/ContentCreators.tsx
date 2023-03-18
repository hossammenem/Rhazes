import Image from "next/legacy/image";
import useLang from "../Hooks/useLang";

export default function ContentCreators() {
  const lang = useLang();

  return (
    <section
      className="min-h-16 flex w-screen flex-col"
      id="content-creators-section"
    >
      <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">
        {lang.streamers}
      </h1>
      <div className="my-8 flex w-full flex-wrap justify-center gap-4 p-4">
        <ContentCreatorCard img="bg" alt="content creator1" />
        <ContentCreatorCard img="bg" alt="content creator2" />
        <ContentCreatorCard img="bg" alt="content creator3" />
        <ContentCreatorCard img="bg" alt="content creator4" />
        <ContentCreatorCard img="bg" alt="content creator5" />
        <ContentCreatorCard img="bg" alt="content creator6" />
      </div>
    </section>
  );
}

const ContentCreatorCard = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className="group relative h-40 w-72">
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
