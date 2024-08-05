import Logo from "../assets/akshtech images/logo3.webp";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Contact from "../Pages/ContactUs/Contact";
import { Link, NavLink } from "react-router-dom";
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown when clicking outside
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const toggleDropdown2nd = () => {
    setOpen(!open);
  };

  // Function to close dropdown when clicking outside
  const closeDropdown2nd = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-[#000116]">
      <div className="flex items-center justify-between px-6 py-6 mx-auto md:px-16">
        <div className="w-[200px] ml:[-30px] lg:fixed lg:z-50  pt-2 lg:h-[65px]">
          <img
            src={Logo}
            className="w-full h-auto rounded-full lg:mt-2"
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

        {/* Desktop Menu */}
        <ul className="hidden gap-9 fixed w-[900px]   h-[55px] left-[201px] z-50 text-xl mt-8 ml-96 bg-[#FFFFFF] p-3 text-[#797979] pl-[3%] md:flex rounded-full">
          <Link to="/">
            <li className="cursor-pointer hover:text-[#000000]">
              <div>Home</div>
            </li>
          </Link>
          <li
            className="relative cursor-pointer  transition-all duration-700 hover:text-[#000000]"
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => closeDropdown(false)}
          >
            <div>Services</div>
            {/* Dropdown menu for Home */}
            <div
              className={`absolute left-0 mt-0  mx-3 text-center rounded-lg bg-white border-gray-300  shadow-md ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <Link to="/web"
                className="block px-10 py-2 text-lg text-black hover:bg-gray-500"
              >
                WebDevlopment
              </Link>
              <Link to="/ap"
                className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
              >
                App Devlopment
              </Link>
              <Link to="/sw"
                className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
              >
                Software Devlopment
              </Link>
              <Link to="/gm"
                className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
              >
                Game Devlopment
              </Link>
              <Link to="/dt"
                className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
              >
                Digital Marketing
              </Link>
              <Link to="/ui"
                className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
              >
                UI/UX Design
              </Link>
            </div>
          </li>
          <NavLink to="#about"  onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#000000]">About</NavLink>
          <li
            className="realative cursor-pointer  transition-all duration-700 hover:text-[#000000]"
            onMouseEnter={() => toggleDropdown2nd(true)}
            onMouseLeave={() => closeDropdown2nd(false)}
          >
            <div>Policy</div>
            {/* Dropdown menu for Home */}
            <div
              className={`absolute left-0 mt-2  rounded-lg mx-80  text-center bg-white border-gray-300  shadow-md ${
                open ? "block" : "hidden"
              }`}
            >
              <Link to="/pr1"
                className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
              >
                Privacy Policy
              </Link>
              <Link to="/pr2"
                className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
              >
                Terms & Conditions
              </Link>
            </div>
          </li>
          <Link to="#gallery"  onClick={() => scrollToSection('gallery')} className="cursor-pointer hover:text-[#000000] ">Gallery</Link>
          <Link to="#team"  onClick={() => scrollToSection('team')} className="cursor-pointer hover:text-[#000000] ">Team</Link>
          <Link to="#testimonial"  onClick={() => scrollToSection('testimonial')} className="cursor-pointer hover:text-[#000000] ">Testimonials</Link>
          <li
            onClick={openPopup}
            className="cursor-pointer hover:text-[#000000] "
          >
            Contact Us
          </li>
        </ul>
        <Contact isOpen={isPopupOpen} onClose={closePopup} />
        {/* Responsive Menu */}
        <ul
          className={`duration-300 text-xl md:hidden mt-[30px] z-30 w-full h-screen text-white fixed bg-black top-[92px] ${
            toggle ? "left-0" : "left-[-100%]"
          } `}
        >
          <Link to="/"
            alt=""
            className="cursor-pointer p-5  hover:text-[#ffffff] hover:underline"
          >
            Home
          </Link>
          <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">
            Services
          </li>
          <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">
            About
          </li>
          <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">
            Policy
          </li>
          <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">
            Gallery
          </li>
          <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">
            Team
          </li>
          <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">
            Testimonials
          </li>
          <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
}
// import Logo from "../assets/akshtech images/logo3.webp";
// import { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Contact from "../Pages/ContactUs/Contact";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// export default function Header() {
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const openPopup = () => setPopupOpen(true);
//   const closePopup = () => setPopupOpen(false);

//   const [toggle, setToggle] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [open, setOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };
//   const toggleDropdown2nd = () => {
//     setOpen(!open);
//   };

//   const closeDropdown2nd = () => {
//     setOpen(false);
//   };

//   const toggleMenu = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className="bg-[#000116] ">
//       <div className="flex items-center justify-between px-6 py-6 mx-auto md:px-16">
//         <div className="w-[200px] ml:[-30px] lg:fixed lg:z-50 pt-2 lg:h-[65px]">
//           <img
//             src={Logo}
//             className="w-full h-auto rounded-full lg:mt-2"
//             alt="Logo"
//           />
//         </div>
//         {!toggle ? (
//           <AiOutlineMenu
//             onClick={toggleMenu}
//             className="text-2xl text-white cursor-pointer md:hidden"
//           />
//         ) : (
//           <AiOutlineClose
//             onClick={toggleMenu}
//             className="text-2xl text-white cursor-pointer md:hidden"
//           />
//         )}

//         {/* Desktop Menu */}
//         <ul className="hidden gap-9 fixed w-[900px] h-[55px] left-[201px] z-50 text-xl mt-8 ml-96 bg-[#FFFFFF] p-3 text-[#797979] pl-[3%] md:flex rounded-full">
//           <Link to="/">
//             <li className="cursor-pointer hover:text-[#000000]">
//               <div>Home</div>
//             </li>
//           </Link>
//           <li
//             className="relative cursor-pointer transition-all duration-700 hover:text-[#000000]"
//             onMouseEnter={() => toggleDropdown(true)}
//             onMouseLeave={() => closeDropdown(false)}
//           >
//             <div>Services</div>
//             <div
//               className={`absolute left-0 mt-1 mx-3  text-center rounded-lg bg-white border-gray-300 shadow-md ${
//                 isDropdownOpen ? "block" : "hidden"
//               }`}
//             >
//               <Link
//                 to="/web"
//                 className="block px-16 py-2 text-lg text-black hover:bg-gray-500"
//               >
//                 WebDevelopment
//               </Link>
//               <Link
//                 to="/ap"
//                 className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
//               >
//                 App Development
//               </Link>
//               <Link
//                 to="/sw"
//                 className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
//               >
//                 Software Development
//               </Link>
//               <Link
//                 to="/gm"
//                 className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
//               >
//                 Game Development
//               </Link>
//               <Link
//                 to="/dt"
//                 className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
//               >
//                 Digital Marketing
//               </Link>
//               <Link
//                 to="/ui"
//                 className="block px-4 py-2 text-lg text-black hover:bg-gray-500"
//               >
//                 UI/UX Design
//               </Link>
//             </div>
//           </li>
//           <Link to="/about">
//             <li className="cursor-pointer hover:text-[#000000]">About</li>
//           </Link>
//           <li
//             className="relative cursor-pointer transition-all duration-700 hover:text-[#000000]"
//             onMouseEnter={() => toggleDropdown2nd(true)}
//             onMouseLeave={() => closeDropdown2nd(false)}
//           >
//             <div>Policy</div>
//             <div
//               className={`absolute left-0 mt-2 mx-10 ml-[-5px] rounded-lg text-center bg-white border border-gray-300 shadow-md ${
//                 open ? "block" : "hidden"
//               }`}
//             >
//               <Link
//                 to="/pr1"
//                 className="block px-2 py-2 text-lg text-black hover:bg-gray-500 hover:text-white"
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 to="/pr2"
//                 className="block px-2 py-2 text-lg text-black hover:bg-gray-500"
//               >
//                 Terms & Conditions
//               </Link>
//             </div>
//           </li>
//           <Link to="/gallery">
//             <li className="cursor-pointer hover:text-[#000000]">Gallery</li>
//           </Link>
//           <Link to="/team">
//             <li className="cursor-pointer hover:text-[#000000]">Team</li>
//           </Link>
//           <Link to="/testimonials">
//             <li className="cursor-pointer hover:text-[#000000]">
//               Testimonials
//             </li>
//           </Link>
//           <li
//             onClick={openPopup}
//             className="cursor-pointer hover:text-[#000000]"
//           >
//             Contact Us
//           </li>
//         </ul>
//         <Contact isOpen={isPopupOpen} onClose={closePopup} />
//         {/* Responsive Menu */}
//         <ul
//           className={`duration-300 text-xl md:hidden mt-[30px] z-30 w-full h-screen text-white fixed bg-black top-[92px] ${
//             toggle ? "left-0" : "left-[-100%]"
//           } `}
//         >
//           <Link
//             to="/"
//             className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
//           >
//             Home
//           </Link>
//           <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">
//             Services
//           </li>
//           <Link
//             to="/about"
//             className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
//           >
//             About
//           </Link>
//           <Link
//             to="/privacy-policy"
//             className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
//           >
//             Policy
//           </Link>
//           <Link
//             to="/gallery"
//             className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
//           >
//             Gallery
//           </Link>
//           <Link
//             to="/team"
//             className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
//           >
//             Team
//           </Link>
//           <Link
//             to="/testimonials"
//             className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
//           >
//             Testimonials
//           </Link>
//           <li
//             className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline"
//             onClick={openPopup}
//           >
//             Contact Us
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
