import React from "react";

export interface HeaderProps {
  fontColor: 'white' | 'black'
}

const Header = (props: HeaderProps) => {
  return (
    <div className={`header-wrap text-${props.fontColor} font-adobe`}>
      <div className="header-logo">ToAny</div>
      <div className="header-right">
        <div className="header-menu">MENU</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
