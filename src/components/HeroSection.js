import React from 'react';
import Kirke from "../images/heroimage_optimized.png";
//MUI-components

function HeroSection() {
    return (
        <div id="top" className=" p-0 flex flex-col w-full xl:flex-row md:p-16 mb-4">
            <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
                <h3 className="text-lg pt-10 text-gray-900 mb-3 font-bold">
                    <span style={ShadowStyle} className="bg-transparant shadow-xl p-2 rounded-md mb-3 pl-3 pr-7">
                        Stop med at spilde penge!</span>
                </h3>
                <h2 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans lg:mt-0 mt-4 text-dark-text py-0">
                    Hvorfor købe  <br />
                    <span className="text-yellow-text"> når du kan leje?</span>
                </h2>
                <p className="text-base md:text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                    Med Boravio har du et bredt sortiment af produkter som du kan leje for en fast pris. Et abonnement hos os giver dig adgang til alt fra brætspil, boremaskiner, rulleskøjter, værktøj, træningsudstyr og meget mere.
                </p>
                <div className="flex justify-center text-center items-center py-0 xl:justify-start">
                    <a href="#about" >
                        <button href="#about" class="shadow-lg bg-orange-text hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:scale-110">
                            Mere om os
                        </button>
                    </a>
                    <a href="#process" >
                        <button href="#process" class="shadow-lg bg-button-gray hover:bg-gray-500 ml-3 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:scale-105">
                            Lær mere om processen
                        </button>
                    </a>

                    {/*<Button style={buttonStyle} variant="outlined">Primary</Button>*/}
                    {/* <Button href="#about" style={buttonStyle} className="pl-7 pr-7 pt-2 pb-2 rounded-full font-bold" variant="contained"><span className="paddingButton font-bold">Mere om os</span></Button>
          <Button href="#process" style={buttonStyle2} className="pl-7 ml-5 pr-7 pt-2 pb-2 font-bold  rounded-full " variant="contained"><span className="paddingButton font-bold">Lær mere om processen</span></Button> */}
                </div>
            </div>
            <div className="w-full xl:w-full">
                <img src={Kirke} className="pt-16" alt="church" />
            </div>
        </div>
    )
}

export default HeroSection





const ShadowStyle = {
    boxShadow: '0px 0px 104px rgba(0, 0, 0, 0.25);'
}

