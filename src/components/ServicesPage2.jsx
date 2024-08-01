import React from "react";
import searchIcon from "../assets/akshtech images/searchIcon.svg";
import systems from "../assets/akshtech images/system.svg";
import wireframes from "../assets/akshtech images/wireframe.svg";
import prototype from "../assets/akshtech images/prototype.svg";

const ServicesPage2 = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1209px] mt-8 px-4">
        <p className="text-2xl font-semibold text-center">
          Our designers adhere to Established Design Principles and Philosophies
          to <br className="hidden sm:inline" />
          <span className="block sm:inline">
            Create Interfaces tailored to the Attitudes of our Target Users.
          </span>
        </p>
      </div>

      <div className="w-full max-w-[1280px] mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        <div className="rounded-2xl bg-[#000116] text-white p-6">
          <img className="w-10 h-10" src={searchIcon} alt="searchIcon" />
          <h1 className="text-lg font-medium mt-2">DESIGN DISCOVERY</h1>
          <p className="font-thin mt-3">
            We discuss, define & evaluate the key points necessary in the
            discovery.
          </p>
        </div>
        <div className="rounded-2xl bg-[#000116] text-white p-6">
          <img className="w-10 h-10" src={systems} alt="systems" />
          <h1 className="text-lg font-medium mt-2">SYSTEMS</h1>
          <p className="font-thin mt-3">
            We build a complete design system to define the UI elements that
            will be used.
          </p>
        </div>
        <div className="rounded-2xl bg-[#000116] text-white p-6">
          <img className="w-10 h-10" src={wireframes} alt="wireframes" />
          <h1 className="text-lg font-medium mt-2">WIREFRAMES</h1>
          <p className="font-thin mt-3">
            Making Mid, and High fidelity wireframes helps to visualize flow
            before development.
          </p>
        </div>
        <div className="rounded-2xl bg-[#000116] text-white p-6">
          <img className="w-10 h-10" src={prototype} alt="prototype" />
          <h1 className="text-lg font-medium mt-2">PROTOTYPES</h1>
          <p className="font-thin mt-3">
            Working prototypes with micro-interactions help in the better
            understanding of the product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage2;
