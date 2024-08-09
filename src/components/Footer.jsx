/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import startupIndia from "../assets/akshtech images/startup.png";
import iso from "../assets/akshtech images/iso.png";
import pci from "../assets/akshtech images/pci.webp";
import aksh from "../assets/akshtech images/aksh (1).svg";
import copyright from "../assets/akshtech images/copyright.svg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Contact from "../Pages/ContactUs/Contact";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const defaultContactFormData = {
 
  email: "",
 
};


const Footer = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState(defaultContactFormData);
  const [loading, setLoading] = useState(false);

  // if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/subscribe-form", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          'Access-Control-Allow-Origin': "*", 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData(defaultContactFormData);
       
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message");
      console.error(error);
    } finally {
      setLoading(false);
      // onClose(); 
      // Display SweetAlert2 popup
        await Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your Email has been sent successfully.",
          confirmButtonText: "OK",
        });
      // Close the popup after submission
    }
  }
  return (
    <>
    <div className="mt-[-20px] ">
      <div className="flex flex-col overflow-hidden lg:mb-[-85px] bg-[#000116]  justify-between w-[full] lg:h-[550px] mt-5 p-10 lg:p-20 ml-0 lg:ml-0 rounded-t-[56px]">
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
            <form onSubmit={handleSubmit}>
              <input
                className="bg-[#18203A] h-[45.62px] p-2 rounded-md mb-2 lg:mb-0"
                type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email "
                  required
              />
              <button type="submit" className="w-full lg:w-[116.48px] ml-0 font-display text-lg  lg:ml-1 h-[45.62px] rounded-md bg-[#B7EFF6] p-2 text-black"  disabled={loading}>
              {loading ? "Sending..." : "Subscribe"}
              </button>
              </form>
            </div>
          </div>

          <div className="text-[#FFFFFF] mb-10 lg:mb-0">
            <h6 className="text-2xl font-display">Services</h6>
            <div className="mt-2 lg:py-[80]">
            <Link to="/ui"><p className="pt-2 text-xl font-light">UI/UX Design</p></Link>
            <Link to="/ap"><p className="pt-2 text-xl font-light">App Development</p></Link>
            <Link to="/web"><p className="pt-2 text-xl font-light">Web Development</p></Link>
            <Link to="/sw"><p className="pt-2 text-xl font-light">Software Development</p></Link>
            <Link to="/dt"><p className="pt-2 text-xl font-light">Digital Marketing</p></Link>
            </div>
          </div>

          <div className="text-[#FFFFFF] mb-10 lg:mb-0">
         <h6 className="text-2xl font-display">About Us</h6>
         <div className="mt-2 ">
         <HashLink to="/#testimonial" ><p className="text-xl font-light">Testimonials</p></HashLink>
            <HashLink to="/#team"><p className="pt-2 text-xl font-light">Our Team</p></HashLink>
          <p className="pt-2 text-xl font-light cursor-pointer"  onClick={openPopup}>Talk To Us</p>
            </div>
            <Contact isOpen={isPopupOpen} onClose={closePopup} />
          </div>

          <div className="text-[#FFFFFF]">
            <h6 className="text-2xl font-display">Contact Info</h6>
            
            <div className="font-thin">
              <p className="pt-2 text-xl font-light">
                T-3 & T-4, A-88, sector 4, Noida, Uttar Pradesh, 201301
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
