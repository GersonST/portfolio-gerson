import React, { useState } from "react";
import "./styles.scss";
import Fade from "react-reveal/Fade";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Ecoleta",
      desc: "Ecoleta - is a way to connect companies and entities that collect organic and inorganic waste.",
      img: "./assets/ecoleta-mobile.jpg",
      link: "https://github.com/GersonST/ecoleta",
      tech: [
        {
          t: "ReactJS",
          logo: "./assets/react.svg",
        },
        {
          t: "React Native",
          logo: "./assets/react.svg",
        },
        {
          t: "Expo",
          logo: "./assets/expo-icon.svg",
        },
      ],
    },
    {
      id: "2",
      title: "Letmeask",
      desc: "Let viewers decide which questions the host should answer during a livestream. Developed during @Rocketseat NLW#06 free training.",
      img: "./assets/letmeask-mobile.jpeg",
      link: "https://github.com/GersonST/letmeasknlw6",
      tech: [
        {
          t: "React",
          logo: "./assets/react.svg",
        },
        {
          t: "Firebase",
          logo: "./assets/firebase.svg",
        },
        {
          t: "Sass",
          logo: "./assets/sass.svg",
        },
      ],
    },
    {
      id: "3",
      title: "Nasa APOD",
      desc: "This app displays beautiful astronomy photos for the current day and month from the NASA APOD API",
      img: "./assets/nasa-apod-mobile.jpg",
      link: "https://github.com/GersonST/nasa-apod",
      tech: [
        {
          t: "React",
          logo: "./assets/react.svg",
        },
      ],
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="works">
      <Fade left>
        <div className="title">
          <span className="color1">$ </span>
          <span className="color2">cd </span>
          <span className="color3">Works</span>
        </div>
      </Fade>
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        <Fade>
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <Fade cascade>
                  <div className="left">
                    <div className="leftContainer">
                      <h2>{d.title}</h2>
                      <p>{d.desc}</p>
                      <ul>
                        {d.tech.map((te) => (
                          <li>
                            <img src={te.logo} alt="" />

                            {te.t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Fade>
                <div className="right">
                  <a href={d.link} target="_blank" rel="noreferrer">
                    <img src={d.img} alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
