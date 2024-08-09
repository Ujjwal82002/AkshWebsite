
import Logo from "../assets/akshtech images/logo3.webp";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Contact from "../Pages/ContactUs/Contact";

import { Link, useLocation } from "react-router-dom";



import { HashLink } from "react-router-hash-link";



export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);





  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const location = useLocation();

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleDropdown2nd = () => setOpen(!open);
  const closeDropdown2nd = () => setOpen(false);
  const toggleMenu = () => setToggle(!toggle);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

 


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <div
      className={`sticky top-0 z-50  bg-[#000116] w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#007bff]"
          : location.pathname === "/"
          ? "lg:bg-transparent"
          : "bg-[#000116]"
      }`}>
      <div className="flex items-center justify-between w-full px-6 py-5 mx-auto lg:py-10 md:px-16">
        <div className="w-[200px] ml:[-30px] lg:fixed lg:z-20 pt-2 lg:h-[65px]">

    <div className="bg-[#000116]">
      <div className="flex items-center justify-between px-6 py-6 mx-auto md:px-16">
        <div className="w-[200px] ml:[-30px] lg:fixed lg:z-50 pt-2 lg:h-[65px]">

          <img
            src={Logo}
            className="w-[90%] h-[130%] rounded-full lg:mt-[-13px]"
            alt="Logo"
          />
        </div>
        {!toggle ? (
          <AiOutlineMenu
            onClick={toggleMenu}
            className="text-2xl text-white cursor-pointer md:hidden"
          />
        ) : (
          <AiOutlineClose
            onClick={toggleMenu}
            className="text-2xl text-white cursor-pointer md:hidden"
          />
        )}
        </div>

        {/* Desktop Menu */}

        <ul className="hidden gap-9 fixed w-[900px] h-[55px] left-[201px] z-50 text-xl lg:mt-[-5px] mt-8 ml-96 p-3 text-[rgb(243,255,255)] pl-[3%] md:flex rounded-full">
          <HashLink to="/#home">
            <li className="cursor-pointer hover:text-[#73e845]">


       
              <div>Home</div>
            </li>
          </HashLink>
          <li

            className="relative cursor-pointer transition-all duration-700 hover:text-[#73e845]"


            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => closeDropdown(false)}
          >
            <div>Services</div>
            <div
              className={`absolute left-0 mt-0 mx-3 text-center rounded-lg bg-white border-gray-300 shadow-md ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >

              <Link
                to="/web"
                className="block px-10 py-2 text-base text-black hover:bg-gray-500"
              >
                WebDevelopment
              </Link>
              <Link
                to="/ap"
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >
                App Development
              </Link>
              <Link
                to="/sw"
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >
                Software Development
              </Link>
              <Link
                to="/gm"
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >
                Game Development
              </Link>
              <Link
                to="/dt"
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >
                Digital Marketing
              </Link>
              <Link
                to="/ui"
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >

                UI/UX Design
              </Link>
            </div>
          </li>

          <HashLink
            to="/#about"
            className="cursor-pointer hover:text-[#73e845]"
          >
            About
          </HashLink>

          <li

            className="relative cursor-pointer transition-all duration-700 hover:text-[#73e845]"

            onMouseEnter={() => toggleDropdown2nd(true)}
            onMouseLeave={() => closeDropdown2nd(false)}
          >
            <div>Policy</div>

            {/* Dropdown menu for Policy */}
            <div
              className={`absolute left-0 mt-1 rounded-lg text-center bg-white border-gray-300 shadow-md ${


                open ? "block" : "hidden"
              }`}
            >

              <Link
                to="/pr1"
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >
                Privacy Policy
              </Link>
              <Link
                to="/pr2"
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >

                Terms&Conditions

              </Link>
            </div>
          </li>

          <HashLink
            to="/#gallery"
            className="cursor-pointer hover:text-[#73e845]"
          >
            Gallery
          </HashLink>
          <HashLink
            to="/#team"
            className="cursor-pointer hover:text-[#73e845]"
          >
            Team
          </HashLink>
          <HashLink
            to="/#testimonial"
            className="cursor-pointer hover:text-[#73e845]"
          >
            Testimonials
          </HashLink>
          <li
            onClick={openPopup}
            className="cursor-pointer hover:text-[#73e845]"
          >


            Contact Us
          </li>
        </ul>
        <Contact isOpen={isPopupOpen} onClose={closePopup} />
        {/* Responsive Menu */}
        <ul
          className={`duration-300 text-xl md:hidden mt-[30px] z-30 w-full h-screen text-white fixed bg-black top-[92px] ${
            toggle ? "left-0" : "left-[-100%]"
          }`}
        >

          <HashLink
            to="/#home"
            onClick={toggleMenu}
            className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"

          >
            Home
          </HashLink>
          <li
            className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
            onClick={toggleMenu}
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => closeDropdown(false)}
          >
            <div>Services</div>
            <div
              className={`absolute left-0 mt-0 mx-3 text-center rounded-lg bg-white border-gray-300 shadow-md ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/web"
                onClick={toggleMenu}
                className="block px-10 py-2 text-black text-b hover:bg-gray-500"
              >
                Web Development
              </Link>
              <Link
                to="/ap"
                onClick={toggleMenu}
                className="block px-4 py-2 text-black text-b hover:bg-gray-500"
              >
                App Development
              </Link>
              <Link
                to="/sw"
                onClick={toggleMenu}
                className="block px-4 py-2 text-black text-b hover:bg-gray-500"
              >
                Software Development
              </Link>
              <Link
                to="/gm"
                onClick={toggleMenu}
                className="block px-4 py-2 text-black text-b hover:bg-gray-500"
              >
                Game Development
              </Link>
              <Link
                to="/dt"
                onClick={toggleMenu}
                className="block px-4 py-2 text-black text-b hover:bg-gray-500"
              >
                Digital Marketing
              </Link>
              <Link
                to="/ui"
                onClick={toggleMenu}
                className="block px-4 py-2 text-black text-b hover:bg-gray-500"
              >
                UI/UX Design
              </Link>
            </div>
          </li>
          <HashLink
            to="/#about"
            onClick={toggleMenu}
            className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
          >
            About
          </HashLink>
          <li
            className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
            onClick={toggleMenu}
            onMouseEnter={() => toggleDropdown2nd(true)}
            onMouseLeave={() => closeDropdown2nd(false)}
          >
            <div>Policy</div>
            <div
              className={`absolute left-0 mt-1 rounded-lg text-center bg-white border-gray-300 shadow-md ${
                open ? "block" : "hidden"
              }`}
            >
              <Link
                to="/pr1"
                onClick={toggleMenu}
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >
                Privacy Policy
              </Link>
              <Link
                to="/pr2"
                onClick={toggleMenu}
                className="block px-4 py-2 text-base text-black hover:bg-gray-500"
              >
                Terms & Conditions
              </Link>
            </div>
          </li>
          <HashLink to="/#gallery">
            <li
              onClick={toggleMenu}
              className="cursor-pointer p-5 mt-[-20px] hover:text-[#ffffff] hover:underline"
            >
              Gallery
            </li>
          </HashLink>
          <HashLink to="/#team">
            <li
              onClick={toggleMenu}
              className="cursor-pointer p-5 mt-[-20px] hover:text-[#ffffff] hover:underline"
            >
              Team
            </li>
          </HashLink>
          <HashLink to="/#testimonial">
            <li
              onClick={toggleMenu}
              className="cursor-pointer p-5 mt-[-20px] hover:text-[#ffffff] hover:underline"
            >
              Testimonials
            </li>

          </HashLink>
          <li
            onClick={() => {
              openPopup();
              toggleMenu();
            }}
            className="cursor-pointer p-5 mt-[-20px] hover:text-[#ffffff] hover:underline"
          >
            Contact Us
          </li>

        </ul>
        <Contact isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
    </div>
    </div>
  );

}