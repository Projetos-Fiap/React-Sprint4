import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaRecycle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from '../Button/Button';
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: #263243;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 0px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`
const NavbarLogo = styled(Link)`
  color: #17cf97;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
    }
`;

const NavbarIcon = styled(FaRecycle)`
  margin-right: 0.5rem;
  color: #17cf97;
`;

const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
  &.active {
    transform: translateY(0);
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    right: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    &.active {
    background: #263243;
    right: 0;
    opacity: 0.8;
    transition: all 0.6s ease;
    z-index: 1;
    }
  }
`;

const NavItem = styled.li`
  height: 90px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #17cf97;
  }

  @media screen and (max-width: 960px) {
    position: relative;
    &:hover {
    border-bottom: 2px solid transparent;
    }
  }
`;

const NavLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #17cf97;
    transition: all 0.3s ease;
  }
  &.active {
    color: #17cf97;
  }

`;

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <NavbarContainer>
          <NavbarContent>

            <NavbarLogo to="/" onClick={closeMobileMenu}>
              <NavbarIcon />
              TheGreenProject
            </NavbarLogo>

            <MenuIcon onClick={handleClick}>
              {click ? <FaTimes color="white" /> : <FaBars color="white" />}
            </MenuIcon>

            <NavMenu className={click ? "nav-menu active" : "nav-menu"}>
              
              <NavItem>
                <NavLinks
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/mapa"
                  onClick={closeMobileMenu}
                >
                  Mapa
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/aprenda"
                  onClick={closeMobileMenu}
                >
                  Aprenda
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/beneficios"
                  onClick={closeMobileMenu}
                >
                  Benefícios
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/sobre"
                  onClick={closeMobileMenu}
                >
                  Sobre
                </NavLinks>
              </NavItem>

              
              <NavItem>
                <NavLinks
                  to="/contato"
                  onClick={closeMobileMenu}
                >
                  Contato
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/sign-in"
                  onClick={closeMobileMenu}
                >
                  <Button $primary>Login</Button>
                </NavLinks>
              </NavItem>
              
            </NavMenu>  
          </NavbarContent>
        </NavbarContainer>
    </>
  );
}

export default Navbar;