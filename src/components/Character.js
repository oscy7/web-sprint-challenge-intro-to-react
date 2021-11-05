// Write your Character component here
import React from 'react';
import styled from 'styled-components';
//import App from '../App';
const StyledSW = styled.h3`
    color: green;
    text-align:center;
    font-size: 15px;
    border-color: grey;
    border-style:solid;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 7px;
    padding-bottom: 7px;
    font-family: 'Limelight', sans-serif;
    font-weight:bold; 
    
`
const Character = ({ name, height, mass, hair_color, birth_year, skin_color, films}) => {
    return(
        <div>
            <StyledSW>Hello my name is {name} I am {height} units tall and I weigh {mass} units. I was born in the year {birth_year} All races think my {hair_color} hair is stylish and I am unique because of my {skin_color}. I was featured in {films}. I promise not to invade Earth. </StyledSW>
        </div>
    )
}

export default Character;