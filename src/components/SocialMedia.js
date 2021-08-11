/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./SocialMedia.css";

export const SocialMedia = () => {
  return (
    <div className="social-bar">
      <a href="#face" target="_blank" className="icon">
        <i class="fab fa-facebook-f" />
      </a>

      <a href="#instagram" target="_blank" className="icon">
        <i class="fab fa-instagram" />
      </a>

      <a href="#twitter" target="_blank" className="icon">
        <i class="fab fa-twitter" />
      </a>

      <a href="#youtube" target="_blank" className="icon">
        <i class="fab fa-youtube" />
      </a>

      <a href="#whattsap" target="_blank" className="icon">
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
