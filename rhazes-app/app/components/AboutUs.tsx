import useLang from "../Hooks/useLang";

export default function AboutUs() {
  const lang = useLang();

  return (
    <section className="w-screen" id="about-us-section">
      <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">
        {lang.aboutUsTitle}
      </h1>
      <div className="flex flex-col gap-6 p-7 mx-auto text-center text-xl leading-8 text-white 
        lg:w-2/3">
      <p>
        {lang.aboutUsDescription.starting}
      </p>
      <p>
        {lang.aboutUsDescription.PS}
      </p>
      </div>
    </section>
  );
}
