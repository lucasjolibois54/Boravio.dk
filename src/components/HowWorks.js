import React from 'react';
import styled from "styled-components";


//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function HowWorks() {

    return (
        <div className="pb-36">
            <div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-semibold font-sans text-dark-text py-0 text-center">
                    Hvordan det
                    <span className="text-orange-text"> virker!</span>
                </h2></div>
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
          bg-transparent
        "
            >
                <div className="w-full  pt-10 pb-20 pr-0 text-center w-100% lg:pr-10 lg:w-3/12">
                    <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-dark-text md:text-5xl"><span className="bg-orange-text p-3 pl-5 pr-5 rounded-full">01</span></h2>
                    < h2 className=" text-2xl pb-1 font-semibold text-dark-text  md:text-3xl">Vælg et produkt</h2>
                    <h2 className="  text-sm text-dark-text text-center">
                        Når du færdig med at leje dit produkt, vil en medarbejder komme forbi dit hjem og afhente det, på det tidspunkt du valgte. Du er derefter klar igen til at udleje flere ting
                    </h2>

                </div>
                <div className="w-full  pt-10 pb-20 pr-0 text-center w-100% lg:pl-10 lg:w-3/12">
                    <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-dark-text md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">02</span></h2>
                    < h2 className=" text-2xl pb-1 font-semibold text-dark-text  md:text-3xl">Book produktet</h2>
                    <h2 className="  text-sm text-dark-text text-center">
                        Når du færdig med at leje dit produkt, vil en medarbejder komme forbi dit hjem og afhente det, på det tidspunkt du valgte. Du er derefter klar igen til at udleje flere ting
                    </h2>
                </div>
            </div>

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
          bg-transparent
        "
            >
                <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 lg:w-3/12">
                    <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-dark-text md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">03</span></h2>
                    < h2 className=" text-2xl pb-1 font-semibold text-dark-text  md:text-3xl">Returner produkt</h2>
                    <h2 className="  text-sm text-dark-text text-center">
                        Når du færdig med at leje dit produkt, vil en medarbejder komme forbi dit hjem og afhente det, på det tidspunkt du valgte. Du er derefter klar igen til at udleje flere ting
                    </h2>

                </div>
                <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pl-10 lg:w-3/12">
                    <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-dark-text md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">04</span></h2>
                    < h2 className=" text-2xl pb-1 font-semibold text-dark-text  md:text-3xl">Vi servicerer produkt</h2>
                    <h2 className="  text-sm text-dark-text text-center">
                        Når du færdig med at leje dit produkt, vil en medarbejder komme forbi dit hjem og afhente det, på det tidspunkt du valgte. Du er derefter klar igen til at udleje flere ting
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default HowWorks
