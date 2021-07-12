import React, { useState, useEffect } from "react";
import "./styles.scss";
import PortfolioList from "../PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

import Fade from "react-reveal/Fade";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web Page",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <Fade left>
        <div className="title">
          <span className="color1">$ </span>
          <span className="color2">cd </span>
          <span className="color3">Portfolio</span>
        </div>
      </Fade>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <Fade right cascade>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <a href={d.link} target="_blank" rel="noreferrer">
                <img src={d.img} alt="" />
              </a>
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
