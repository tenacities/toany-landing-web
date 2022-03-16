import React from "react";
import { useToggle } from "react-use";
import i18n from "../i18n";

export interface HeaderProps {
  fontColor: "white" | "black";
}

const Header = (props: HeaderProps) => {
  const [isOpenMenu, toggleOpenMenu] = useToggle(false);
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    toggleOpenMenu();
  }

  return (
    <div className={`header-wrap text-${props.fontColor} font-adobe`}>
      <div className="header-logo">ToAny</div>
      <div className={`header-right ${isOpenMenu && "active"}`}>
        <button
          className="header-lang font-bold mr-2 transition-all duration-150 origin-left overflow-hidden"
          onClick={toggleOpenMenu}
        >
          LANGUAGE
        </button>
        <ul
          className={`header-lang-list flex transition-all duration-150 origin-right w-0 overflow-hidden`}
        >
          <li className="mx-2"><button className="font-bold" onClick={() => changeLang('en')}>ENG</button></li>
          <li className="mx-4"><button className="font-bold" onClick={() => changeLang('ko')}>KO</button></li>
        </ul>
        <button>
          <svg
            onClick={toggleOpenMenu}
            xmlns="http://www.w3.org/2000/svg"
            className="header-globe h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
