import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../img/Logo EPDJ.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar-content">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo-container"
            onClick={closeMobileMenu}
          >
            <img
              className="navbar-logo"
              src={Logo}
              alt="El placer de jugar Logo"
            />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Autismo"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Autismo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                Conocenos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Work" className="nav-links" onClick={closeMobileMenu}>
                ¿Que hacemos?
              </Link>
            </li>
            {/*  <li className="nav-item">
              <Link
                to="/Agenda"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Agenda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contacto"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li> */}
          </ul>

          {button && (
            <Link to="/Donate" className="nav-links" onClick={closeMobileMenu}>
              {/* <i class="fas fa-user-friends nav-links"></i> */}
              <button className="btn-donate">Doná</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
