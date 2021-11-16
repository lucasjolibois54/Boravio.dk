import React from 'react';
import styled from "styled-components";
import AboutImg from "../images/AboutImg.png";
import '../styles/nav.css';
//MUI-components
import Button from '@mui/material/Button';

function Nav() {

    return (
       <div>
<div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title text-dark-text">
      Boravio
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="//github.io/jo_geek" target="_blank">Om os</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Bestil</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Sådan virker det</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Tilmeld</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Kontakt</a>
  </div>
</div>

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
