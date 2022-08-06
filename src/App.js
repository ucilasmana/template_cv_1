import React from "react";
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Services from './components/services/services';
//import Testimonials from './components/testimonials/testimonials';
//import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

const App=()=>{
    return (
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
       {/* <Portfolio/> <Testimonials/>*/}
        <Contact/>
        <Footer/>
        </>
    )
}
export default App;