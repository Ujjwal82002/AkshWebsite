import Web from "//src/assets/akshtech images/web.png";

export default function Part1() {
  return (
    <div className="px-4 sm:px-8 lg:px-[130px] py-8 lg:py-[140px]">
      <div>
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="text-center lg:text-left">
              <section className="p-4 lg:p-6">
                <h2 className="mb-4 text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl">
                  We Build &
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif mt-4 lg:mt-14 text-[#06040A]">
                  Welcome to our vibrant IT company where innovation meets
                  excellence. At Aksh Technology, we are not just about creating
                  software, we are crafting experiences. Specializing in UI/UX
                  design, JavaScript, CSS, mobile app development, Node.js,
                  React.js, React Native, HTML, and more, we are dedicated to
                  bringing your digital dreams to life. Join us on this journey
                  of innovation, where every line of code is infused with
                  creativity and every project is a masterpiece in the making.
                </p>
              </section>
            </div>
            <div className="flex justify-center transition-transform duration-300 ease-in-out lg:justify-end hover:scale-105">
              <img
                src={Web}
                alt=""
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[100%] lg:mt-[-150px] -mt-10 transition-opacity duration-300 ease-in-out rounded-3xl hover:opacity-80"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
