import xdwxs from "../assets/akshtech images/xdwxs.svg";
const ServicesPage1 = () => {
  return (
    <div className="mainContainer flex justify-center items-center h-screen w-screen p-20 my-16">
      <div className="flex justify-between  w-[1265px] h-[678px]">
        <div>
          <div className="w-[200] h-[308px] mt-32">
            <p className=" font-bold text-6xl ml-12">We are here to <br /> guide and <br />help you at all <br /> times</p>
          </div>
         <div className="flex">
          <div className="w-0 h-30 border-r-4 border-black">
          </div>
         <div className="ml-12">
            <p className="w-[420px] h-[66px] text-xl font-medium">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>
            <button className="bg-[#06040A] mt-8 w-40 h-12 rounded-2xl text-white font-bold">Contact Us</button>
          </div>
         </div>
        </div>
        <div>
          <img className="w-[678px] h-[678px]" src={xdwxs} alt="xdwxs" />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage1;
