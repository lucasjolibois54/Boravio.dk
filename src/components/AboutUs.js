import React from 'react';
import styled from "styled-components";
import AboutImg from "../images/AboutImg.png";
//MUI-components
import Button from '@mui/material/Button';

function AboutUs() {
    return (
        <div className=" p-0 flex flex-col w-full xl:flex-row md:p-16 mb-4">
                    <div  className="w-full xl:w-full">
          <img src={AboutImg} className="pt-6" alt="church"/>
        </div>
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
        
          <h2   className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
          Hør mere om  <br />
            <span className="text-orange-text"> hvem vi er!</span>
          </h2>
          <p  className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
          Ideen bag Boravio kom fra et behov om at stoppe spild, samt reducering af køb af engangsbrug. Mange folk kender det at købe ting der kun bruges få gange om året, som bare sidder og samler støv i kælderen. Ting som værktøjer, kufferter, og andre sæson genstande. Det virker derfor som en oplagte ide at man bare låner de ting, som man kun bruger få gange, det kan desværre blev meget dyrt i e.
          </p>
          <div className="flex justify-center text-center items-center py-0 xl:justify-start">
          {/*<Button style={buttonStyle} variant="outlined">Primary</Button>*/}
          <Button style={buttonStyle} className="pl-7 pr-7 pt-2 pb-2 rounded-full font-bold" variant="contained"><span className="paddingButton font-bold">Mere om os</span></Button>
          </div>
        </div>
      </div>
    )
}

export default AboutUs



const buttonStyle = {
    backgroundColor: "#F3A65D",
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
