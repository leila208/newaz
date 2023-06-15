import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../images/logoo.png";
function Header(props) {
  // const Header = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 350
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  const [istoggled, setIstoggled] = useState(false);
  return (
    <>
      <header className="header-section d-none d-xl-block">
        {/* <Modal /> */}
        {/* <div className="mobile-menu"> */}

        <div className={istoggled ? "mobile-menu mobile-menu-open" : ""}>
          <ul className="mobile-menu">
            <button
              id="finish"
              onClick={() => {
                setIstoggled(!istoggled);
              }}
            >
              &times;
            </button>
            {/* <li>
              <NavLink to="category/make-up">Makyaj</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="category/skin-care">Cild Baxımı</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="category/hair-care">Saç</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="category/tools">Fırça və aksesuarlar</NavLink>
            </li> */}
            <li>
              <NavLink to="/">Ana səhifə</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">Haqqımızda</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Bloq</NavLink>
            </li>
          </ul>
        </div>

        {/* </div> */}
        {/* <div className="container"> */}
        <div className="container">
          {/* <div className="header"> */}
          <div className="navbar">
            <div className="logo">
              <ul className="all">
                <li>
                  {" "}
                  <NavLink to="/"> AZGP</NavLink>{" "}
                </li>
              </ul>
            </div>
            <ul className="all">
              <li>
                <NavLink to="/">Ana səhifə</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Əlaqə</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">Haqqımızda</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Bloq</NavLink>
              </li>
            </ul>
            <NavLink to="/contact">
              <button className="contactBtn">Əlaqə</button>
            </NavLink>
            <i
              className="fa-regular fa-bars mobile-toggle"
              onClick={() => {
                setIstoggled(!istoggled);
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
let t = (a) => a;
export default connect(t)(Header);
