import React from "react";
import "./styles.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            gerson.
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line 1"></span>
            <span className="line 2"></span>
            <span className="line 3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
