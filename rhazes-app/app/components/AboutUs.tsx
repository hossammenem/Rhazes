import useLang from "../Hooks/useLang";

export default function AboutUs() {
  const lang = useLang();

  return (
    <section className="w-screen" id="about-us-section">
      <h1 className="title-underline mx-auto pt-6 w-72 text-center text-4xl font-bold text-white">
        {lang.aboutUsTitle}
      </h1>
      <p
        className="mx-auto p-8 text-center text-xl leading-8 text-white 
        lg:w-2/3"
      >
        {lang.aboutUsDescription}
      </p>
    </section>
  );
}
