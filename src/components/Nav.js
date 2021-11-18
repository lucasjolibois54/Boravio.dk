import React from 'react';
import styled from "styled-components";
import AboutImg from "../images/AboutImg.png";
import '../styles/nav.css';
//MUI-components
import Button from '@mui/material/Button';
import logoIcon from '../images/Logoofficial-1 (1).svg'
import logo2icon from "../images/257662472_853310442017486_4690525764658721546_n.png"

function Nav() {

    return (
       <div className="thebody pb-16 lg:pb-7">
<header class="header">
  <a  href="#top" class="logo a">Boravio</a>
  {/* <a  href="#top" class="logo a w-36"><img src={logo2icon} className="pt-2" alt="church"/></a> */}
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a className="a" href="#about">Om os</a></li>
    <li><a  className="a" href="#bestilling">Bestil</a></li>
    <li><a  className="a" href="#process">Sådan virker det</a></li>
    <li><a  className="a" href="#nyhed">Tilmeld</a></li>
  </ul>
</header>
</div>
    )
}

export default Nav



const buttonStyle = {
    backgroundColor: "#F3A65D",
    color: 'black',
    height: '48px;',
    top: '0px;',
    border: '1px solid red;',
    fontSize: '16px;',
    padding: '0px 24px 0px;',
}

const ShadowStyle = {
        boxShadow: '0px 0px 104px rgba(0, 0, 0, 0.25);'   
}
