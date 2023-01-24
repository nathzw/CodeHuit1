import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import Button3 from "../../components/Button3";

const List = () => (
  <section className={`${styles.paddings} relative`}>
    <div className={`section relative pt-20 pb-8 md:pt-16 md:pb-0 `}>
      <div class="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-row flex-wrap -mx-4 text-center">
          {/*Item 1*/}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4">
                <img src="../sistema/home.png" alt="" />
              </div>
              <h3 class=" uppercase text-lg leading-normal mb-2 font-semibold text-white">
                ventas
              </h3>
              <p class="text-white">
                Administre las ventas y cobranzas de sus operaciones
                comerciales. Multiempresa
              </p>
            </div>
          </div>
          {/*Item 2*/}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../sistema/regalo.png" alt="" />
              </div>
              <h3 class="text-lg uppercase leading-normal mb-2 font-semibold text-white">
                compras
              </h3>
              <p class="text-white">
                Administre las compras y gestione los pagos a proveedores.
                Multiempresa.
              </p>
            </div>
          </div>
          {/*Item 3*/}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../sistema/kiosco.png" alt="" />
              </div>
              <h3 class=" uppercase text-lg leading-normal mb-2 font-semibold text-white">
                stock
              </h3>
              <p class="text-white">
                Administre sus productos en múltiples depósitos. Código de
                barras y escalas.
              </p>
            </div>
          </div>
          {/* item 4 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../sistema/efectivo.png" alt="" />
              </div>
              <h3 class="uppercase text-lg leading-normal mb-2 font-semibold text-white">
                punto de venta
              </h3>
              <p class="text-white">
                Facturación rápida en puntos de ventas de maxikioskos o
                almacenes.
              </p>
            </div>
          </div>
          {/* item 5 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../sistema/tuerca.png" alt="" />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-white">
                facturación electronica
              </h3>
              <p class="text-white">
                Posibilidad de emitir comprobantes electrónicos.
              </p>
            </div>
          </div>
          {/* item 6 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4 text-gray-900">
                <img src="../sistema/factura.png" alt="" />
              </div>
              <h3 class="text-lg leading-normal mb-2 font-semibold text-white">
                producción
              </h3>
              <p class="text-white">
                Manejo de órdenes de producción y de trabajo de sus productos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
        <Button3 />
    </div>
  </section>
);

export default List;
