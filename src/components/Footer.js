import React from "react";
import "./Footer.css";
import { Button } from "./Button";
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
        <div class="social-icons">
          <Link
            class="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f" />
          </Link>
          <Link
            class="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram" />
          </Link>
          <Link
            class="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i class="fab fa-youtube" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin" />
          </Link>
        </div>

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/sign-up">
              <i class="fab fa-facebook-f" />
              Fundacion El Placer de Jugar
            </Link>

            <Link to="/">
              <i class="fab fa-instagram" />
              @elplacerdejugar
            </Link>

            <Link to="/">
              <i class="fab fa-twitter" />
              @fundacionelplacerdejugar
            </Link>

            <Link to="/">
              <i class="fab fa-youtube" />
              Autismo - Fundacion El Placer de Jugar
            </Link>
          </div>

          <div class="footer-link-items">
            <Link to="/">
              <i class="fab fa-whatsapp" />
              351 6188735
            </Link>

            <Link to="/">
              <i class="far fa-envelope" />
              elplacerdejugar2010@gmail.com
            </Link>

            <Link to="/">
              <i class="fab fa-linkedin" />
              Fundacion El Placer de Jugar
            </Link>
          </div>
        </div>
      </div>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img
                className="navbar-logo"
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
