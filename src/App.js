import React, { useState, useEffect } from "react";
import Topbar from "./components/Topbar/index";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio/index";
import Works from "./components/Works";
import Contact from "./components/Contact/index";
import "./App.scss";
import Menu from "./components/Menu/index";
import ParticlesBg from "particles-bg";
import classNames from "classnames";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
      addEventListeners();
      return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const cursorClasses = classNames("cursor", {
      "cursor--clicked": clicked,
      "cursor--hidden": hidden,
    });

    return (
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    );
  };

  return (
    <div className="app">
      <Cursor />
      <ParticlesBg color="#FDFEFE" type="cobweb" bg={true} num={50} />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Portfolio />

        <Contact />
      </div>
    </div>
  );
}

export default App;
