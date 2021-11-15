import React from 'react';
import styled from "styled-components";
import Kirke from "../images/heroImage.png";
//MUI-components
import Button from '@mui/material/Button';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';

function AboutUs() {
    return (
        <div className=" p-0 flex flex-col w-full xl:flex-row md:p-16 mb-4">
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
          <h3 className="text-lg pt-10 text-dark-text mb-3 font-bold">
              <span style={ShadowStyle} className="bg-white shadow-xl p-2 rounded-full mb-3 pl-4 pr-7">
          Stop med at spilde penge!</span>
          </h3>
          <h2   className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
          Hvorfor købe  <br />
            <span className="text-yellow-text"> når du kan leje?</span>
          </h2>
          <p  className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
          Med Boravio har du et bredt sortiment af produkter som du kan leje for en fast pris. Et abonnement hos os giver dig adgang til alt fra brætspil, boremaskiner, rulleskøjter og meget mere
          </p>
          <div className="flex justify-center text-center items-center py-0 xl:justify-start">
          {/*<Button style={buttonStyle} variant="outlined">Primary</Button>*/}
          <Button style={buttonStyle} className="pl-7 pr-7 pt-2 pb-2 rounded-full font-bold" variant="contained"><span className="paddingButton font-bold">Mere om os</span></Button>
          </div>
        </div>
        <div  className="w-full xl:w-full">
          <img src={Kirke} className="pt-16" alt="church"/>
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
