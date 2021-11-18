import React from 'react';
import styled from "styled-components";
import AboutImg from "../images/AboutImg.png";
//MUI-components
import Button from '@mui/material/Button';

function AboutUs() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div id="about" className="mb-28 p-0 flex flex-col w-full xl:flex-row md:p-16 md:mb-18">
                    <div  className="w-full xl:w-full">
          <img src={AboutImg} className="pt-6" alt="church"/>
        </div>
        <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
        
          <h2   className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
          Hør mere om  <br />
            <span className="text-orange-text"> hvem vi er!</span>
          </h2>
          <p  className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
          Ideen bag Boravio kom fra et behov om at stoppe spild, samt reducering af køb af engangsbrug. Mange folk kender det at købe ting der kun bruges få gange om året, som bare sidder og samler støv i kælderen. Ting som værktøjer, kufferter, og andre sæson genstande. Det virker derfor som en oplagte ide at man bare låner de ting, som man kun bruger få gange, det kan desværre blev meget dyrt i længden.
          </p>
          <div className="flex justify-center text-center items-center py-0 xl:justify-start">
          {/*<Button style={buttonStyle} variant="outlined">Primary</Button>*/}
          {/* <Button style={buttonStyle} className="pl-7 pr-7 pt-2 pb-2 rounded-full font-bold" variant="contained"><span className="paddingButton font-bold">Mere om os</span></Button> */}
          {/* <a href="#about" >
                        <button href="#about" class="shadow-lg bg-orange-text hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:scale-110">
                            Mere om os
                        </button>
                    </a> */}

                    <>
      <button
        className="bg-orange-text hover:bg-yellow-600 text-white py-2 px-4  font-bold  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 transform hover:scale-110"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Mere om os
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-dark-text">
                    Hvem vi er
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span  style={buttonStyle5} className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                     <a className="a"> × </a>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed text-dark-text text-left">
                  Ideen bag Boravio kom fra et behov om at stoppe spild, samt reducering af køb af engangsbrug. Mange folk kender det at købe ting der kun bruges få gange om året, som bare sidder og samler støv i kælderen. Ting som værktøjer, kufferter, og andre sæson genstande. Det virker derfor som en oplagte ide at man bare låner de ting, som man kun bruger få gange, det kan desværre blev meget dyrt i længden, hvis man udlejer mange ting af gangen. Det er så her hvor Boravio kommer ind. Hos kan du udleje det meste for en lav månedlige pris. Vi har alt til fest, rejse, DIY, underholdning, events, udendørs, sport, og meget mere.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
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
  //  border: '1px solid;',
    fontSize: '16px;',
    padding: '0px 24px 0px;',
}

const ShadowStyle = {
        boxShadow: '0px 0px 104px rgba(0, 0, 0, 0.25);'   
}


const buttonStyle5 = {
    color: 'black;',
}
