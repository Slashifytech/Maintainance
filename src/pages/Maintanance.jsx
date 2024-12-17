import React from "react";
import { logo, sov } from "../assets";

const Maintanance = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" className="w-40 h-24" />
      </header>
      <div className="font-poppins flex flex-col items-center  md:mt-9 sm:mt-20">
  <p className="text-[38px] text-sidebar font-semibold text-center">SOV Portal is currently under maintenance.</p>
  <p className="text-[14px] text-sidebar font-medium sm:mt-6">We apologize for any inconveniences caused. We’ve almost done.</p>
  <img src={sov}  alt="img" />
  
  </div>

    </>
  );
};

export default Maintanance;
