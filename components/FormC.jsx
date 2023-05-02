import React from "react";
import styles from "../styles";
import emailjs from '@emailjs/browser'
import swal from "sweetalert";


const FormC = () => {
  
  const sendEmail = (event) =>{
    event.preventDefault();

    emailjs.sendForm('service_sfdoznq', 'template_buav8jp', event.target, 'ewnqACd9EPyRzVAih')
    .then(function(response){
      if(response == true){
        window.alert('mensaje enviado con exito')
      }else{
        swal({
          title: "Mesaje enviado con exito",
          text: "Muchas gracias por contactarnos.",
          icon: "success",
          button: "Aceptar",
          timer: "2000"
        })
      }
    })
    .catch(error => console.log(error))
  }
  
  return (
    <div className="p-0 m-0 bg-black min-h-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="">Hablemos</h1>
        <div className="w-5/6 bg-black/30 ">
          <form className="mx-auto mt-2" onSubmit={sendEmail}>
            {/* Nombre */}
            <div className="mx-auto my-3 text-white">
              <h3 className="text-[32px] text-white">¿CÓMO TE LLAMÁS?</h3>
              <input
                required
                type="name"
                className="w-full p-4 mt-2 bg-black border-form"
                placeholder="John Billmourt"
                name="user_email"
              />
            </div>
            {/* Contanos de tu proyecto */}
            <div className="mx-auto my-3">
              <h3 className="text-[32px] text-white">
                CONTANOS SOBRE TU PROYECTO.
              </h3>
              <textarea
                required
                type="text"
                className="w-full p-4 mt-2 text-white bg-black outline-none border-form"
                placeholder="TENGO QUE CONQUISTAR EL MUNDO!"
                name="user_message"
              />
            </div>
            {/* Email */}
            <div className="mx-auto my-3">
              <h3 className="text-[32px] text-white">¿CÓMO ES TU E-MAIL?</h3>
              <input
                type="email"
                className="w-full p-4 mt-2 text-white bg-black outline-none border-form"
                placeholder="info@codehuit.com"
                required
                id="email"
                size="30"
                name="user_email"
              />
            </div>
            {/* PLazo del proyecto */}
            <div className="mx-auto my-3">
              <h3 className="text-[32px] text-white">
                ¿TENÉS UN PLAZO PARA EL PROYECTO?
              </h3>
              <input
                list="browserss"
                className="w-full p-4 mt-2 text-white bg-black outline-none border-form"
                placeholder="Tenemos poco tiempo para hacerlo."
                required
                name="user_plazo"
              />
              <datalist
                id="browserss"
                className="w-full p-4 mt-2 outline-none "
              >
                <option value="Tenemos poco tiempo para hacerlo."></option>
                <option value="Tenemos entre 1 y 2 meses para terminarlo."></option>
                <option value="Tenemos 3 meses o más para terminarlo"></option>
                <option value="Buscamos una colaboracion regular."></option>
                <option value="Otro."></option>
              </datalist>
            </div>
            {/* Presupuesto del proyecto */}
            <div className="mx-auto my-3 mb-[15px]">
              <h3 className="text-[32px] text-white">
                ¿CUÁL ES EL PRESUPUESTO PARA EL PROYECTO?
              </h3>
              <input
                list="browsers"
                id="myBrowser"
                name="user_plata"
                className="w-full p-4 mt-2 text-white bg-black outline-none border-form"
                placeholder="Entre USD 200 y USD 400"
                
              />
              <datalist className="w-full" id="browsers">
                <option
                  className=""
                  value="Entre USD 200 y USD 400"
                ></option>
                <option value="Entre USD 400 y USD 600"></option>
                <option value="Entre USD 600 y USD 1200"></option>
                <option value="Otro"></option>
              </datalist>
            </div>
            {/* boton de enviar */}
            <div className={`${styles.flexEnd} mt-2`}>
              <button className="cursor-pointer  h-fit py-4 px-6  font-medium text-[18px] text-white bg-[#25618b] rounded-[32px] gap-[12px] outline-none ">
                Enviar consulta
              </button>
            </div>
          </form>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12 mt-10">
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormC;
