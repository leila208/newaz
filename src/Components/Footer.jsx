import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div className="topfoot">
            <div className="topdiv">
              <div className="one">
                <div className="topfooticon">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div className="topfoottext">
                  <h3>İş zamanı</h3>
                  <p>Sürətli və keyfiyyətli</p>
                </div>
              </div>
              <div className="one">
                <div className="topfooticon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="topfoottext">
                  <h3>Məlumat Üçün</h3>
                  <p>+994513126599</p>
                </div>
              </div>
              <div className="one">
                <div className="topfooticon">
                  <i className="fa-solid fa-headphones"></i>
                </div>
                <div className="topfoottext">
                  <h3>7/24 </h3>
                  <p>Texniki Dəstək</p>
                </div>
              </div>
              <div className="one">
                <div className="topfooticon">
                  <i className="fa-solid fa-right-left"></i>
                </div>
                <div className="topfoottext">
                  <h3>Mübadilələr</h3>
                  <p>Asan mübadilə</p>
                </div>
              </div>
            </div>
          </div>
          <div className="otherfoot">
            <div className="bottomfoot">
              <div className="bottomdiv">
                <div className="bottomtwo">
                  <NavLink to="/">                  <h1>
                    <span>AZGP</span>
                  </h1></NavLink>


                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="bottomtext">
                      <p>Azure business center</p>
                    </div>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="bottomtext">
                      <p>+994513126599</p>
                    </div>
                  </div>
                  <div className="two">
                    <div className="bottomicon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="bottomtext">
                      <p>azgpenenginee@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="bottomtwo">
                  <h1>
                    <span>Məlumat</span>
                  </h1>
                  <ul>
                    <li>
                      <NavLink to="/aboutus">Haqqımızda</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq">Tez-tez verilən suallar</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog">Bloq</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="bottomtwo">
                  <h1>
                    <span>Kömək</span>
                  </h1>
                  <ul>
                    <li>
                      <NavLink to="/contact">Əlaqə</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq">Suallarınız</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutus">Komandamız</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;


