import React, { useState } from "react";
import Topbar from "./components/Topbar/index";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio/index";
import Works from "./components/Works";
import Contact from "./components/Contact/index";
import "./App.scss";
import Menu from "./components/Menu/index";
import ParticlesBg from "particles-bg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
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
