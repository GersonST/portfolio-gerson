import React, { useEffect, useRef } from "react";
import "./styles.scss";
import { init } from "ityped";
import Fade from "react-reveal/Fade";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [
        "Front-end",
        "It works on my machine.",
        "turns coffee into code.",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <Fade left>
        <div className="left">
          <div className="imgContainer">
            <img src="assets/avatar.jpg" alt="" />
          </div>
        </div>
      </Fade>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Gerson Severo</h1>
          <h3>
            Developer <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
