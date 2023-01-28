import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
import {
  ParrafoN,
  ParrafoT,
  SubTitle,
  SubTitle2,
} from "../../components/CustomTexts";
const Hero = () => (
  <section className={`${styles.paddings} relative`}>
    <div className={`${styles.flexCenter}`}>
      <TitleText title={<>POLITICAS DE PRIVACIDAD</>} />
    </div>
    <div className={`${styles.flexCenter} text-center`}>
      <TitleText
        title={
          <>Qué datos personales recopilamos de los visitantes y por qué.</>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoT title={<>última actualización: 02/02/2023</>} />
    </div>
    {/* introduccion */}
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Introducción</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            En CodeHuit, accesible desde www.codehuit.com, valoramos la
            privacidad de nuestros visitantes. Esta página de Política de
            privacidad describe Nuestras políticas y procedimientos sobre la
            recopilación, el uso y la divulgación de Su información cuando
            utiliza www.codehuit.com y le informa sobre Sus derechos de
            privacidad y cómo la ley lo protege. Esta Política de privacidad se
            ha creado con la ayuda de la Plantilla de política de privacidad .
          </>
        }
      />
    </div>
    {/* interpretacion y definiciones */}
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Interpretación y Definiciones</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle2 title={<>Interpretación</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Las palabras en las que la letra inicial está en mayúscula tienen
            significados definidos bajo las siguientes condiciones. Las
            siguientes definiciones tendrán el mismo significado
            independientemente de que aparezcan en singular o en plural.
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle2 title={<>Definiciones</>} />
    </div>
    <div>
      <ParrafoN
        title={
          <>
            A los efectos de esta Política de Privacidad: <br />
            Empresa (referida como "la Empresa", "Nosotros", "Nos" o "Nuestro"
            en este Acuerdo) se refiere a CODE HUIT SA , una empresa registrada
            bajo las leyes argentinas, con domicilio social en: Santa fe 644,
            Mendoza, Mendoza.
          </>
        }
      />
      <ParrafoN
        title={
          <>
            Las cookies son pequeños archivos que un sitio web coloca en su
            computadora, dispositivo móvil o cualquier otro dispositivo y que
            contienen los detalles de su historial de navegación en ese sitio
            web, entre sus múltiples usos. <br /> País se refiere a Argentina.{" "}
            <br /> Dispositivo significa cualquier dispositivo que pueda
            acceder, como una computadora, un teléfono móvil o una tableta
            digital. <br /> Formularios significa Boletín de la Empresa,
            Formulario de Contacto de la Empresa (...). <br /> Los datos
            personales son cualquier información que se relaciona con un
            individuo identificado o identificable. Servicio se refiere al sitio
            web. <br /> Los Datos de uso se refieren a los datos recopilados
            automáticamente, ya sea generados por el uso del Servicio o por la
            propia infraestructura del Servicio (por ejemplo, la duración de una
            visita a la página). <br /> El sitio web se refiere al sitio web de
            CodeHuit, accesible desde www.codehuit.com <br /> Se refiere a la
            persona que accede o utiliza el Servicio, o la empresa u otra
            entidad legal en nombre de la cual dicha persona accede o utiliza el
            Servicio, según corresponda.{" "}
          </>
        }
      />
    </div>
    {/* recopilacion y uso de sus datos personales */}
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Recopilación y uso de sus datos personales</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Recopilamos y procesamos datos como Controlador de datos, según se
            define en el Reglamento General de Protección de Datos como
            Responsable de datos, según se define en la Ley de Protección de
            Datos de Argentina .
          </>
        }
      />
    </div>
    {/* tipos de datos recopilados */}
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Tipos de datos recopilados</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle2 title={<>Información personal</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Mientras usa Nuestro Servicio, podemos pedirle que nos proporcione
            cierta información de identificación personal que se puede usar para
            contactarlo o identificarlo. Una vez que se haya suscrito a
            cualquiera de los Formularios de la Compañía, ha dado su
            consentimiento para recopilar y procesar Sus Datos personales para
            uno o más propósitos específicos. La información de identificación
            personal puede incluir:
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.flexCenter}`}>
        <ul
          className={`mt-[8px] font-semibold md:[32px] text-[20px] text-white list-disc `}
        >
          <li>Dirección de correo electrónico</li>
          <li>Nombre y apellido</li>
          <li>Datos de uso</li>
        </ul>
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle2 title={<>Datos de uso</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Los Datos de uso se recopilarán automáticamente durante el uso del
            Servicio, una vez que se haya suscrito a los Formularios de la
            Compañía. <br /> Los datos de uso pueden incluir información como la
            dirección del protocolo de Internet de su dispositivo (por ejemplo,
            la dirección IP), el tipo de navegador, la versión del navegador,
            las páginas de nuestro Servicio que visita, la hora y la fecha de su
            visita, el tiempo dedicado a esas páginas, dispositivo único
            identificadores y otros datos de diagnóstico. <br /> Cuando accede
            al Servicio a través de un dispositivo móvil, podemos recopilar
            cierta información automáticamente, que incluye, entre otros, el
            tipo de dispositivo móvil que utiliza, la identificación única de su
            dispositivo móvil, la dirección IP de su dispositivo móvil, su
            sistema operativo, el tipo de navegador de Internet móvil que
            utiliza, identificadores únicos de dispositivos y otros datos de
            diagnóstico. <br /> También podemos recopilar información que su
            navegador envía cada vez que visita nuestro Servicio o cuando accede
            al Servicio a través de un dispositivo móvil.
          </>
        }
      />
    </div>
    {/* Tecnologia de seguimiento de cookies */}
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Tecnologías de seguimiento y cookies</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Usamos Cookies y tecnologías de seguimiento similares para rastrear
            la actividad en Nuestro Servicio y almacenar cierta información. Las
            tecnologías de seguimiento utilizadas son balizas, etiquetas y
            scripts para recopilar y rastrear información y para mejorar y 6
            analizar Nuestro Servicio. Las tecnologías que utilizamos pueden
            incluir:
          </>
        }
      />
    </div>
    <div className={`${styles.flexCenter}`}>
      <ul
        className={`mt-[8px] font-semibold md:[32px] text-[20px] text-white list-disc `}
      >
        <li>
          Cookies o Cookies del Navegador. Una cookie es un pequeño archivo que
          se coloca en su dispositivo. Puede indicar a su navegador que rechace
          todas las cookies o que indique cuándo se envía una cookie. A menos
          que haya ajustado la configuración de su navegador para que acepte
          Cookies, nuestro Servicio no utilizará Cookies.o
        </li>
        <li>
          Cookies Flash. Ciertas características de nuestro Servicio pueden usar
          objetos almacenados localmente (o Flash Cookies) para recopilar y
          almacenar información sobre Sus preferencias o Su actividad en nuestro
          Servicio. Las cookies de Flash no se gestionan con la misma
          configuración del navegador que las utilizadas para las cookies del
          navegador. Para obtener más información sobre cómo puede eliminar las
          cookies de Flash, lea "¿Dónde puedo cambiar la configuración para
          deshabilitar o eliminar objetos locales compartidos?" disponible en
          https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_
        </li>
        <li>
          Balizas web. Ciertas secciones de nuestro Servicio pueden contener
          pequeños archivos electrónicos conocidos como web beacons (también
          conocidos como gifs transparentes, etiquetas de píxeles y gifs de un
          solo píxel) que permiten a la Compañía, por ejemplo, contar los
          usuarios que han visitado esas páginas y para otros estadísticas de
          sitios web relacionados (por ejemplo, registrar la popularidad de una
          determinada sección y verificar la integridad del sistema y del
          servidor).
        </li>
      </ul>
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Las cookies pueden ser cookies "persistentes" o de "sesión". Las
            cookies persistentes permanecen en su computadora personal o
            dispositivo móvil cuando se desconecta, mientras que las cookies de
            sesión se eliminan tan pronto como cierra su navegador web. Más
            información sobre las cookies: Cookies de PrivacyPolicies Generator
            .
          </>
        }
      />
    </div>
    {/* uso de datos personales */}
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Uso de sus datos personales</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            La Compañía puede utilizar los Datos Personales para los siguientes
            fines: <br /> Para proporcionar y mantener nuestro Servicio ,
            incluso para monitorear el uso de nuestro Servicio. <br /> Para
            contactarlo: para contactarlo por correo electrónico, con respecto a
            actualizaciones o comunicaciones informativas, incluidas las
            actualizaciones de seguridad, cuando sea necesario o razonable para
            su implementación. <br /> Para proporcionarle noticias e información
            general sobre nosotros. <br /> Para gestionar Sus solicitudes: Para
            atender y gestionar Sus solicitudes hacia Nosotros. <br /> Para
            otros fines : podemos utilizar su información para otros fines, como
            el análisis de datos, la identificación de tendencias de uso, la
            determinación de la eficacia de nuestras campañas promocionales y la
            evaluación y mejora de nuestro Servicio y su experiencia.
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Retención de sus datos personales</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            La Compañía conservará sus Datos personales solo durante el tiempo
            que sea necesario para los fines establecidos en esta Política de
            privacidad. Conservaremos y utilizaremos sus datos personales en la
            medida necesaria para cumplir con nuestras obligaciones legales (por
            ejemplo, si estamos obligados a conservar sus datos para cumplir con
            las leyes aplicables), resolver disputas y hacer cumplir nuestros
            acuerdos y políticas legales. <br /> <br /> La Compañía también
            conservará los Datos de uso para fines de análisis interno. Los
            Datos de uso generalmente se retienen por un período de tiempo más
            corto, excepto cuando estos datos se utilizan para fortalecer la
            seguridad o mejorar la funcionalidad de Nuestro Servicio, o cuando
            estamos legalmente obligados a retener estos datos por períodos de
            tiempo más largos.
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Transferencia de sus datos personales</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Su información, incluidos los Datos personales, se procesa en las
            oficinas operativas de la Compañía y en cualquier otro lugar donde
            se encuentren las partes involucradas en el procesamiento. Significa
            que esta información puede transferirse y mantenerse en computadoras
            ubicadas fuera de Su estado, provincia, país u otra jurisdicción
            gubernamental donde las leyes de protección de datos pueden diferir
            de las de Su jurisdicción. <br /> Su consentimiento a esta Política
            de privacidad seguido de Su envío de dicha información representa Su
            acuerdo con esa transferencia. <br /> La Compañía tomará todas las
            medidas razonablemente practicables y legalmente permitidas para
            garantizar que sus datos se traten de forma segura y de acuerdo con
            esta Política de privacidad y ninguno de sus datos personales se
            transferirá a una organización o país a menos que existan controles
            adecuados establecidos que en cumplir al menos con el mismo grado de
            cuidado que esta Política de Privacidad. <br /> A partir de hoy, sus
            datos personales pueden ser procesados ​​por: Google
            (https://google.com), MailChimp (https://mailchimp.com) y HubSpot
            (https://hubspot.com) ("Terceros" ), sujeto a futuras
            modificaciones. La información procesada y almacenada por los
            Terceros estará sujeta a sus respectivas políticas de privacidad
            (que no controlamos y de las cuales no somos responsables) a las que
            Usted podrá acceder en sus respectivos sitios web.
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Seguridad de sus datos personales</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            La seguridad de sus datos personales es importante para nosotros,
            pero recuerde que ningún método de transmisión por Internet o método
            de almacenamiento electrónico es 100 % seguro. Si bien nos
            esforzamos por utilizar medios comercialmente aceptables para
            proteger sus datos personales, no podemos garantizar su seguridad
            absoluta.
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <TitleText title={<>Divulgación de sus datos personales</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Cumplimiento de la ley</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            En determinadas circunstancias, es posible que se le solicite a la
            Compañía que divulgue sus Datos personales si así lo exige la ley o
            en respuesta a solicitudes válidas de las autoridades públicas (por
            ejemplo, un tribunal o una agencia gubernamental).
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Otros requisitos legales</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            La Compañía puede divulgar sus datos personales de buena fe cuando
            considere que esta acción es necesaria para lo siguiente:
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <ul
        className={`mt-[8px] font-semibold md:[32px] text-[20px] text-white list-disc `}
      >
        <li>Cumplir con una obligación legal</li>
        <li>Proteger y defender los derechos o propiedad de la Compañía</li>
        <li>
          Prevenir o investigar posibles irregularidades en relación con el
          Servicio
        </li>
        <li>
          Proteger la seguridad personal de los Usuarios del Servicio o del
          público
        </li>
        <li>Protéjase contra la responsabilidad legal</li>
      </ul>
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Privacidad de los niños</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Nuestro Servicio no se dirige a ninguna persona menor de 13 años. No
            recopilamos a sabiendas información de identificación personal de
            ninguna persona menor de 13 años. Si usted es un padre o tutor y
            sabe que su hijo nos ha proporcionado Datos personales, por favor
            Contáctenos. Si nos damos cuenta de que hemos recopilado Datos
            personales de cualquier persona menor de 13 años sin verificación
            del consentimiento de los padres, tomamos medidas para eliminar esa
            información de Nuestros servidores.
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Enlaces a otros sitios web</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Nuestro Servicio puede contener enlaces a otros sitios web que no
            son operados por Nosotros. Si hace clic en un enlace de un tercero,
            será dirigido al sitio de ese tercero. Le recomendamos
            encarecidamente que revise la Política de privacidad de cada sitio
            que visite. <br /> No tenemos control ni asumimos ninguna
            responsabilidad por el contenido, las políticas de privacidad o las
            prácticas de los sitios o servicios de terceros.
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Cambios a esta Política de Privacidad</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Es posible que actualicemos nuestra Política de privacidad de vez en
            cuando. Le notificaremos cualquier cambio publicando la nueva
            Política de privacidad en esta página. <br /> Le informaremos a
            través de un aviso destacado en Nuestro Servicio, antes de que el
            cambio entre en vigencia y actualizaremos la fecha de "Última
            actualización" en la parte superior de esta Política de privacidad.{" "}
            <br /> Se le recomienda revisar esta Política de Privacidad
            periódicamente para cualquier cambio. Los cambios a esta Política de
            privacidad son efectivos cuando se publican en esta página.
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Tus derechos</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Tiene derecho a acceder a sus datos, corregirlos o eliminarlos, o
            restringir o retirar completamente su consentimiento para
            procesarlos en cualquier momento. Dichas solicitudes deben enviarse
            a nuestro correo electrónico de contacto: codehouit@gmail.com. La
            retirada del consentimiento no afecta a la licitud del tratamiento
            basado en el consentimiento antes de su retirada. Tiene derecho a
            presentar una queja ante una autoridad de control (en Argentina, la
            Dirección Nacional de Datos Personales “Dirección Nacional de Datos
            Personales” – República Argentina).
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Contáctanos</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Si tiene alguna pregunta sobre esta Política de privacidad, puede contactarnos por correo electrónico: codehuitweb@gmail.com
          </>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
      <SubTitle title={<>Consentir</>} />
    </div>
    <div className={`${styles.flexStart}`}>
      <ParrafoN
        title={
          <>
            Al utilizar Nuestro Servicio, usted acepta nuestra Política de privacidad y acepta sus Términos y condiciones.
          </>
        }
      />
    </div>
  </section>
);

export default Hero;
