import React from "react";
import "../../App.css";

import autismoImage from "../../img/autismo1.jpeg";
import TextAnimation from "react-animate-text";
import signalImage from "../../img/Señales de alerta.jpg";

const Autismo = () => {
  return (
    <>
      <div className="autismo">
        <div className="autismo-container">
          <TextAnimation>
            <h1 className="autismo-title">Autismo</h1>
          </TextAnimation>
          <img className="autismo-image" src={autismoImage} alt="Autismo" />
        </div>

        <div className="autismo-content">
          <h3>Definición</h3>
          <div className="autismo-content-definition">
            <div className="autismo-content-definition-left">
              <p>
                Segun el DSM-5, el trastorno del espectro autista se caracteriza
                por:
                <br />
                <br />
                A. Deficiancias persistentes en la comunicacion social y la
                interacción social en multiples contextos, incluidos los
                deficits de la reciprocidad social, los comportamientos
                comunicativos no verbales usados para la interaccion social y
                las habilidades para desarrollar, mantener y entender las
                relaciones.
                <br />
                Las deficiencas en la reciprocidad emocional varian, por
                ejemplo, desde un acercamiento social anormal y fracaso de la
                conversacion normal pasando por intereses, emociones o afectos
                compartidos, hasta el fracaso en iniciar o responer a
                interacciones sociales.
                <br />
                Las deficiencias en las conductas comunicativas no verbales
                utilizadas en la interaccion social, varian por ejemplo, desde
                una comunicacion pocointegrada, pasando por anomalias del
                contacto visual y del lenguaje corporal o deficiencia en la
                comprension y el uso de gestos, hasta una falta total de
                expresion facial y de comunicacion no verbal.
                <br />
                Las deficiencias en el desarrollo, mantenimiento y comprension
                de las relaciones varian, por ejemplo, desde dificultades para
                ajustar el comportamiento en diversos contextos sociales,
                pasando por dificultades para compartir juegos imaginativos o
                para hacer amigos hasta la ausencia de interes por otras
                personas.
                <br />
                <br />
                B. Patrones restrictivos y repetitivos de comportamiento,
                intereses o actividades que se manifiestan en dos o mas de los
                siguientes puntos, actualmente o por los antecedentes.
                <br />
                <br />
                1. Movimientos, utilizacion de objetos o habla estereotipádos o
                repetitivos (p.ej. , estereotipas motoras simples, alineacion de
                juguetes o cambio de lugar de objetos, ecolalia, frases
                idiosincrasicas).
                <br />
                <br />
                2. Insistencia en la monotonia, excesiva inflexibilidad de
                rutinas o patrones ritualizados de comportamiento verbal y no
                verbal (p. ej., gran angustia frente a cambios pequeños,
                patrones de pensamiento rigidos, rituales de saludo, necesidad
                de tomar el mismo camino o de comer los mismos alimentos cada
                dia).
                <br />
                <br />
                3. Intereses muy restringidos y fijos que son anormales en
                cuanto a su intensidad o foco de interes (p. ej., fuerte apego o
                preocupacion por objetos inusuales, intereses excesivamente
                circunscritos o perseverantes).
              </p>
            </div>
            <div className="autismo-content-definition-right">
              <p>
                4. Hiper o hiporreactividad a los estimulos sensoriales o
                interes inhabitual por aspectos sensoriales del entorno (p. ej.,
                indiferencia aparente al dolor/temperatura, respuesta adversa a
                sonidos o texturas especificos, olfateo o palpacion excesiva de
                objetos, fascinacion visual por luces o el movimiento).
                <br />
                <br />
                C. Los sintomas deben estar presentes en las primeras fases del
                desarrollo, pero pueden no manifestarse totalmente hasta que la
                demanda social supera las capacidades limitadas.
                <br />
                <br />
                D. Los sintomas causan un deterioro clinicamente significativo
                en lo social, laboral u otras areas importantes del
                funcionamiento habitual.
                <br />
                <br />
                E. Estas alteraciones no se explican mejor por la discapacidad
                intelectual o por el retraso global en el desarrollo.
                <br />
                <br />
                La etapa en el que el deterioro funcional llega a ser obvio
                variara segun las caracteristicas del individuo y su entorno, de
                la gravedad de la afeccion autista, el nivel de desarrollo y la
                edad cronologica; de ahi el termino espectro.
              </p>

              <div className="more-info">
                <h4>La importancia de la deteccion temprana</h4>
                <p>
                  La gran mayoria de los niños con TEA se pueden detectar a
                  edades tempranas, y si esto se logra, trae grandes beneficios
                  a todo nivel. El potencial neuroplastico de un niño en sus
                  primos 5 años es el mayor que tendra a lo largo de toda su
                  vida.
                  <br />
                  Si un niño con un TEA recibe una intervencion intensiva
                  temprana, tiene posibilidades de cambiar su trayectoria de
                  desarrollo. Actualmente, se describen en numerosos trabajos
                  cientificos "recuperaciones" y mejoras significativas en niños
                  con TEA que han recibido intervenciones intesivas tempranas
                  (Rogers 2008, Reichow 2008) La deteccion temprana de los TEA
                  posibilita:
                  <br />
                  * Un mejor pronostico para el niño mediante la intervencion
                  temprana (CI mas alto, mejores habilidades
                  socio-comunicacionales y adaptativas).
                  <br />
                  * Una mejor calidad de vida para la familia.
                  <br />
                  * Una reduccion de los costos generales asociados al cuadro.
                  <br />
                  * La obtencion de datos epidemiologicos locales, con el
                  objetivo posterior de implementar politicas publicas acordes,
                  tanto de salud como educativas.
                  <br />* La toma de conciencia de la poblacion general.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="signal-image-content">
        <h3>Señales de Alerta</h3>

        <a className="signal-image" download={signalImage} href={signalImage}>
          <img
            className="signal-image"
            src={signalImage}
            alt="señales de alerta"
          />
        </a>
      </div>
    </>
  );
};

export default Autismo;
