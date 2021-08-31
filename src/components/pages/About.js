import React from "react";
import autismoImage from "../../img/img5.jpeg";
import teamImage from "../../img/img1.jpeg";
import "../About.css";
import TextAnimation from "react-animate-text";
import familyImage from "../../img/img3.jpeg";

/* Imagenes team */
import presidentImg from "../../img/team/gustavo.JPG";
import LucasImg from "../../img/team/Lucas.JPG";
import PatriciaImg from "../../img/team/patricia.JPG";
import LuisImg from "../../img/team/luis.JPG";
import miguelImg from "../../img/team/miguel.JPG";
import pedroImg from "../../img/team/pedro.JPG";
import gabrielImg from "../../img/team/gabriel.JPG";
import giselaImg from "../../img/team/gisela.JPG";
import gasparImg from "../../img/team/gaspar.JPG";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <TextAnimation>
            <h1 className="about-title">Conocenos</h1>
          </TextAnimation>
          <img className="about-image" src={autismoImage} alt="Autismo" />
        </div>
        <div className="about-content">
          <div className="about-text-container">
            <p className="text-left">
              El placer de jugar nace como proyecto en el año 2010 y se
              constituye como fundacion en 2015, con el objetivo de colaborar
              con la sociabilizacion de jovenes y niños con autismo a traves, de
              juegos en grupo y deportes.
              <br />
              Sus acciones estan dirigidas a todos aquellos niños/as y jovenes
              que, por su discapacidad, se ve afectada su area afectiva y sobre
              todo social. Es asi que estos niños/as y jovenes incorporan y
              mejoran habitos y codigos de comportamiento grupales, de la forma
              mas placentera y natural... jugando. Poco a poco se fue orientando
              a la construccion de una base destinada a permanecer y ser
              aplicada a lo largo de la vida, fuera de los proyectos.
              <br />
              Queremos que los niños vengan a los clubes u otros espacios
            </p>

            <p className="text-right">
              de desempeño social, tengan un lugar propio y abierto a la
              comunidad del mismo, queremos que, por intermedio de ellos, se
              acerquen las familias y encuentren tambien su lugar.
              <br />
              Cuenta con el apoyo de los padres como pilar fundamental. Estos no
              solo fueron claves en la evolucion, sino que encontraron un
              espacio en el.
              <br />
              Apostamos a la autonomia de los niños y jovenes como pilar para
              desenvolverse en la sociedad fuera del proyecto.
              <br />
              Todas las actividades y proyectos de la fundacion (regladas,
              organizadas y secuenciadas), se aferran al objetivo principal a
              traves de sus medios (realizar actividades deportivas, expresivas
              y sociales en grupo), con la aparicion de El Otro como componente
              esencial de la actividad social.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="team-title">Equipo</h2>
        <img className="team-image" src={teamImage} alt="Autismo" />
      </div>

      <div className="team-content">
        <div className="president-content">
          <div className="img-content">
            <img
              src={presidentImg}
              alt="president-profile"
              className="img-team"
            />
          </div>
          <div className="title-content">
            <h2>Gustavo Eguiguren</h2>
            <h4>Presidente de la fundación</h4>
          </div>
          <div className="description-president">
            <p>
              Gustavo Eguiguren es Profesor de Educacion Fisica y Licenciado en
              Ciencas de la Educacion, graduado de la universidad catolica de
              Cordoba, actualmente se desempeña como docente en diferentes
              escuelas de la ciudad de Cordoba.
              <br />
              Tambien es asistente Terapeutico en discapacidad, especializado en
              Autismo y Psicosis en la infancia. <br />
              Es fundador y presidente de la Fundacion El Placer de Jugar, que
              trabaja con personas con Condición del Espectro Autista CEA,
              sumando en esta actividad mas de diez años de experiencia en el
              acompañamiento de niños, jovenes y familias. <br />
              Es creador de las capacitaciones anuales "Autismo, Deporte y
              Juego" y disertante en varias exposiciones sobre autismo. <br />
              Es autor del libro "Estrategias de Juego y Sociabilización en
              Autismo", en donde resume las experiencias de una decada de
              trabajo con su fundación. <br />
              El libro se enfoca en las experiencias de la escuela, de la
              fundación, ademas de brindar propuestas innovadoras y distintas
              estrategias para el tratamiento de personas con CEA.
            </p>
          </div>
        </div>

        <div className="coordinadores-content">
          <div className="coor-container">
            <div className="img-content">
              <img
                src={LucasImg}
                alt="coordinador profile"
                className="coor-img"
              />
            </div>
            <div className="description-coor-content">
              <h2>Lucas Dambolena</h2>
              <h4>Coordinador General y Secretario</h4>
              <p>
                {" "}
                Profesor de Educación fisica y acompañantes terapeutico (AT).
                Encargado del area social y educativa, del desarrollo y puesta
                en marcha de las actividades semanales que se realizan en la
                fundación.
              </p>
            </div>
          </div>

          <div className="coor-container">
            <div className="img-content">
              <img
                src={PatriciaImg}
                alt="coordinadora profile"
                className="coor-img"
              />
            </div>
            <div className="description-coor-content">
              <h2>Patricia Ferreyra</h2>
              <h4>Coordinadora administrativa</h4>
              <p>
                {" "}
                Acompañante terapeutica (AT), especializada en acompañamiento
                escolar. Encargada de la recepción y seguimiento de las
                familias; y tambien de la actualización de medios y redes
                sociales.
              </p>
            </div>
          </div>
        </div>

        <div className="staff-content">
          <div className="staff-card">
            <img src={LuisImg} alt="luis profile" className="staff-img" />
            <h3 className="staff-title">Luis Criado</h3>
            <p>Profesor de Educación Fisica</p>
          </div>

          <div className="staff-card">
            <img src={miguelImg} alt="miguel profile" className="staff-img" />
            <h3 className="staff-title">Miguel Espindola</h3>
            <p>Profesor de Educación Fisica</p>
          </div>

          <div className="staff-card">
            <img src={pedroImg} alt="pedro profile" className="staff-img" />
            <h3 className="staff-title">Pedro Eguiguren</h3>
            <p>Profesor de Educación Fisica</p>
            <p>Acompañante terapéutico AT</p>
          </div>

          <div className="staff-card">
            <img src={gabrielImg} alt="gabriel profile" className="staff-img" />
            <h3 className="staff-title"> Garbiel Herrera</h3>
            <p>Profesor de Educación Fisica</p>
          </div>

          <div className="staff-card">
            <img src={giselaImg} alt="Gisela profile" className="staff-img" />
            <h3 className="staff-title">Gisela Guzman</h3>
            <p>Profesora de Educación Fisica</p>
          </div>

          <div className="staff-card">
            <img src={gasparImg} alt="gaspar profile" className="staff-img" />
            <h3 className="staff-title">Gaspar Eguiguren</h3>
            <p>Estudiante de Psicologia</p>
          </div>
        </div>
      </div>
      <div className="family-content">
        <h2 className="team-family">Familias</h2>
        <img className="team-image" src={familyImage} alt="family" />
      </div>
    </>
  );
};

export default About;
