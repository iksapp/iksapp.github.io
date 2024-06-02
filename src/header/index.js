import React, { useState } from "react";
import "./style.css";
import { BsXSquareFill, BsSlashSquareFill  } from "react-icons/bs";

import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header"  >
        <div className="d-flex align-items-center justify-content-between" > 
          <Link  className="navbar-brand nav_ac" to="/" style={{fontSize:30, paddingLeft:20}}>
            {logotext}
          </Link>
          <div className="d-flex align-items-center" style={{paddingTop:10, paddingRight:10}}>

            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle} >
              {!isActive ? <BsXSquareFill /> : <BsSlashSquareFill />}
            </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}` } >
          <div className="bg__menu h-100" >
            <div className="menu__wrapper" >
              <div className="menu__container p-3" >
                <ul className="the_menu" >
                  <li className="menu_item " >
                  <Link  onClick={handleToggle} to="/" className="my-3" >Home</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">Details</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/video" className="my-3">Video</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/poster" className="my-3">Poster</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/source" className="my-3">Source Code</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">@niexche</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
