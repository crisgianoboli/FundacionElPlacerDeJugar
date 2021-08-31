import React from "react";
import "../../App.css";
import Logo from "../../img/Logo EPDJ.png";
import "../Dona.css";

export default function Dona() {
  return (
    <>
      <div className="dona">
        <div className="left-content">
          <div className="donate-title">
            <h2>Con tu ayuda podemos más</h2>
          </div>
          <div className="money-content">
            <p>¿Cuanto queres donar?</p>
            <div className="amount-content">
              <div className="donate-price">300</div>
              <div className="donate-price">1000</div>
              <div className="donate-price">2000</div>
              <div className="donate-price">5000</div>
            </div>
          </div>
          <div className="info-content">
            {/* <p>
              {" "}
              Te dejamos la información de la cuenta bancaria para tu Donación
            </p> */}
            <div>
              <h3>Banco de la Provincia de Cordoba</h3>
              <p>Razón Social: Fundación EL PLACER DE JUGAR</p>
              <p>CUIT: 30715189506</p>
              <p>CBU: 0200919701000001006565</p>
              <p>Nro de Cuenta: 0001006506</p>
            </div>
          </div>
        </div>

        <div className="right-content">
          <p>Organización</p>
          <img src={Logo} alt="logo" className="logo" />
          <h3>Fundacion El Placer De Jugar</h3>
          <p>Cordoba, Argentina</p>
        </div>
      </div>
    </>
  );
}
// cambiar montos desde 300, 2000 5000
