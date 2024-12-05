import React from 'react';
import './Services_offering.css';
import {FcBiohazard} from "react-icons/fc";
import { SlScreenSmartphone } from "react-icons/sl";
import { BsGeoAlt } from "react-icons/bs";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Services We are Offering</h2>
      <p className="services-description">
        We develop an individual integrated solution for your business and select a unique set of services for it, combining them with a single strategy and goal.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <div className="icon-circle " style={{ }}>
            <FcBiohazard style={{ fontSize: '4rem', filter: "brightness(0) invert(1)" }}/>
          </div>
          <h3>Web Development</h3>
          <p>
            SkyLine Digital specializes in innovative web development, creating responsive, user-friendly, and secure websites tailored to help businesses excel in the digital age with cutting-edge technology and design.
          </p>
        </div>
        <div className="service-card">
          <div className="icon-circle">
            <SlScreenSmartphone style={{ fontSize: '4rem' , filter: "brightness(0) invert(1)"}}/>
          </div>
          <h3>Mobile Development</h3>
          <p>
            SkyLine Digital excels in mobile development, crafting innovative, user-friendly, and high-performance apps tailored to meet business needs and deliver seamless experiences across Android and iOS platforms.
          </p>
        </div>
        <div className="service-card">
          <div className="icon-circle">
            <BsGeoAlt style={{ fontSize: '4rem' , filter: "brightness(0) invert(1)"}}/>
          </div>
          <h3>GIS Services</h3>
          <p>
            SkyLine Digital specializes in GIS development, delivering innovative, scalable, and user-friendly geospatial solutions to empower businesses with location-based insights and advanced mapping technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
