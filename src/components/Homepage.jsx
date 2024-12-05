import React, { useEffect, useRef } from "react";
import Navbar from './Navbar';
import Hero from './Hero/Hero';
import Review from './Review';
import Footer from './Footer';
import {useAnimation, useInView } from "framer-motion";
// import './Review.css'
import Services_offering from "./Services/Services_offering";
import Servies_scope from "./Services/Servies_scope";

function Homepage() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControlls = useAnimation();

    useEffect(() => {
      document.title="SkyLine Digital | Home";
    },[]);
    /* automatically scroll to the top of the page */
    useEffect(() => {
        if (isInView) {
          mainControlls.start("visible");
        }
      }, [isInView, mainControlls]);
      /* automatically scroll to the top of the page */
    useEffect(() => {
          window.scrollTo(0, 0);
        }, []);


  return (
    <>
      <Navbar />
      <Hero/>
      <Services_offering/>
      <Servies_scope/>
      {/* <Review /> */}
      <Footer />
    </>
    
  )
}
export default Homepage;
