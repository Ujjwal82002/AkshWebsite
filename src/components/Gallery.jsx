import Images1 from "../assets/akshtech images/AkshTeam.jpg";

import Images3 from "../assets/akshtech images/1.jpg";
import Images4 from "../assets/akshtech images/4.jpg";
import Images5 from "../assets/akshtech images/groupic.jpg";
import Intern from '../assets/akshtech images/Intern.png'

const Gallery = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="mt-0 mb-2 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Gallery
        </h1>
      </div>
      <div className="p-4">
        {/* First Row */}
        <div className="flex flex-col gap-10 m-2 mb-4 sm:flex-row sm:m-16">
          <div className="w-full sm:w-2/3 h-[400px] sm:h-[500px] mr-0 sm:mr-2 rounded-3xl  overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={Images1}
              alt="Gallery 1"
              className="w-full h-full transition-opacity duration-300 ease-in-out rounded-3xl hover:opacity-80"
            />
          </div>
          <div className="w-full sm:w-1/3 h-[400px] sm:h-[500px] mt-2 sm:mt-0  overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={Intern}
              alt="Gallery 2"
              className="w-full h-full transition-opacity duration-300 ease-in-out rounded-3xl hover:opacity-80"
            />
          </div>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-2 m-4 gap-7 sm:grid-cols-3 sm:m-16">
          <div className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={Images3}
              alt="Gallery 3"
              className="w-full h-full transition-opacity duration-300 ease-in-out rounded-3xl hover:opacity-80"
            />
          </div>
          <div className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={Images4}
              alt="Gallery 4"
              className="w-full h-full transition-opacity duration-300 ease-in-out rounded-3xl hover:opacity-80"
            />
          </div>
          <div className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={Images5}
              alt="Gallery 5"
              className="w-full h-full transition-opacity duration-300 ease-in-out rounded-3xl hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
