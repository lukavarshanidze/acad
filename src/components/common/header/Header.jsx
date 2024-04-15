import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header className="main_header_container">
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">მთავარი</Link>
            </li>
            <li>
              <Link to="/courses">ყველა კურსი</Link>
            </li>
            <li>
              <Link to="/about">შესახებ</Link>
            </li>
            {/* <li>
              <Link to="/team">გუნდი</Link>
            </li> */}
            {/* <li>
              <Link to="/pricing">ფასები</Link>
            </li> */}
            {/* <li>
              <Link to="/journal">ჟურნალი</Link>
            </li> */}
            <li>
              <Link to="/contact">კონტაქტი</Link>
            </li>
          </ul>

          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <div className="toggle_men">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <div className="toggle_men">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
