import React from "react";
import "./styles.scss";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Fade left>
        <div className="title">
          <span className="color1">$ </span>
          <span className="color2">cd </span>
          <span className="color3">Contact</span>
        </div>
      </Fade>

      <div className="vertical-line"></div>

      <Fade cascade>
        <div className="box">
          <div class="gerson">
            <span class="line">
              <span class="tab key">"Instagram" </span>
              <span class="two-point">: </span>
              <a
                href="https://www.instagram.com/gersonsevero_/"
                className="icons"
              >
                <FaInstagram className="icon" />
              </a>

              <span class="value"> "gersonsevero_"</span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"Linkedin" </span>
              <span class="two-point">: </span>
              <a
                href="https://www.linkedin.com/in/gersonsevero/"
                className="icons"
              >
                <FaLinkedin className="icon" />
              </a>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"email" </span>
              <span class="two-point">: </span>
              <a href="mailto:gersonsevero90@gmail.com" className="icons">
                <FaEnvelope className="icon" />
              </a>
              <span class="value"> "gersonsevero90@gmail.com"</span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"github" </span>
              <span class="two-point">: </span>
              <a href="https://github.com/GersonST" className="icons">
                <FaGithub className="icon" />
              </a>
              <span class="value"> "https://github.com/GersonST"</span>
              <span class="comma">,</span>
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
}
