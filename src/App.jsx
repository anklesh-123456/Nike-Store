import React from 'react';
import { Cart, Hero, Navbar, Stories } from './components';
import FlexContent from './components/FlexContent';
import Footer from './components/Footer';
import Sales from './components/Sales';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className=' flex flex-col gap-16'>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
      <Footer footerAPI={footerAPI}/>
    </main>
    </>
 
  )
};

export default App;