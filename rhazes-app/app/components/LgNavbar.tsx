import Image from "next/legacy/image";
import useLang from "../Hooks/useLang";

export default function LgNavbar() {
  const lang = useLang();

  return (
    <>
      <div className="relative hidden lg:block">
        <a href="/">
          <Image
            width={200}
            height={130}
            className="position-img"
            layout="fixed"
            src={"/imgs/logo.png"}
            alt={"rhazes logo"}
          />
        </a>
      </div>
      <div className="relative hidden h-full w-full lg:block">
        <ul
          className={`flex h-full w-11/12 ${
            lang.lang == "En" ? "flex-row " : "flex-row-reverse"
          } items-center justify-center gap-7`}
        >
          <NavItem sectionId="/">{lang.home}</NavItem>
          <NavItem sectionId="#about-us-section">{lang.aboutUs}</NavItem>
          <NavItem sectionId="#schedule-section">{lang.schedule}</NavItem>
          <NavItem sectionId="#news-section">{lang.news}</NavItem>
          <NavItem sectionId="/teams">{lang.teams}</NavItem>
          <NavItem sectionId="/lore">{lang.lore}</NavItem>
        </ul>
      </div>
    </>
  );
}

export const NavItem = ({
  children,
  className,
  sectionId,
}: {
  children: React.ReactNode;
  className?: string;
  sectionId: string;
}) => {
  return (
    <li
      className={`${className} cursor-pointer font-bold transition-colors duration-300 ease-in-out hover:text-green-100`}
    >
      <a href={sectionId}>{children}</a>
    </li>
  );
};
