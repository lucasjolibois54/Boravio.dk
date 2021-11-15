import React from 'react';
import styled from "styled-components";
import AboutImg from "../images/AboutImg.png";
//MUI-components
import Button from '@mui/material/Button';

function Footer() {
    return (

        <div class="mb-0">

<footer class="flex justify-center px-4 text-gray-100 bg-gray-800">
        <div class="container py-6">
            
            <hr class="h-px mt-6 bg-gray-700 border-none"/>

            <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                    <a href="#" class="text-xl font-bold">Boravio</a>
                </div>
                <div class="flex mt-4 md:m-0">
                    <div class="-mx-4">
                      <a href="#" class="px-4 text-sm">Top</a>
                      <a href="#" class="px-4 text-sm">Om os</a>
                      <a href="#" class="px-4 text-sm">Hvordan det virker</a>
                      <a href="#" class="px-4 text-sm">Nyhedsbreve</a>
                  	</div>
                </div>
            </div>
        </div>
    </footer>
</div>
    )
}

export default Footer



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