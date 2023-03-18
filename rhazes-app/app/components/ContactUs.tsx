import useLang from "../Hooks/useLang";

export default function ContactUs() {
  const lang = useLang();

  return (
    <section className="flex min-h-[50vh] w-screen flex-col items-center gap-6" id="contact-us-section">
      <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">
        {lang.contactUs}
      </h1>
      <div className="h-full w-3/5 space-y-6 pb-6">
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="wrapper h-16 w-full">
            <input
              type="text"
              placeholder={lang.namePlaceholder}
              className="cut-corners text-lg"
            />
          </div>
          <div className="wrapper h-16 w-full">
            <input
              type="text"
              placeholder={lang.emailPlaceholder}
              className="cut-corners text-lg"
            />
          </div>
        </div>
        <div className="wrapper h-64 w-full">
          <textarea
            placeholder={lang.messagePlaceholder}
            className="cut-corners p-4 text-lg"
          ></textarea>
        </div>
        <button className="button h-12 w-36 px-8 text-2xl font-bold text-white">
          {lang.submit}
        </button>
      </div>
    </section>
  );
}
