import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
const List = () => (
  <section className={`${styles.paddings} relative`}>
    <div className={`${styles.flexCenter} text-center`}>
      <TitleText title={<>Como lo hacemos</>} />
    </div>
    <div className={`section relative pt-20 pb-8 md:pt-16 md:pb-0 `}>
      <div class="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-row flex-wrap -mx-4 text-center">
          {/*Item 1*/}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4">
                <img src="../ecommerce/iconos/1.png" alt="" />
              </div>
              <h3 class=" uppercase text-lg leading-normal mb-2 font-semibold text-white">
                Diagnóstico y relevamiento
              </h3>
              <p class="text-white">
                Analizamos cuál es el estado de situación del ecosistema digital
                de la marca y su sector: estética, funcionalidades y
                oportunidades que se presentan.
              </p>
            </div>
          </div>
          {/*Item 2*/}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../ecommerce/iconos/2.png" alt="" />
              </div>
              <h3 class="text-lg uppercase leading-normal mb-2 font-semibold text-white">
                Desarrollo de contenido SEO
              </h3>
              <p class="text-white">
                Creamos textos e imágenes atractivas para el usuario y potencial
                cliente. Nos apoyamos en los recursos del posicionamiento
                orgánico para que el sitio aparezca en los buscadores.
              </p>
            </div>
          </div>
          {/*Item 3*/}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../ecommerce/iconos/3.png" alt="" />
              </div>
              <h3 class=" uppercase text-lg leading-normal mb-2 font-semibold text-white">
                Prototipado
              </h3>
              <p class="text-white">
                Compartimos un boceto del diseño, secciones, textos, imágenes y
                todos los componentes de cómo se verá el sitio con el cliente
                para tener el ok antes de implementar.
              </p>
            </div>
          </div>
          {/* item 4 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../ecommerce/iconos/4.png" alt="" />
              </div>
              <h3 class="uppercase text-lg leading-normal mb-2 font-semibold text-white">
                Desarrollo
              </h3>
              <p class="text-white">
                Creamos textos e imágenes atractivas para el usuario y potencial
                cliente. Nos apoyamos en los recursos del posicionamiento
                orgánico para que el sitio aparezca en los buscadores.
              </p>
            </div>
          </div>
          {/* item 5 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../ecommerce/iconos/5.png" alt="" />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-white">
                Testing
              </h3>
              <p class="text-white">
                Creamos textos e imágenes atractivas para el usuario y potencial
                cliente. Nos apoyamos en los recursos del posicionamiento
                orgánico para que el sitio aparezca en los buscadores.
              </p>
            </div>
          </div>
          {/* item 6 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../ecommerce/iconos/6.png" alt="" />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-white">
                Entrega
              </h3>
              <p class="text-white">
                Se entregará el trabajo al cliente, ya sea en línea o mediante
                la entrega de un archivo de copia de seguridad. Se proporcionará
                capacitación al cliente para que pueda administrar y actualizar
                su tienda en línea con facilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
);

export default List;
