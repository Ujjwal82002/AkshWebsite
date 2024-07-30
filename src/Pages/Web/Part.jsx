import Webimage from "..//..//assets/akshtech images/web.png";

export default function Part() {
  return (
    <div className="px-4 sm:px-8  lg:mt-[-50px] lg:px-[130px] bg-[#f687b3] py-8 lg:py-[140px]">
      <div>
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="text-center lg:text-left">
              <section className="p-4 lg:ml-16 lg:p-6">
                <h2 className="mb-4 text-4xl font-medium sm:text-5xl md:text-6xl lg:text-gray-800">
                  Web Development
                </h2>
                <p className="text-base sm:text-lg  lg:w-[800px] w-full md:text-xl lg:text-xl font-normal mt-4 lg:mt-14 text-[#06040A]">
                  Welcome to AKSH Technologys Web Design services! We craft
                  stunning, user- friendly websites tailored to your business
                  needs. Our designs are not just visually appealing but also
                  intuitive, ensuring a seamless user experience. We blend
                  creativity with the latest technologies to deliver custom web
                  solutions that stand out. Whether you need a brand-new site or
                  a redesign, our expert team is here to transform your online
                  presence.
                  <p>
                    {" "}
                    Discover the power of effective web design with AKSH
                    Technology. Lets create something amazing together.
                  </p>
                </p>
              </section>
            </div>
            <div className="flex justify-center transition-transform duration-300 ease-in-out lg:justify-end hover:scale-105">
              <img
                src={Webimage}
                alt=""
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[60%] lg:max-h-[160%] lg:mt-[-50px] -mt-10 transition-opacity duration-300 ease-in-out rounded-3xl hover:opacity-80"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
