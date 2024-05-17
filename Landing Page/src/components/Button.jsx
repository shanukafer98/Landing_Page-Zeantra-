import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none border border-solid  border-slate-100 hover:scale-110 ${styles}`}
  onClick={() => window.location.href='http://16.171.31.24:3000/'}>
    Launch Demo
  </button>
);

export default Button;
