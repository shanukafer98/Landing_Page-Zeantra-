import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none border border-solid  border-slate-100 hover:scale-110 ${styles}`}>
    Get Started
  </button>
);

export default Button;
