import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none border border-solid  border-slate-100 hover:scale-110 ${styles}`}
  onClick={() => window.location.href='https://zeantradesktop-bcu5wnpd5-shanukafer98s-projects.vercel.app/'}>
    Get Started
  </button>
);

export default Button;
