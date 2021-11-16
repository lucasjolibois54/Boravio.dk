import React from 'react';
import styled from "styled-components";
import AboutImg from "../images/AboutImg.png";
import ImgBestil from "../images/ImgBestil.png";
//MUI-components
import Button from '@mui/material/Button';
import PeopleOne from "../images/PeopleOne.png";
import PeopleTwo from "../images/PeopleTwo.png";

function Nyhedsbreve() {
    return (
        <div id="nyhed" style={CardShadowStyle} className="bg-blue-text  md:ml-28 md:mr-28 rounded-xl mb-10 md:mb-20 lg:flex-row  flex flex-col
        content-center
        justify-center
        justify-items-center">
           
      <div className="w-full  pt-0 pb-10 pl-10 text-center w-100% lg:w-3/12">
                   
                    <img src={PeopleOne} className="pt-16 w-6/12 hidden lg:block" alt="church"/>

                </div>
                <div className="w-full  pt-0 pb-10 pl-10 pr-10 text-center w-100% lg:w-6/12">
                    
                    <h2   className="text-4xl sm:text-3xl md:text-5xl 2xl:text-8xl font-semibold mt-10 text-center font-sans text-white py-0">
                    Tilmeld dig til vores  <br />
            <span className="text-orange-text"> nyhedsbreve</span>
          </h2>
          <p  className="text-lg text-dark-gray-text py-5 xl:pl-0 ">
          Hjælp os med at nå i mål! Hvis nok mennesker tilmelder sig, vil vi få muligheden for at lancere. En tilfældig tilmelder vil vinde 1000 kr.
          </p>
          <div class="bg-light-blue rounded-lg">
          <div class="flex flex-wrap justify-between md:flex-row">
            <input
              type="email"
              class="
                m-1
                p-2
                appearance-none
                text-gray-100 text-sm
                focus:outline-none
                border-none
                w-7/12
                xl:w-9/12
                bg-light-blue
              "
              placeholder="Enter your e-mail"
            />
            <button
              class="
                w-full
                m-1
                p-2
                pl-6
                pr-6
                text-sm
                bg-orange-text
                rounded-lg
                font-semibold
                uppercase
                lg:w-auto
                transition
                duration-500
                ease-in-out
                transform
                hover:scale-105
                hover:bg-regular-blue
              "
            >
              Tilmeld
            </button>
          </div>
        </div>
                </div>
                <div className="w-full  pt-0 pb-10 pl-10 text-center w-100% lg:w-3/12">
                <img src={PeopleTwo} className="float-right hidden lg:block mr-10 pt-16 w-6/12" alt="church"/>
                </div>
               
      </div>
    )
}

export default Nyhedsbreve



const buttonStyle = {
    backgroundColor: "#F3A65D",
    color: 'white',
    height: '48px;',
    top: '0px;',
    border: '1px solid red;',
    fontSize: '16px;',
    padding: '0px 24px 0px;',
}

const buttonStyle2 = {
    backgroundColor: "#8EA0B8",
    color: 'white',
    height: '48px;',
    top: '0px;',
    border: '1px solid red;',
    fontSize: '16px;',
    padding: '0px 24px 0px;',
}

const ShadowStyle = {
    boxShadow: '0px 0px 104px rgba(0, 0, 0, 0.25);'   
}

const CardShadowStyle = {
    boxShadow: '0px 28px 104px 10px rgba(0, 0, 0, 0.25);'
}
