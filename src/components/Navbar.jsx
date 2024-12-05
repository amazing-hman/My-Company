import React, { useState } from "react";
import Icon from "../assets/images/favicon.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-poppins">
      <nav className="bg-opacity-90 backdrop-blur-xl fixed w-full z-20 top-0 left-0 px-6 py-4 shadow-2xl rounded-lg">
        {/* Desktop Navigation */}
        <div className="max-w-screen-xl flex items-center justify-between mx-auto text-black">
          <Link to="/" className="flex items-center">
            <img
              src={Icon}
              alt="Logo"
              className="hidden sm:block sm:w-[50px] sm:h-[50px] -mt-1"
            />
            <span className="ml-2 text-blue-600 font-semibold text-2xl tracking-wide">
              SkyLine Digital
            </span>
          </Link>
          <div className="flex items-center space-x-8">
            <ul className="sm:flex hidden space-x-8">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-link">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-link">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="nav-link contact_button">
                <Link to="/contact">Get Started</Link>
              </li>
            </ul>
            {/* Mobile Hamburger Button */}
            <button onClick={() => setOpen(!open)} className="sm:hidden">
              <GiHamburgerMenu size={30} className="mt-2 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${open ? "block" : "hidden"} sm:hidden`}>
          <ul className="pl-6 space-y-4">
            <li className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer pb-4 pt-6">
              <Link to="/">Home</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer pb-4">
              <Link to="/about">About</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer pb-4">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer pb-4">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer pb-4">
              <Link to="/contact" className="contact_button">Get Started</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
