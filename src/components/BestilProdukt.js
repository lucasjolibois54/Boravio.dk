import React from 'react';
import styled from "styled-components";
import ImgBestil from "../images/ImgBestil.png";
//MUI-components
import Button from '@mui/material/Button';

function BestilProdukt() {
    return (
        <div id="bestilling" style={CardShadowStyle} className="bg-red-text  md:ml-28 md:mr-28 rounded-xl mb-20 lg:mb-44 ">
                    <div className=" p-0 flex flex-col w-full xl:flex-row md:p-0 mb-4">
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
          <h3 className="text-lg pt-10 text-orange-text mb-3 font-bold">
              <span style={ShadowStyle} className="bg-off-red-text shadow-xl p-2 rounded-md mb-3 pl-4 pr-7">
          Stop med at spilde penge!</span>
          </h3>
          <h2   className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold font-sans text-white py-0">
          Bestil dit produkt; <br />
            <span className="text-orange-text"> returner det efter!</span>
          </h2>
          <p  className="text-xl px-5 text-gray-text py-5 md:px-24 xl:pl-0 xl:pr-20">
          Bestil dit produkt online og retuner det når du er færdig med at bruge det. Det kan næsten ikke være simplere. Vi giver dig muligheden for at spare penge på produkter du kan skal bruge få gange, ved at give dig muligheden for at leje dem for er lav pris. 
          </p>
          <div className="flex justify-center text-center items-center py-0 xl:justify-start mb-2">
          {/*<Button style={buttonStyle} variant="outlined">Primary</Button>*/}
          <Button href="#footer" style={buttonStyle} className="pl-7 pr-7 pt-2 pb-2 font-bold" variant="contained"><span className="paddingButton font-bold">Tilmeld dig!</span></Button>
          <Button href="#process" style={buttonStyle2} className="pl-7 ml-3 pr-7 pt-2 pb-2 font-bold" variant="contained"><span className="paddingButton font-bold">Lær mere om processen</span></Button>
          </div>
        </div>
        <div  className="pb-0 w-full xl:w-6/12">
          <img src={ImgBestil} className="pt-20 pb-0" alt="first purchase"/>
        </div>
      </div>
      </div>
    )
}

export default BestilProdukt



const buttonStyle = {
    backgroundColor: "#F3A65D",
    color: 'white',
    height: '48px;',
    top: '0px;',
   // border: '1px solid red;',
    fontSize: '16px;',
    padding: '0px 24px 0px;',
}

const buttonStyle2 = {
    backgroundColor: "#9B757A",
    color: 'white',
    height: '48px;',
    top: '0px;',
    //border: '1px solid red;',
    fontSize: '16px;',
    padding: '0px 24px 0px;',
    marginLeft: '10px',
}

const ShadowStyle = {
    boxShadow: '0px 0px 104px rgba(0, 0, 0, 0.25);'   
}

const CardShadowStyle = {
    boxShadow: '0px 28px 104px 10px rgba(0, 0, 0, 0.25);'
}
