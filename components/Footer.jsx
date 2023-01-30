"use client";
import { motion } from "framer-motion";
import { socialMedia, footerLinks } from "../constants";
import styles from "../styles";
// import { LogoF } from '../assents';

 import { footerVariants } from "../utils/motion";
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-4 relative`}
  >
    <section className={`${styles.flexCenter} ${styles.paddings} flex-col`}>
      <div className="z-30 footer-gradient" />
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-col justify-start flex-1 mr-10">
          <img
            src="/LogoF.png"
            alt="logocode"
            className="w-[150px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px] text-white`}>
            Tu nueva manera de crear tu pagina web.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLinks) => (
            <div
              key={footerLinks.key}
              className="flex flex-col sm:my-0 min-w-[150px]"
            >
              <h4 className="text-white font-bold text-[18px] leanding-[27px]">
                {footerLinks.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLinks.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal text-[16px] leading-[24px] text-white/30 cursor-pointer hover:text-[#b4ff00] ${
                      index === footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white/30">
        <p className="font-normal text-[10px] leading-[27px] text-white/30">
          Copyright © 2022 - 2023 CodeHuit. All rights reserved.
        </p>

        <div className="flex flex-row mt-6 md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              key={social.map}
              src={social.imgUrlI}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  </motion.footer>
);

export default Footer;
// <motion.footer
// variants={footerVariants}
// initial="hidden"
// whileInView="show"
// className={`${styles.paddings} py-8 relative`}
// >
// <div className="footer-gradient" />
// <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
//   <div className="flex items-center justify-between gap-5 flex-grap">
//     <h4 className="font-bold md:text-[64px] text-[44pox] text-white">
//       Descubri CODE <span className="font-bold md:text-[64px] text-[44pox] color-code" >HUIT </span>
//     </h4>
//     <button
//       type="button"
//       className="flex items-center h-fit py-4 px-5 bg-[#25618b] rounded-[32px] gap-[12px]"
//     >
//       <img
//         src="/headset.svg"
//         alt="headset"
//         className="w-[24px] h-[24px] object-contain"
//       />
//       <span className="font-normal text-[16px] text-white flex">
//         <a href="#"> Contactanos</a>
//         {/*mandar a la ubicacion de wpp*/}
//       </span>
//     </button>
//   </div>
//   <div className="flex flex-col">
//     <div className="mb-[50px] h-[2px] bg-white opacity-10" />
//     <div className="flex flex-wrap items-center justify-between">
//       <h4 className="font-extrabold text-[20px] text-white">code<span className="font-extrabold text-[20px] color-code">huit</span></h4>
//       <p className="font-normal text-[10px] text-white opacity-50">

//       </p>
//       <div className="flex gap-4">
//         {socials.map((social) => (
//           <a href={social.href}>
//             <img
//               key={social.name}
//               src={social.url}
//               alt={social.name}
//               className="w-[24px] h-[24px] object-contain cursor-pointer "
//             />
//           </a>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
// </motion.footer>
