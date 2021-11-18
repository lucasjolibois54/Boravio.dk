import React from 'react';
import styled from "styled-components";


//Det her eksempel bruger TailwindCSS

//Husk at importere '../styles/global.css'
//Herefter laver du en className attribute
//Til sidst definerer du TailwindCss værdierne
//Velbekommen <3<3

function HowWorks() {

    return (
        <div>
        <div id="process" className=" pb-10 lg:pb-36 xsm:pl-50 xsm:pr-20 pl-5 pr-5 md:pl-36 md:pr-36 lg:pl-10 lg:pr-10">
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
          md:flex-row
          bg-transparent
          
        "
            >
                <div className="w-full  pt-10 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-3/12 lg:mr-0 md:mr-10">
                    <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-dark-text md:text-5xl"><span className="bg-orange-text p-3 pl-5 pr-5 rounded-full">01</span></h2>
                    < h2 className=" text-2xl pb-1 font-semibold text-dark-text  md:text-3xl">Vælg et produkt</h2>
                    <h2 className="  text-sm text-dark-text text-center">
                    Du kan frit vælge det du ønsker at leje, det kan være alt fra brætspil til sportsudstyr. Du kan låne flere ting ad gangen, som afhænger af din månedspakke
                    </h2>

                </div>
                <div className="w-full  pt-10 pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-3/12 lg:ml-0 md:ml-10">
                    <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-dark-text md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">02</span></h2>
                    < h2 className=" text-2xl pb-1 font-semibold text-dark-text  md:text-3xl">Book produktet</h2>
                    <h2 className="  text-sm text-dark-text text-center">
                    Efter at du har valgt dit leje skal du booke det.  Lejet vil derefter blive sendt til din dør, som nogle gange kan være samme dag som du bestilte det
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
                md:flex-row
                bg-transparent
        "
            >
                <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-3/12 lg:mr-0 md:mr-10">
                    <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-dark-text md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">03</span></h2>
                    < h2 className=" text-2xl pb-1 font-semibold text-dark-text  md:text-3xl">Returner produkt</h2>
                    <h2 className="  text-sm text-dark-text text-center">
                    Når du færdig med at leje dit produkt, vil en medarbejder komme forbi dit hjem og afhente det, på det tidspunkt du valgte. Du er derefter klar igen til at udleje flere ting
                    </h2>

                </div>
                <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-3/12 lg:ml-0 md:ml-10">
                    <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-dark-text md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">04</span></h2>
                    < h2 className=" text-2xl pb-1 font-semibold text-dark-text  md:text-3xl">Vi servicerer produkt</h2>
                    <h2 className="  text-sm text-dark-text text-center">
                    Produkter der returneres til Boravio vil gennemgå en grundig screening inden de bliver sent til den næste udlejer, for at sikre at de er i top stand inden de bliver sent ud igen
                    </h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HowWorks
