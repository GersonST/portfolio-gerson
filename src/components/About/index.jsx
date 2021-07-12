import React from "react";
import "./styles.scss";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="about" id="about">
      <Fade left>
        <div className="title">
          <span className="color1">$ </span>
          <span className="color2">cat </span>
          <span className="color3">Gerson.json</span>
        </div>
      </Fade>
      <Fade>
        <div className="vertical-line"></div>
      </Fade>
      <Fade cascade>
        <div className="box">
          <div class="gerson">
            <span class="line">
              <span class="tab key">"name" </span>
              <span class="two-point">: </span>
              <span class="value">"Gerson Severo"</span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"age" </span>
              <span class="two-point">: </span>
              <span class="number">30</span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"email" </span>
              <span class="two-point">: </span>
              <span class="value">"gersonsevero90@gmail.com"</span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"github" </span>
              <span class="two-point">: </span>
              <span class="value">"https://github.com/GersonST"</span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"exp" </span>
              <span class="two-point">: </span>
              <span class="value">"FrontEnd Development"</span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"academic education " </span>
              <span class="two-point">: </span>
              <span class="value">"Civil Engineering"</span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"studying" </span>
              <span class="two-point">: </span>
              <span class="value">
                "Master's degree - Integrated Project Design"
              </span>
              <span class="comma">,</span>
            </span>

            <span class="line">
              <span class="tab key">"stack" </span>
              <span class="two-point">: </span>
              <span class="number">[ </span>
              <span class="value">"React"</span>
              <span class="comma">, </span>
              <span class="value">"TypeScript"</span>
              <span class="comma">, </span>
              <span class="value">"HTML/CSS/SCSS"</span>
              <span class="number"> ]</span>
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
}
