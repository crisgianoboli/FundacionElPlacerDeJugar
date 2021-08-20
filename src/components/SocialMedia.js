/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./SocialMedia.css";

export const SocialMedia = () => {
  return (
    <div className="social-bar">
      <a
        href="https://es-la.facebook.com/elplacerdejugar2010/"
        target="_blank"
        className="icon"
      >
        <i class="fab fa-facebook-f" />
      </a>

      <a
        href="https://www.instagram.com/elplacerdejugar/"
        target="_blank"
        className="icon"
      >
        <i class="fab fa-instagram" />
      </a>

      <a href="/" target="_blank" className="icon">
        <i class="fab fa-twitter" />
      </a>

      <a
        href="https://www.youtube.com/channel/UCgruNdqqyfqppfY-OTEgmVw"
        target="_blank"
        className="icon"
      >
        <i class="fab fa-youtube" />
      </a>

      <a href="https://wa.link/u4g97n" target="_blank" className="icon">
        <i class="fab fa-whatsapp"></i>
      </a>

      <a href="#mail" target="_blank" className="icon">
        <i class="far fa-envelope"></i>
      </a>

      <a href="#linkedin" target="_blank" className="icon">
        <i class="fab fa-linkedin" />
      </a>
    </div>
  );
};
