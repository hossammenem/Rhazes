import Image from "next/legacy/image";
import useLang from "../Hooks/useLang";
import { NavItem } from "./LgNavbar";

export default function SmNavbar() {
  const lang = useLang();

  return (
    <nav className="fixed bottom-0 z-50 h-[70px] w-screen border-t-2 border-t-green-100 bg-black md:hidden">
      <div className="mx-auto flex w-4/5 justify-center">
        <ul className="flex flex-row items-center justify-center font-bold text-white">
          <NavItem className="mr-4" sectionId="/lore">{lang.lore}</NavItem>
          <NavItem sectionId="#schedule-section">{lang.schedule}</NavItem>
          <NavItem sectionId="/">
            <Image
              width={90}
              height={62}
              layout="fixed"
              src={"/imgs/logo.png"}
              alt={"rhazes logo"}
            />
          </NavItem>
          <NavItem className="mr-4" sectionId="#news-section">{lang.news}</NavItem>
          <NavItem sectionId="/teams">{lang.teams}</NavItem>
        </ul>
      </div>
    </nav>
  );
}
