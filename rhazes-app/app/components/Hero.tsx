import useLang from "../Hooks/useLang";

export default function Hero() {
  const lang = useLang();

  return (
    <section className="relative flex h-[calc(100vh-(70px+4rem))] w-screen items-center justify-center text-white md:h-[calc(100vh-(4rem))]">
      <div className="relative flex flex-col items-center gap-8 text-2xl font-bold">
        <h1 className="p-2 text-center text-4xl leading-tight md:text-5xl">
          {lang.CTA}
        </h1>
        {/*<button className="button h-12 px-8">{lang.contactUs}</button> */}
        <a href="https://discord.gg/QAJNc8ZWD7" target="_blank">
          <button className="button h-12 px-8">{lang.joinUs}</button>
        </a>
      </div>
    </section>
  );
}
