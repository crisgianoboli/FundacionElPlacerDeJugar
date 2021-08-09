import React from "react";
import imagenWork from "../img/img1.jpeg";
import "./WorkSection.css";

function WorkSection() {
  return (
    <div className="work-container">
      <div className="work-title-content">
        <img src={imagenWork} alt="imagen trabajando" className="work-img" />
        <h2 className="work-title">¿ Que hacemos ?</h2>
      </div>

      <div className="work-content">
        <p>
          Con la conviccion de dar cumplimiento a objetivos sociales, las
          acciones que se realizaron son juegos siempre en grupos y deportes{" "}
          <br />
          Complementamos estas salidas, viajes en familia, visitas y actividades
          expresivas. <br />
          Los niños y jovenes participan en gimnasios, espcaios al aire libre y
          sobre todo pileta climatizada.
        </p>
      </div>
    </div>
  );
}

export default WorkSection;
