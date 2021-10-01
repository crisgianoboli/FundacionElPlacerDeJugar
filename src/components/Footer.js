/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../img/Logo EPDJ.png";

function Footer() {
  return (
    <div className="footer-container">
      {/* SUBSCRIPCION */}
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}

      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <a
              href="https://es-la.facebook.com/elplacerdejugar2010/"
              target="_blank"
            >
              <i class="fab fa-facebook-f" />
              Fundacion El Placer de Jugar
            </a>

            <a
              href="https://www.instagram.com/elplacerdejugar/"
              target="_blank"
            >
              <i class="fab fa-instagram" />
              @elplacerdejugar
            </a>

            <a href="/" target="_blank">
              <i class="fab fa-twitter" />
              @fundacionelplacerdejugar
            </a>

            <a
              href="https://www.youtube.com/channel/UCgruNdqqyfqppfY-OTEgmVw"
              target="_blank"
            >
              <i class="fab fa-youtube" />
              Autismo - Fundacion El Placer de Jugar
            </a>
          </div>

          <div class="footer-link-items">
            <a href="https://wa.link/u4g97n" target="_blank">
              <i class="fab fa-whatsapp" />
              +54 9 3517 58-8383
            </a>

            <a href="/" target="_blank">
              <i class="far fa-envelope" />
              elplacerdejugar2010@gmail.com
            </a>

            <a href="/" target="_blank">
              <i class="fab fa-linkedin" />
              Fundacion El Placer de Jugar
            </a>
          </div>
        </div>
        {/* <p>
          Hecho con <i class="far fa-heart"></i> por CrisGianoboli
        </p> */}
      </div>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img
                className="footer-logo"
                src={Logo}
                alt="Logo el placer de jugar"
              />
            </Link>
          </div>
          <p class="website-rights">
            <span> Club Atletico Las Palmas </span>
            <br />
            <span> Juan Garcia Martinez 325 B° Las Palmas </span>
            <br />
            <span>Cordoba, Cordoba, Argentina</span> <br />
            Fundacion El Placer de Jugar © 2021
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
