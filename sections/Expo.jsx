import React from "react";
import styles from "../styles";

const Export = () => (
  <section className={`${styles.paddings} relative z-10 mt-30`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white/30"></div>
    <div className={`${styles.flexCenter}`}>
      <div class="grid md:grid-cols-3 aling-center  lg:grid-cols-3 gap-x-6 mb-12 mt-10">
        {/* item 1 */}
        <div class="mb-12 lg:mb-0 text-center">
            <div className={`w-full ${styles.flexCenter} align-center`}>
            <img src="../export1.png" alt="cubo" className=" w-[68px] " />
            </div>
          
          <h6 class="font-medium text-white">Lorem Ipsum</h6>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quasi aliquid voluptatibus, 
          </p>
        </div>
        {/* item 2 */}
        <div class="mb-12 lg:mb-0 text-center mx-auto">
        <div className={`w-full ${styles.flexCenter} align-center`}>
            <img src="../export2.png" alt="cubo" className=" w-[68px] " />
            </div>
          <h6 class="font-medium text-white">Lorem Ipsum</h6>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quasi aliquid voluptatibus, 
          </p>
        </div>
        {/* item 3 */}
        <div class="mb-12 lg:mb-0 text-center mx-auto">
        <div className={`w-full ${styles.flexCenter} align-center`}>
            <img src="../export3.png" alt="cubo" className=" w-[68px] " />
            </div>
          <h6 class="font-medium text-white">Lorem Ipsum</h6>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quasi aliquid voluptatibus, 
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Export;
