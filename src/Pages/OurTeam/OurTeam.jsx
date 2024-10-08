import aditya from "../../assets/akshtech images/adityaKumar.svg";
import priyanka from "../../assets/akshtech images/priyanka.svg";
import ranjay from "../../assets/akshtech images/ranjay.svg";
import smitha from "../../assets/akshtech images/smitha.svg";
import kamal from "../../assets/akshtech images/kamal.svg";
import raushan from "../../assets/akshtech images/rausan.svg";
import { TbCornerDownRight } from "react-icons/tb";


const OurTeam = () => {
  return (
    <div className="overflow-hidden teamBody bg-[#000116] lg:mr-0 lg:mt-[-20px] ">
      <div className="container  bg-[#000116]  lg:w-[1240px] lg:ml-32  flex flex-col justify-center items-center px-4 sm:px-6 lg:px-3">
        <div className="bg-[#18203A] w-full max-w-[1380px] rounded-lg p-6 mt-10 flex items-center">
          <TbCornerDownRight className="text-white font-display" />
          <p className="ml-2 text-white font-display">Our Team</p>
        </div>

        <div className="moto w-full max-w-[1280px] flex flex-col lg:flex-row justify-between mt-5">
          <div className="para w-full lg:w-[547px] font-display text-3xl mt-6">
            <p className="text-3xl text-white">
              We are passionate about creating visually stunning and functional
              solutions that communicate effectively.
            </p>
          </div>
          <div className="flex mt-6 lg:mt-0 lg:ml-32">
            <div>
              <img className="rounded-3xl" src={aditya} alt="aditya" />
            </div>
            <div className="ml-3">
              <img className="rounded-3xl" src={priyanka} alt="priyanka" />
            </div>
          </div>
        </div>

        <div className="employeeImages flex flex-col lg:mb-[50px] sm:flex-row w-full max-w-[1280px] justify-between mt-6">
          <div className="mb-4 ranjay sm:mb-0">
            <img className="rounded-3xl" src={ranjay} alt="ranjay" />
          </div>
          <div className="mb-4 sm:mb-0">
            <img className="rounded-3xl" src={smitha} alt="smitha" />
          </div>
          <div className="mb-4 sm:mb-0">
            <img className="rounded-3xl" src={kamal} alt="kamal" />
          </div>
          <div>
            <img className="rounded-3xl" src={raushan} alt="raushan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
