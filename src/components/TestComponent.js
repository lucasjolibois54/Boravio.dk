import React from 'react';
import styled from "styled-components";

//MUI-components
import Button from '@mui/material/Button';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';

function TestComponent() {
    return (
        <div>
            {/* Mui-Button */}
            <ButtonMenu style={buttonStyle} variant="outlined">Primary</ButtonMenu>
            {/* Mui-Icon + IconButton */}
            <IconButton>
                <MenuTwoToneIcon />
            </IconButton>
        </div>
    )
}

export default TestComponent

const ButtonMenu = styled(Button)`
    height: 48px;
    top: 0px;
    &&& {
        background-color: whitesmoke;
        margin-right: 20px;
        margin-left: 0px;
        font-family: Google Sans Display, "sans-serif";
        color: red;
        border: 1px solid red;
        font-size: 16px;
        padding: 0px 24px 0px;
        &:hover {
            background-color: black;
        }
    }
`;

const buttonStyle = {
    backgroundColor: "#FFF4DB",
}