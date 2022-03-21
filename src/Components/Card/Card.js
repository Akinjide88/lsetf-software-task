import React from 'react';
import styled from "styled-components";
import personal from "../Images/Emma.jpg"

function Card() {
  return (
    <Cardholder>
      <Singlecard>
        {/* <img src='personal' className='personalpix'/> */}
        <h1>Ayanremi Emmanuel</h1>
        <h1>Back-end Developer</h1>
        <p>i love the backend adventure and i can explore the front -end</p>
        <Share>View Profile</Share>
      </Singlecard>
    </Cardholder>
  )
}

export default Card

const Cardholder = styled.div`
width: 100%;
height: 100vh;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
`

const Singlecard = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 400px;
background-color: white;
justify-content: center;
align-items: center;
border-radius: 5px;
/* margin: 20px; */
`
const Share = styled.button`
width: 100px;
height: 50px;
background-color: blue;
border-radius: 5px;
border: none;
`

