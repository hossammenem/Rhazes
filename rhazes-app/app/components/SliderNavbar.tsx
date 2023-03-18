import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import useLang from "../Hooks/useLang";
import { NavItem } from "./LgNavbar";

export default function SliderNavbar() {
  const lang = useLang();

  return (
    <div
      className="fixed -left-[100vw] z-10 flex h-screen w-screen items-center justify-center border-l-2 border-l-green-100 bg-black transition-all duration-300 ease-in-out lg:hidden"
      id="menu"
    >
      <div className="h-fit">
        <ul className="flex flex-col items-center gap-6 text-xl font-bold text-white">
          <NavItem sectionId="/">{lang.home}</NavItem>
          <NavItem sectionId="#about-us-section">{lang.aboutUs}</NavItem>
          <NavItem sectionId="#news-section">{lang.news}</NavItem>
          <NavItem sectionId="#schedule-section">{lang.schedule}</NavItem>
          <NavItem sectionId="/teams">{lang.teams}</NavItem>
          <NavItem sectionId="/lore">{lang.lore}</NavItem>
          {/* <NavItem sectionId="#contact-us-section">{lang.contactUs}</NavItem> */}
        </ul>
        <ul className="mt-6 flex flex-row justify-center gap-2 text-center text-xl text-white">
          <SocialItem
            hoverColor="hover:text-[#0f90f3]"
            socialLink="https://www.facebook.com/RhazesEsports"
          >
            {" "}
            <FaFacebookSquare />
          </SocialItem>

          {/*<SocialItem hoverColor="hover:text-[#f00]">
            <FaYoutube />
  </SocialItem> */}

          <SocialItem
            hoverColor="hover:text-[#2ab2f6]"
            socialLink="https://twitter.com/RhazesEsports"
          >
            <FaTwitter />
          </SocialItem>
        </ul>
      </div>
    </div>
  );
}

export const SocialItem = ({
  children,
  hoverColor,
  socialLink,
}: {
  children: React.ReactNode;
  hoverColor: String;
  socialLink: string;
}) => {
  return (
    <li
      className={`cursor-pointer transition-colors duration-300 ease-in-out
      ${hoverColor}`}
    >
      <a href={socialLink} target="_blank">
        {children}
      </a>
    </li>
  );
};
