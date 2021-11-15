import React from 'react';
import styled from "styled-components";


//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function HowWorks() {

    return (
        <div
        className="
        font-sans
          mb-0
          mt-20
          flex flex-col
          content-center
          justify-center
          justify-items-center
          text-off-white text-3xl
          lg:flex-row
          bg-dark-text
        "
      >
        <div  className="w-full bg-dark-text pt-10 pb-20 pr-10 text-center w-100% lg:w-6/12">
          <h2 className="pl-8 text-4xl font-black pb-10 pr-10  text-white md:text-5xl">01</h2>
          <h2 className=" text-xl text-center text-white">Spar penge</h2>
        </div>
        <div    className="w-full bg-dark-text pt-10 pb-20 pr-10 text-center w-100% lg:w-6/12">
          <h2 className="pl-8 text-4xl pb-10 font-black text-white  md:text-5xl">02</h2>
          <h2 className="pl-10  text-xl text-white text-center">
          Undgå spild
          </h2>
        </div>
      </div>
    )
}

export default HowWorks
