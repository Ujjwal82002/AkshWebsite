import Game from "../../assets/akshtech images/gm.png"

export default function GM1() {
  return (
    <div className="px-4 overflow-hidden lg:mt-[-50px] bg-[#00ffff] sm:px-8 lg:px-[120px] py-8 lg:py-[140px]">
    <div>
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="text-center lg:text-left">
            <section className="p-4 lg:mt-[-150px] lg:px-6">
              <h2 className="lg:ml-[-60px] text-4xl font-bold sm:text-5xl md:text-6xl lg:p-28 lg:text-6xl">
              We're here to guide in 
              </h2>
              <h2 className="text-4xl lg:mt-[-180px]  font-bold lg:px-48 lg:py-20 sm:text-5xl md:text-6xl lg:text-6xl lg:ml-[-140px]">
              Game Development
              </h2>
              <p className="text-base lg:ml-24 sm:text-lg md:text-xl lg:text-xl lg:font-normal font-serif mt-4 lg:mt-[-30px] text-[#06040A]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
              </p>
              <button className="px-8 py-3 mt-6 text-base font-medium text-white bg-black rounded-full lg:ml-24 sm:py-4 md:py-5 sm:text-lg md:text-xl lg:mt-9 sm:px-10 md:px-12 lg:px-10 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
                Contact Us
              </button>
            </section>
          </div>
          <div className="flex justify-center transition-transform duration-300 ease-in-out lg:justify-end hover:scale-105">
            <img
              src={Game}
              alt=""
              className="w-full max-w-xs h-[110%] sm:max-w-sm md:max-w-md lg:max-w-[90%] lg:mt-[-60px] -mt-10 transition-opacity duration-300 ease-in-out rounded-3xl hover:opacity-80"
            />
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}
