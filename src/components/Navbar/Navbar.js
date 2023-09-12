import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { FaRecycle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

import { Button } from '../Button/Button';

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  window.addEventListener('resize', showButton);


  return (
    <>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaRecycle className="navbar-icon" />
              ReciclaSP
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes color="white" /> : <FaBars color="white" />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/mapa-dos-ecopontos"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Pontos de coleta
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/aprenda-mais"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Aprenda mais
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/sobre-nos"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Sobre
                </NavLink>
              </li>

              
              <li className="nav-item">
                <NavLink
                  to="/contato"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contato
                </NavLink>
              </li>

              <li className="nav-button">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <Button $primary>Login</Button>
                </NavLink>
              </li>
              
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;


