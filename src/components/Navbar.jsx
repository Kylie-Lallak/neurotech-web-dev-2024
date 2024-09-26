import React from "react";
import { useState } from "react";
import "../assets/styles/NavBar.css";
import ThreeBars from "../assets/images/menu.png";
import Logo from "../assets/images/LogoBLW.png";

export default function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div>
      <div className="max-w-8xl mx-auto">
        <div className="flex mx-auto justify-between w-11/12">
          <div className="flex items-center my-2">
            {/* logo */}
            <a
              href="/"
              id="logo"
              className="flex gap-1 font-bold text-lg items-center"
            >
              <img src={Logo} alt="Neurotech logo" height="40" width="40" />
              <span>Neurotech</span>
            </a>
          </div>
          {/* pages */}
          <div id="bluecolor" className="items-center hidden lg:flex gap-x-20">
            <a href="../" className="">
              Home
            </a>
            <a href="../about">About</a>
            <a href="../joinus">Join Us</a>
          </div>
          {/* mobile */}
          <div className="flex gap-4">
            <div className="lg:hidden flex items-center">
              <button onClick={() => setSideMenu(!sideMenu)}>
                <img src={ThreeBars} alt="nav button" height="30" width="30" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        id="bluecolor"
        className={`fixed z-40 w-full opacity-95 bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-16 origin-top duration-700 ${
          !sideMenu ? "h-0" : "h-50"
        }`}
      >
        <div className="px-8 my-3">
          <div className="flex flex-col gap-8 font-bold tracking-wider items-center text-lg">
            <a href="../" className="">
              Home
            </a>
            <a href="../about">About</a>
            <a href="../joinus">Join Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
