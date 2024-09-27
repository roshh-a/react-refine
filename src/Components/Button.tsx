import React from "react";

interface Props {
  name: String;
  onClick?: () => void;
  style?: React.CSSProperties;
}
const Button: React.FC<Props> = ({ name, onClick, style }) => {
  const buttonClass =
    "ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150";
  return (
    <button style={style} className={buttonClass} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
