import React from 'react';
import Card from './Components/Card/Card.js';
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import GlobalStyle from "./GlobalStyle.js"
import Map from './Components/Card/Map.js';

function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Card />
    <Map />
    <Footer />
    </>
  )
}

export default App

