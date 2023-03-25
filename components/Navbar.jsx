"use client";
import styles from "../styles";
import MobileNav from "./NavBar/MobileNav";
import { useState } from "react";
import { RxTextAlignLeft } from "react-icons/rx";



const Navbar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (

    <div className="flex items-center justify-between w-full p-4 text-white fidex">
      <div className="font-bold text-center uppercase text-normal ">
        <div className="w-[50px] ">
          <a href="/"><img src="/user.png" alt="logocode" /></a>
          
        </div>
      </div>
      <nav>
        <div className="absolute right-6 md:hidden top-[10px] cursor-pointer">
          <RxTextAlignLeft
            onClick={showMenu}
            className="w-[30px] h-[30px] "
          />
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/20 backdrop-blur-md  rounded-[20px] cursor-pointer ">
          <li className="hover:text-[#b4ff00]" >
            <a href="/">Inicio</a>
          </li>
          {/* <li className="hover:text-[#b4ff00]" >
            Sobre nosotros
          </li>
          <li className="hover:text-[#b4ff00]" >
            home
          </li> */}
          <li className="hover:text-[#b4ff00]" >
            <a href="/contact.html">Contacto</a>
          </li>
        </ul>
        <MobileNav showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};
export default Navbar;
