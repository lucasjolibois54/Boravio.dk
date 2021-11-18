import React from 'react';
//import styled from "styled-components";
import '../styles/nav.css';
//MUI-components
//import Button from '@mui/material/Button';

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


