import Input from "../components/Input";
import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const FormC = () => {
  return (
    <div className="p-0 m-0 bg-black min-h-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="">Hablemos</h1>
        <div className="w-5/6 bg-black/30 ">
          <form className="mx-auto mt-2">
            <div className="mx-auto my-3">
              <h3 className="text-[32px] text-white/10">¿CÓMO TE LLAMÁS?</h3>
              <input type="name" className="w-full p-4 mt-2 bg-black border-form" placeholder="CODE HUIT" />
            </div>
            <div className="mx-auto my-3">
              <h3 className="text-[32px] text-white/10">CONTANOS SOBRE TU PROYECTO.</h3>
              <textarea type="text" className=" text-white w-full p-4 mt-2 bg-black outline-none text-white border-form" placeholder="TENGO QUE CONQUISTAR EL MUNDO" />
            </div>
            <div className="mx-auto my-3">
              <h3 className="text-[32px] text-white/10">¿CÓMO ES TU E-MAIL?</h3>
              <input type="email" className=" text-white w-full p-4 mt-2 bg-black outline-none border-form" placeholder="CODEHUIT@GMAIL.COM" />
            </div>
            <div className="mx-auto my-3">
              <h3 className="text-[32px] text-white/10">¿TENÉS UN PLAZO PARA EL PROYECTO?
              </h3>
              <textarea type="text" className="w-full text-white/5 p-4 mt-2 bg-black outline-none border-form" placeholder="TENEMOS 3 MESES O MAS PARA TERMINARLO" />
            </div>
            <div className="mx-auto my-3">
              <h3 className="text-[32px] text-white/10">¿CUÁL ES EL PRESUPUESTO PARA EL PROYECTO?

              </h3>
              <input type="text" className="w-full text-white/5 p-4 mt-2 bg-black outline-none border-form" placeholder="ENTRE USD 5000 Y USD 15.000" >
                <datalist>
                  <option>Hola como esta</option>
                  <option>Hola como esta</option>
                  <option>Hola como esta</option>
                  <option>Hola como esta</option>
                </datalist>
              </input>
            </div>
            <div className={`${styles.flexEnd}`}>
              <button className="cursor-pointer hover:text-[#b4ff00] h-fit py-4 px-6 font-normal font-medium text-[18px] text-white bg-[#25618b] rounded-[32px] gap-[12px] outline-none ">Enviar consulta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormC;
