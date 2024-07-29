
import Logo from '../assets/akshtech images/logo3.webp';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const[open,setOpen] = useState(false)

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
          <img src={Logo} className="w-full h-auto rounded-full lg:mt-2" alt="Logo" />
        </div>
        {
          !toggle ? (
            <AiOutlineMenu onClick={toggleMenu} className="text-2xl text-white cursor-pointer md:hidden" />
          ) : (
            <AiOutlineClose onClick={toggleMenu} className="text-2xl text-white cursor-pointer md:hidden" />
          )
        }
   
        {/* Desktop Menu */}
        <ul className="hidden gap-10 fixed w-[1081px]   h-[65px] left-[501px] z-50 text-2xl mt-8 ml-96 bg-[#FFFFFF] p-4 text-[#797979] pl-[3%] md:flex rounded-full">
  <li className="cursor-pointer hover:text-[#000000]"><div>Home</div>
  </li>
  <li className="relative cursor-pointer  transition-all duration-700 hover:text-[#000000]" onMouseEnter={() => toggleDropdown(true)}
  onMouseLeave={() => closeDropdown(false)}>
        <div>Services</div>
        {/* Dropdown menu for Home */}
        <div className={`absolute left-0 mt-0  mx-5  text-center bg-white border-gray-300 rounded-md shadow-md ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <a href="/web" className='block px-24 py-2 text-black hover:bg-gray-200'>Web Devlopment</a>
          <a href="#" className='block px-4 py-2 text-black hover:bg-gray-200'>App Devlopment</a>
          <a href="#" className='block px-4 py-2 text-black hover:bg-gray-200'>Software Devlopment</a>
          <a href="#" className='block px-4 py-2 text-black hover:bg-gray-200'>Game Devlopment</a>
          <a href="#" className='block px-4 py-2 text-black hover:bg-gray-200'>Digital Marketing</a>
          <a href="#" className='block px-4 py-2 text-black hover:bg-gray-200'>UI/UX Design</a>
        </div>
      </li>
  <li className="cursor-pointer hover:text-[#000000]">About</li>
  <li className="realative cursor-pointer  transition-all duration-700 hover:text-[#000000]" onMouseEnter={() => toggleDropdown2nd(true)}
  onMouseLeave={() => closeDropdown2nd(false)}>
        <div>Policy</div>
        {/* Dropdown menu for Home */}
        <div className={`absolute left-0 mt-2  mx-96  text-center bg-white border-gray-300 rounded-md shadow-md ${open ? 'block' : 'hidden'}`}>
          <a href="#" className='block px-4 py-2 text-black hover:bg-gray-200'>Privacy Policy</a>
          <a href="#" className='block px-4 py-2 text-black hover:bg-gray-200'>Terms & Conditions</a>

        </div>
      </li>
  <li className="cursor-pointer hover:text-[#000000] ">Gallery</li>
  <li className="cursor-pointer hover:text-[#000000] ">Team</li>
  <li className="cursor-pointer hover:text-[#000000] ">Testimonials</li>
  <li className="cursor-pointer hover:text-[#000000] ">Contact Us</li>
</ul>
        {/* Responsive Menu */}
        <ul className={`duration-300 text-xl md:hidden mt-[30px] z-30 w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? 'left-0' : 'left-[-100%]'} `}>
  <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">Home</li>
  <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">Services</li>
  <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">About</li>
  <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">Policy</li>
  <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">Gallery</li>
  <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">Team</li>
  <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">Testimonials</li>
  <li className="cursor-pointer p-5 hover:text-[#ffffff] hover:underline">Contact Us</li>
        </ul>
        </div>
      </div>
    
  );
}

