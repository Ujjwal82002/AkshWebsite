import xdwxs from "../assets/akshtech images/xdwxs.svg";

const ServicesPage1 = () => {
  return (
    <div className="mainContainer flex justify-center items-center min-h-screen p-8 md:p-20 my-16">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl">
        <div className="flex flex-col items-center md:items-start md:mt-32">
          <div className="w-full max-w-xs md:max-w-none">
            <p className="font-bold text-4xl md:text-6xl text-center md:text-left">
              We are here to <br /> guide and <br /> help you at all <br /> times
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start mt-8 md:mt-12">
            <div className="w-0 h-0 md:h-30 border-r-0 md:border-r-4 border-black"></div>
            <div className="ml-0 md:ml-12 mt-4 md:mt-0 text-center md:text-left">
              <p className="w-full max-w-xs md:max-w-md text-lg md:text-xl font-medium">
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem.
              </p>
              <button className="bg-[#06040A] mt-4 md:mt-8 w-40 h-12 rounded-2xl text-white font-bold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xs md:max-w-lg mt-8 md:mt-0">
          <img className="w-full h-auto" src={xdwxs} alt="xdwxs" />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage1;
