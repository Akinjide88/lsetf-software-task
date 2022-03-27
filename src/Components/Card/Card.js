import React from 'react';
import styled from "styled-components";
import personal from "../Images/Emma.jpg"

function Card() {
  return (
    <Cardholder>
      <Content>
        <Singlecard>
          <Cardhold>
            <Emma src={personal} alt="Emma" className='pix'/>
            <Name>Ayanremi Emmanuel</Name>
            <Position>Back-end Developer</Position>
            <Words>I love the backend adventure and I can explore the front-end.</Words>
            <View>View Profile</View>
          </Cardhold>
        </Singlecard>
      </Content>
    </Cardholder>
  )
}

export default Card

const Cardholder = styled.div`
width: 100%;
height: 100vh;
background-color: navy;
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
border-radius: 7px;
box-shadow: 0 0 20px 2px gray;
flex-wrap: wrap;

@media screen and (max-width: 750px){
  width: 320px;
}
`
const Emma = styled.img`
width: 100px;
height: 100px;
border-radius: 50px;
`
const Name = styled.h1`
font-size: 28px;
@media screen and (max-width: 750px){
  font-size: 25px;
}
`
const Words = styled.p`
width: 300px;
margin-top: 15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Position = styled.h2`
`

const View = styled.button`
width: 100px;
height: 50px;
background-color: navy;
border-radius: 20px;
border: none;
color: white;
margin-top: 20px;
font-weight: 500px;
cursor: pointer;

&:hover{
  background-color: white;
  color: blue;
  border: 1px solid navy;
}
`
const Content = styled.div`
width: 80%;
height: 500px;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
`

const Cardhold = styled.div`
background-color: yellow;
/* width: 350px; */
height: 350px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

@media screen and (max-width: 750px){
  width : 300px;
}
`