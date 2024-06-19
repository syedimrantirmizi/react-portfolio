import React from "react";

const Navbar = ({ colored1, colored2, colored3,colored4,scrollToAbout,scrollToProject, scrollToContact,scrollToHome }) => {
  console.log(colored1,colored2,colored3,colored4)
  return (
    <nav
      className={`sticky transition-opacity duration-[1.5s] top-0 z-[100] opacity-95 min-w-full bg-silver_lake_blue min-h-16 text-platinum flex items-center px-12 justify-between shadow-lg shadow-yinmn_blue `}
    >
      <div>
        <p className="text-xl font-maintext">Syed Imran Tirmizi</p>
      </div>
      <div className="flex gap-5 justify-between">
        <button className={`text-xl font-maintext hover:text-yinmn_blue transition-colors duration-500 ${colored1 ? "text-yinmn_blue": ""}`} onClick={scrollToHome}>Home</button>
        <button className={`text-xl font-maintext hover:text-yinmn_blue transition-colors duration-500 ${colored2 ? "text-yinmn_blue": ""}` } onClick={scrollToAbout}>About</button>
        <button className={`text-xl font-maintext hover:text-yinmn_blue transition-colors duration-500 ${colored3 ? "text-yinmn_blue": ""}`} onClick={scrollToProject}>Projects</button>
        <button className={`text-xl font-maintext hover:text-yinmn_blue transition-colors duration-500 ${colored4 ? "text-yinmn_blue": ""}`} onClick={scrollToContact}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
