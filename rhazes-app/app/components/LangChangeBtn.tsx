import { useRouter } from "next/navigation";
import { useState } from "react";
import useLang from "../Hooks/useLang";

export default function LangChangeBtn() {
  const router = useRouter();
  const lang = useLang();
  const [checked, setChcked] = useState(lang.lang == "ar" ? true : false);

  function handleLanguageChange() {
    setChcked(!checked);
    router.push(`/${lang.lang === "en" ? "ar" : "en"}/`);
  }

  return (
    <div className="switch z-20 my-auto">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        checked={checked}
        onChange={() => handleLanguageChange()}
        type="checkbox"
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">En</span>
      <span className="off">Ar</span>
    </div>
  );
}
