import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
const Prueba = () => (
  <section className={`${styles.padding}`}>
    <div className={`${styles.flexCenter} text-center`}>
    <TitleText title={<>Preguntas frecuentes sobre Diseño web y Desarrollo

</>}></TitleText>
    </div>

    <div class="max-w-screen-xxl mx-auto px-5 mt-5 h-sceen">
      <div class="text-white grid divide-y divide-[#b4ff00] w-full mx-auto mt-8 border-b-[#b4ff00]">
        <div class="py-5 ">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> ¿Qué es el diseño web?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="text-white mt-3 group-open:animate-fadeIn">
              SAAS platform is a cloud-based software service that allows users
              to access and use a variety of tools and functionality.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> ¿Por què debo contratar una agencia de diseño web?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="text-white mt-3 group-open:animate-fadeIn">
              We offers a variety of billing options, including monthly and
              annual subscription plans, as well as pay-as-you-go pricing for
              certain services. Payment is typically made through a credit card
              or other secure online payment method.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>¿Cómo sé que me va a gustar el diseño de mi web?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="text-white mt-3 group-open:animate-fadeIn">
              We offers a 30-day money-back guarantee for most of its
              subscription plans. If you are not satisfied with your
              subscription within the first 30 days, you can request a full
              refund. Refunds for subscriptions that have been active for longer
              than 30 days may be considered on a case-by-case basis.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>Si ya tengo una web, ¿puedo mejorar su diseño?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="text-white mt-3 group-open:animate-fadeIn">
              To cancel your We subscription, you can log in to your account and
              navigate to the subscription management page. From there, you
              should be able to cancel your subscription and stop future
              billing.
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
);
export default Prueba;
