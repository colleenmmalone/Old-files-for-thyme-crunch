import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../buttons/Button";

// PLEASE READ
// elements in this navbar need to be conditionally rendered

/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const userName = sessionStorage.getItem("name");
  // const string = '  ';

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbarLogo">
            <img
              id="ourlogo"
              src={require("../images/thymecrunchlogowhite.jpg")}
              alt="logo"
            />
          </Link>
          {/* <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div> */}
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">this is navbar</li>
            <li className="nav-item">
              <Link to="/users" className="nav-links" onClick={closeMobileMenu}>
                All Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <div class="dropdown">
                <button class="dropbtn">Recipes</button>
                <div class="dropdown-content">
                  <a href="/recipes">Recipe</a>
                  <a href="/user-recipes">User Recipes</a>
                  <a href="add-recipes">Add Recipes</a>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link
                to="/shoppinglist"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Shopping List
              </Link>
            </li>
            <li className="nav-item">
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
          <Link to="/" className="navbarLogo" onClick={closeMobileMenu}></Link>
          </li>
          <li className="nav-item">
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
            Hi, {userName}
          </Link>
          </li>

          </ul>
        </div>
      </nav>
    </>
  );
}
