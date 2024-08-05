import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import startupIndia from "../assets/akshtech images/startup.png";
import iso from "../assets/akshtech images/iso.png";
import pci from "../assets/akshtech images/pci.webp";
import aksh from "../assets/akshtech images/aksh (1).svg";
import copyright from "../assets/akshtech images/copyright.svg";



const Footer = () => {
  return (
    <>
    <div className="bg-[#00ffff] mt-[-20px]">
      <div className="flex flex-col overflow-hidden lg:mb-[-85px] bg-[#000116]  justify-between w-[98%] lg:h-[550px] mt-5 p-10 lg:p-20 ml-0 lg:ml-5 rounded-t-[56px]">
        <div className="flex flex-col justify-between overflow-hidden lg:flex-row">
          <div className="text-[#FFFFFF] mb-10 lg:mb-0">
            <div className="w-[337px] h-[29px]">
              <img src={aksh} alt="Aksh Technology" />
            </div>
            <p className="mt-6 text-xl font-display line-clamp-3">
              Aksh Technology is your Email newsletter
              <br />
              Webflow template we can build
              <br />
              anything your dream.
            </p>
            <br />
            <div className="w-full lg:w-[320.32px] h-[57.27px] mt-3 flex flex-col lg:flex-row">
              <input
                className="bg-[#18203A] h-[45.62px] p-2 rounded-md mb-2 lg:mb-0"
                type="text"
                placeholder="Enter your email"
              />
              <button className="w-full lg:w-[116.48px] ml-0 font-display text-lg  lg:ml-1 h-[45.62px] rounded-md bg-[#B7EFF6] p-2 text-black ">
                Subscribe
              </button>
            </div>
          </div>

          <div className="text-[#FFFFFF] mb-10 lg:mb-0">
            <h6 className="text-2xl font-display">Services</h6>
            <div className="mt-2 lg:py-[80]">
            <p className="pt-2 text-xl font-light">UI/UX Design</p>
            <p className="pt-2 text-xl font-light">App Development</p>
            <p className="pt-2 text-xl font-light">SEO</p>
            <p className="pt-2 text-xl font-light">Software Development</p>
            <p className="pt-2 text-xl font-light">Digital Marketing</p>
            </div>
          </div>

          <div className="text-[#FFFFFF] mb-10 lg:mb-0">
          <h6 className="text-2xl font-display">About Us</h6>
            <div className="mt-2 ">
            <p className="text-xl font-light">Testimonials</p>
            <p className="pt-2 text-xl font-light">Our Team</p>
            <p className="pt-2 text-xl font-light">Talk To Us</p>
            </div>
          </div>

          <div className="text-[#FFFFFF]">
            <h6 className="text-2xl font-display">Contact Info</h6>
            <div className="font-thin">
              <p className="pt-2 text-xl font-light">
                T-3 & T-4, A-88, sector 4, Noida, Uttar Pradesh, 202301
              </p>
              <p className="pt-2 text-xl font-light">9625510038</p>
              <p className="pt-2 text-xl font-light">help@akshtechnology.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-[#FFFFFF] w-full mt-5 p-5 lg:p-0">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-2xl font-display">Certified by-</p>
            <div className="flex mt-4">
              <img
                src={startupIndia}
                alt="startupIndia"
                className="h-10 w-28"
              />
              <img src={iso} alt="ISO" className="w-20 h-20 ml-3" />
              <img src={pci} alt="PCI" className="w-20 h-16 ml-3" />
            </div>
          </div>

          <div className="mt-5 text-white lg:mt-0">
            <p className="text-2xl font-display">Follow Us</p>
            <div className="flex gap-4 mt-2">
            <FaFacebook  className="w-10 h-10"/>
             <FaLinkedin  className="w-10 h-10"/>
            <FaInstagram  className="w-10 h-10"/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 text-white">
        <img src={copyright} alt="Copyright" />
      </div>
      </div>
    </>
  );
};

export default Footer;
