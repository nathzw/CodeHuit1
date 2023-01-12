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
              <input type="name" className="w-full p-4 mt-2 bg-black border-form" placeholder="CODE HUIT" />
            </div>
            <div className="mx-auto my-3">
            <input type="text" className="w-full p-4 mt-2 bg-black outline-none border-form" placeholder="TENGO QUE CONQUISTAR EL MUNDO" />
            </div>
            <div className="mx-auto my-3">
            <input type="text" className="w-full p-4 mt-2 bg-black outline-none border-form" placeholder="CODEHUIT@GMAIL.COM" />
            </div>
            <div className="mx-auto my-3">
            <textarea type="text" className="w-full p-4 mt-2 bg-black outline-none border-form" placeholder="TENEMOS 3 MESES O MAS PARA TERMINARLO" />
            </div>
          <button className="w-full p-3 mt-2 text-lg font-bold tracking-wide transition-all bg-green-500 border-none outline-none ronded-lg ">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormC;
