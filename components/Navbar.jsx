"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { Link } from "react-scroll";
import { navbarData } from "./DataForPage/dummyData";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const handScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handScroll);
    return () => {
      window.removeEventListener('scroll', handScroll)
    };
  }, [scroll]);
  return (
    /*     <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={`${styles.xPaddings} py-8 relative`}> */
    <div>
      <div className={scroll ? "h-14 w-full fixed flex transition items-center ease-in-out duration-400 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 z-20 " : " bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20"} >
        <div className="grid grid-cols-2 justify-items-center items-center content-center w-full">
          <div className="flex items-start ">
            <div >
              <img
                src="/search.svg"
                alt="Buscar"
                className="w-[44px] h-[44px] "
              />
            </div>
          </div>
          <div className="flex flex-row items-center w-full ">
            {navbarData.map((item) => {
              return (
                <div
                  key={item.id}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offse={50}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className="cursor-pointer text-white text-lg font-normal py-1 px-2 hover:text-[#b4ff00]" /* cambiar de color el hover */
                  >
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    /*  </motion.nav> */
  );
};
{/* <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="Buscar"
        className="w-[44px] h-[44px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        CODE<span className="font-extrabold text-[24px] leading-[30px] color-code">HUIT</span>
      </h2>
      <img src="/menu.svg" alt="menu" className="w-[44px] h-[44px] object-contain"/>

    </div>
  </motion.nav> */}

/* ); */

export default Navbar;
