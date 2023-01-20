import React from "react";
import styles from "../../styles";


const Items = () =>(
    <section className={`${styles.paddings}`}>
            <div className={`${styles.flexCenter}`}>
      <div class="grid md:grid-cols-3 aling-center  lg:grid-cols-3 gap-x-6 mb-12 mt-10">
        {/* item 1 */}
        <div class="mb-12 lg:mb-0 text-center">
            <div className={`w-full ${styles.flexCenter} align-center`}>
            </div>
          <h6 class="font-medium color-code text-[32px] ">Imagen corporativa</h6>
          <p className="text-white mt-[12px]">
          Permite ofrecer una imagen corporativa profesional de tu empresa, dando a conocer tus servicios o productos, tu equipo, tus valores corporativos y todo lo que te interese que tus clientes sepan de ti.
          </p>
        </div>
        {/* item 2 */}
        <div class="mb-12 lg:mb-0 text-center mx-auto">
        <div className={`w-full ${styles.flexCenter} align-center`}>
            </div>
          <h6 class="font-medium color-code text-[32px]">Visibilidad de tu negocio</h6>
          <p className="text-white mt-[12px]">
          Una página web es un escaparate de tu empresa. Si logras posicionarte en los buscadores, podrás conseguir tráfico a tu sitio que dé a conocer tu negocio a potenciales clientes, proveedores y demás.
          </p>
        </div>
        {/* item 3 */}
        <div class="mb-12 lg:mb-0 text-center mx-auto">
        <div className={`w-full ${styles.flexCenter} align-center`}>
            </div>
          <h6 class="font-medium color-code text-[32px]">Aumento de ventas
</h6>
          <p className="text-white mt-[12px]">
          Las páginas web correctamente diseñadas, permiten que las personas interesadas en tus productos y/o servicios realicen acciones de valor, como por ejemplo, contactar o realizar una compra. 
          </p>
        </div>
      </div>
      </div>
    </section>
)
export default Items;