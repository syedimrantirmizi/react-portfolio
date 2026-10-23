import React, { useRef } from "react";

const Navbar = ({ colored1, colored2, colored3,colored4,scrollToAbout,scrollToProject, scrollToContact,scrollToHome }) => {
  
  return (

    <nav
      className="sticky top-0 z-50 opacity-95 w-full bg-silver_lake_blue min-h-14 sm:min-h-16 text-platinum flex items-center px-3 sm:px-8 lg:px-12 justify-between max-sm:justify-center shadow-lg shadow-yinmn_blue"
    >
      <div className="hidden sm:block shrink-0">
        <p className="text-sm md:text-xl font-maintext">Syed Imran Tirmizi</p>
      </div>
      <div className="flex gap-3 sm:gap-5 justify-center flex-wrap py-2">
        <button className={`text-sm sm:text-lg lg:text-xl font-maintext hover:text-yinmn_blue transition-colors duration-500 ${colored1 ? "text-yinmn_blue": ""}`} onClick={scrollToHome}>Home</button>
        <button className={`text-sm sm:text-lg lg:text-xl font-maintext hover:text-yinmn_blue transition-colors duration-500 ${colored2 ? "text-yinmn_blue": ""}` } onClick={scrollToAbout}>About</button>
        <button className={`text-sm sm:text-lg lg:text-xl font-maintext hover:text-yinmn_blue transition-colors duration-500 ${colored3 ? "text-yinmn_blue": ""}`} onClick={scrollToProject}>Projects</button>
        <button className={`text-sm sm:text-lg lg:text-xl font-maintext hover:text-yinmn_blue transition-colors duration-500 ${colored4 ? "text-yinmn_blue": ""}`} onClick={scrollToContact}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
