
import aditya from "../assets/akshtech images/adityaKumar.svg";
import priyanka from "../assets/akshtech images/priyanka.svg";
import ranjay from "../assets/akshtech images/ranjay.svg";
import smitha from "../assets/akshtech images/smitha.svg";
import kamal from "../assets/akshtech images/kamal.svg";
import raushan from "../assets/akshtech images/rausan.svg";
import { TbCornerDownRight } from "react-icons/tb";

const Team = () => {
    return (
        <div className="overflow-hidden teamBody lg:px-[-1350px] ">

            <div className="container  bg-[#000116]  lg:w-[3000px] lg:ml-60  flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">

                <div className="bg-[#18203A] w-full max-w-[1280px] rounded-lg p-6 mt-10 flex items-center">
                    <TbCornerDownRight className="font-bold text-white" />
                    <p className="ml-2 font-bold text-white">Our Team</p>
                </div>

                <div className="moto w-full max-w-[1280px] flex flex-col lg:flex-row justify-between mt-5">
                    <div className="para w-full lg:w-[547px] font-extrabold text-3xl mt-6">
                        <p className="text-4xl text-white">We are passionate about creating visually stunning and functional solutions that communicate effectively.</p>
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

                <div className="employeeImages flex flex-col sm:flex-row w-full max-w-[1280px] justify-between mt-6">
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

                <div className="w-full max-w-[1280px]">
                    <button className="w-full h-[50px] bg-[#B7EFF6] mb-10 mt-5 p-4 font-bold text-black rounded-xl">See All members</button>
                </div>

            </div>

        </div>
    );
};

export default Team;