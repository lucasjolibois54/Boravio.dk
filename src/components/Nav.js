import React from 'react';
import styled from "styled-components";
import AboutImg from "../images/AboutImg.png";
//MUI-components
import Button from '@mui/material/Button';

function Nav() {
    const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
    return (

        <div className="mb-0">

<nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-3
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
       <div>
          <a className="font-black" href="#">
           <h2 className="text-dark-text font-black text-xl">Boravio</h2>
          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              py-0
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
              
          >
            <li>
              <a className="md:p-4 py-4 block hover:text-orange-text" href="#about"
                >Om os</a
              >
            </li>
            <li>
              <a className="md:p-4 py-4 block hover:text-orange-text" href="#bestilling"
                >Bestil</a
              >
            </li>
            <li>
              <a className="md:p-4 py-4 block hover:text-orange-text" href="#process"
                >Hvordan det virker</a
              >
            </li>
            <li>
              <a className="md:p-4 py-4 block hover:text-orange-text" href="#nyhed"
                >Nyhedsbreve</a
              >
            </li>
            <li>
              <a
                className="md:p-4 py-4 block hover:text-orange-text "
                href="#"
                >Kontakt</a
              >
            </li>
          </ul>
        </div>
    </nav>


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
