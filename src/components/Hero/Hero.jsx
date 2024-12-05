import React from 'react';
import './Hero.css';
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { RiNftLine } from "react-icons/ri";
import { SlSocialDropbox } from "react-icons/sl";
import { LiaGoogleWallet } from "react-icons/lia";

function Hero() {
  return (
    <div className="app">

      <div className="hero">
        <h1 className='text-contrast'>Welcome to SkyLine Digital</h1>
        <h2 className='text-contrast'>IT Company Services</h2>
      </div>

      <div className="hero-service-card-container">
        <div className="card" style={{marginTop : '13rem'}}>
          <div className="icon">
            <MdOutlineRealEstateAgent style={{ fontSize: '3rem'}}/>
          </div>
          <h2>Real Estate Platform</h2>
          <p>
            Transforming real estate with innovative, efficient, and tech-driven solutions.
          </p>
          <a href="#">LEARN MORE</a>
        </div>
        <div className="card">
          <div className="icon">
            <RiNftLine style={{ fontSize: '3rem' }}/>
          </div>
          <h2>NFT Marketplaces</h2>
          <p>
            SkyLine Digital: Elevating NFT marketplaces with innovation and seamless user experiences.
          </p>
          <a href="#">LEARN MORE</a>
        </div>
        <div className="card" style={{marginTop : '13rem'}}>
          <div className="icon">
            <SlSocialDropbox style={{ fontSize: '3rem'}}/>
          </div>
          <h2>Social Networks</h2>
          <p>
            SkyLine Digital: Innovating social network platforms with innovative and user-driven platforms.
          </p>
          <a href="#">LEARN MORE</a>
        </div>
        <div className="card">
          <div className="icon">
            <LiaGoogleWallet style={{ fontSize: '3rem'}}/>
          </div>
          <h2>Financial Technology</h2>
          <p>
            SkyLine Digital: Innovating financial technology with secure, efficient, and user-friendly solutions.
          </p>
          <a href="#">LEARN MORE</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
