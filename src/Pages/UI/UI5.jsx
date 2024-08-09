import { useState } from "react";
import contactus from "../../assets/akshtech images/contactus.svg";
import servicepage4design from "../../assets/akshtech images/servicepage4design.svg";
import ContactPopup from "../ContactUs/Contact";


export default function UI5() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <div  className="">
    <div className="flex items-center justify-center min-h-screen p-4 text-white">
      <div className="w-full max-w-6xl bg-[#000116] rounded-xl flex flex-col lg:flex-row justify-between items-center p-4 lg:p-10">
        <div className="flex flex-col items-center justify-center mt-10 lg:items-start lg:mt-0">
          <h1 className="text-3xl font-display w-full lg:w-[573px] h-auto lg:h-[104px] text-center lg:text-left">
            Top UI/UX Design Company
          </h1>
          <p className="w-full lg:w-[500px] h-auto lg:h-[128px] mt-4 lg:-mt-10 text-center lg:text-left">
          UI/UX focuses on designing intuitive interfaces and enhancing user experience through research, wireframing, prototyping, and usability testing.{" "}
            <br /> that align with technological advancements.
          </p>
          <button className="flex bg-[#FFFFFF] w-full lg:w-96 justify-between text-black items-center pl-4 text-lg font-display rounded-lg mt-4 lg:mt-10"   onClick={openPopup}>
            Contact Us
            <img src={contactus} alt="contactus" />
          </button>
          <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
        <div className="mt-10 lg:mt-0">
          <img src={servicepage4design} alt="servicepage4design" className="w-full lg:w-auto" />
        </div>
      </div>
    </div>
    </div>
  );
}


