import { useEffect } from "react";
import initApp from "../pageDOM";

export default function HamburgerBtn() {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const { hamburgerButton, menu, toggleMenu } = initApp();
    if (hamburgerButton && menu && isBrowser) {
      hamburgerButton.addEventListener("click", toggleMenu);
      menu.addEventListener("click", toggleMenu);
    }
    return () => {
      if (hamburgerButton && menu && isBrowser) {
        hamburgerButton.removeEventListener("click", toggleMenu);
        menu.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <button
      className="relative z-20 mr-auto mt-auto h-12 w-8 text-3xl text-white lg:hidden"
      id="hamburger-button"
    >
      <div
        className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white
              transition-all duration-300
            before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded
            before:bg-white before:transition-all
            before:duration-300 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4
            after:translate-y-3 after:rounded
            after:bg-white after:transition-all
            after:duration-300 after:content-['']"
      ></div>
    </button>
  );
}
