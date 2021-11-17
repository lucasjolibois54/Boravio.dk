import React from 'react';
import styled from "styled-components";
import AboutImg from "../images/AboutImg.png";
import '../styles/nav.css';
//MUI-components
import Button from '@mui/material/Button';

function Nav() {

    return (
       <div className="thebody">
<header class="header">
  <a href="" class="logo">Boravio</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">Om os</a></li>
    <li><a href="#about">Bestil</a></li>
    <li><a href="#careers">Sådan virker det</a></li>
    <li><a href="#contact">Tilmeld</a></li>
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
