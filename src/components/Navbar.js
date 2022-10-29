import React, { useState } from "react";
import "./navbar.css";
import logo from "../images/umar-logo.png";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div>
        <nav className="main-nav nav-container">
          {/* 1st logo part  */}
          <div className="inside-nav-container">
            <div className="nav-logo-container" >
              <img className="nav-logo" src={logo} alt="logo" />

            </div>

            {/* 2nd menu part  */}
            <div className="menu-link">
              <ul>
                <li className="nav-item">
                  <NavLink className="nav-links" activeClassName="active" exact to="/">WORK</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-links" activeClassName="active" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-links" activeClassName="active" to="/resume">MY RESUME</NavLink>
                </li>

              </ul>
            </div>
          </div>

          {/* 3rd social media links */}
          <div className="social-media nav-icons">


            <a href="https://www.linkedin.com/in/umar-shaikh-96b7b31a5/"
            ><i className="fa-brands fa-linkedin fa-2xl"></i></a>


            <a href="https://www.instagram.com/shaikh_umar_001/"
            ><i className="fa-brands fa-instagram fa-2xl"></i>
            </a>


            <a href="https://github.com/Shaikh-Umar-Farooq/">
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>



            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu className="burgericon" />
              </a>
            </div>
          </div>
        </nav>
        <div
          className={
            showMediaIcons ? " mobile-link-off mobile-link" : " mobile-link-off"
          }>
          <ul>
            <li className="nav-item">
              <NavLink className="nav-links" activeClassName="active" exact to="/">WORK</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" activeClassName="active" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" activeClassName="active" to="/resume">MY RESUME</NavLink>
            </li>

          </ul>
        </div>
      </div>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
