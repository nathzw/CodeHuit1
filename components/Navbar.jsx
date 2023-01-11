"use client";
import { motion } from "framer-motion";
import styles from "../styles";
/* import { Link } from "react-scroll"; */
import MobileNav from "./NavBar/MobileNav";
import { useState } from "react";
import { RxTextAlignLeft } from "react-icons/rx";
/* import { NavLink } from "react-router-dom";  */
/* import { Link } from 'react-router-dom' */


const Navbar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (

    <div className="fidex w-full text-white flex justify-between p-4 items-center">
      <div className="text-normal font-bold text-center uppercase ">
        <div className="w-[40px] ">
          <img src="/user.png" alt="logocode" />
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
            Inicio
          </li>
          <li className="hover:text-[#b4ff00]" >
            Sobre nosotros
          </li>
          <li className="hover:text-[#b4ff00]" >
            home
          </li>
          <li className="hover:text-[#b4ff00]" >
            Contacto
          </li>
        </ul>
        <MobileNav showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};
export default Navbar;
