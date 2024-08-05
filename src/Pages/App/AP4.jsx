import img1 from "../../assets/akshtech images/Rectangle 39.png";
import img2 from "../../assets/akshtech images/Rectangle 40.png";
import img3 from "../../assets/akshtech images/Rectangle 41.png";
import img4 from "../../assets/akshtech images/Rectangle 42.png";

export default function AP4() {
  return (
    <div className="bg-[#00ffff] mt-[-65px] lg:mt-[-130px]">
      <div className="flex justify-center mt-16">
        <div className="flex flex-wrap w-full max-w-6xl">
          <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="relative">
              <img
                className="rounded-l-xl w-full h-[277px] object-cover"
                src={img1}
                alt=""
              />
              <p className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                reprehenderit!
              </p>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="relative">
              <img
                className="w-full h-[277px] object-cover"
                src={img2}
                alt=""
              />
              <p className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, neque.
              </p>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="relative">
              <img
                className="w-full h-[277px] object-cover"
                src={img3}
                alt=""
              />
              <p className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, repudiandae.
              </p>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="relative">
              <img
                className="rounded-r-xl w-full h-[277px] object-cover"
                src={img4}
                alt=""
              />
              <p className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                perspiciatis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
