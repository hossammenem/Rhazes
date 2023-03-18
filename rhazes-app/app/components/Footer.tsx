import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { SocialItem } from "./SliderNavbar";
export default function Footer() {
  return (
    <footer className="mb-[70px] h-16 w-screen text-white md:mb-0">
      <div className="mx-auto flex h-full w-[80%] flex-row items-center">
        <ul className="flex flex-row gap-3">
          <SocialItem
            hoverColor="hover:text-[#0f90f3]"
            socialLink="https://www.facebook.com/RhazesEsports"
          >
            <FaFacebookSquare />
          </SocialItem>

          {/*<SocialItem hoverColor="hover:text-[#f00]">
            <FaYoutube />
  </SocialItem>*/}

          <SocialItem
            hoverColor="hover:text-[#2ab2f6]"
            socialLink="https://twitter.com/RhazesEsports"
          >
            <FaTwitter />
          </SocialItem>
        </ul>

        <div className="ml-auto">&#169;Rhazes inc.</div>
      </div>
    </footer>
  );
}
