import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import { straggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import { TitleText } from "../../components";
import Button2 from "../../components/Button2";

const Abaut = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter}`}
      >
        <img
          src="../SistemGym.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText title={<>Perfiles de usuario</>}></TitleText>
        <motion.p
        className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
        variants={fadeIn("up", "tween", 0.2, 1)}
        >Administre fácilmente los usuarios que tendrán acceso a su negocio en la nube con diferentes perfiles de usuario.</motion.p>
        <motion.div 
        variants={fadeIn("left", "tween", 0.2, 1)}
        className={`${styles.flexCenter} mt-[32px]`}>
        <Button2 />
        </motion.div>
        
      </motion.div>
    </motion.div>
  </section>
);

export default Abaut;
{
  /* <div className={`section relative pt-20 pb-8 md:pt-16 md:pb-0 `}>
<div class="container xl:max-w-6xl mx-auto px-4">
  <div className="flex flex-row flex-wrap -mx-4 text-center"> */
}
{
  /*Item 1*/
}
{
  /* <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
      <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-b border-[#b4ff00] hover:-translate-y-2">
        <div className="inline-block mb-4">
          <img src="../userS.png" alt="" />
        </div>
        <h3 class="text-lg leading-normal mb-2 font-semibold text-white">
        PERFILES USUARIO
        </h3>
        <p class="text-white">
        Administre fácilmente los usuarios que tendrán acceso a su negocio en la nube con diferentes perfiles de usuario.
        </p>
      </div>
    </div> */
}
{
  /*Item 2*/
}
{
  /* <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
      <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-b border-[#b4ff00] hover:-translate-y-2">
        <div className="inline-block mb-4 text-gray-900">
          <img src="../nubeS.png" alt="" />
        </div>
        <h3 class="text-lg leading-normal mb-2 font-semibold text-white">
        DISEÑO DE INTERFAZ
        </h3>
        <p class="text-white">
        Diseño simple y responsivo, que permite acceder mediante un navegador desde cualquier dispositivo.

        </p>
      </div>
    </div> */
}
{
  /*Item 3*/
}
{
  /* <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
      <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-b border-[#b4ff00] hover:-translate-y-2">
        <div className="inline-block mb-4 text-gray-900">
          <img src="../tuercaS.png" alt="" />
        </div>
        <h3 class="text-lg leading-normal mb-2 font-semibold text-white">
        MODULAR Y FLEXIBLE
        </h3>
        <p class="text-white">
        ofrecemos la posibilidad de elegir con que módulos trabajar en función de las necesidades de su negocio.
        </p>
      </div>
    </div>
  </div>
</div>
</div> */
}
