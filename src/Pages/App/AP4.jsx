// import img1 from "../../assets/akshtech images/Rectangle 39.png";
// import img2 from "../../assets/akshtech images/Rectangle 40.png";
// import img3 from "../../assets/akshtech images/Rectangle 41.png";
// import img4 from "../../assets/akshtech images/Rectangle 42.png";
import App1 from "../../assets/akshtech images/mobapp1.jpg";
import App2 from "../../assets/akshtech images/mobapp2.jpg";
import App3 from "../../assets/akshtech images/mobapp3.jpg";
import App4 from "../../assets/akshtech images/mobapp4.jpg";

export default function AP4() {
  return (
    <div className=" mt-[-65px] lg:mt-[-130px]">
      <div className="flex justify-center mt-16">
        <div className="flex flex-wrap w-full max-w-6xl">
          <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="relative">
              <img
                className="rounded-l-xl w-full h-[277px] object-cover"
                src={App1}
                alt=""
              />
              <p className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl">
              App development starts with UI and UX, defining the interface and user experience.
              </p>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="relative">
              <img
                className="w-full h-[277px] object-cover"
                src={App2}
                alt=""
              />
              <p className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
              Testing and debugging ensure functionality, with QA maintaining app quality..
              </p>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="relative">
              <img
                className="w-full h-[277px] object-cover"
                src={App3}
                alt=""
              />
              <p className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
              Creating immersive gaming experiences through art, code, and creative innovation.
              </p>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="relative">
              <img
                className="rounded-r-xl w-full h-[277px] object-cover"
                src={App4}
                alt=""
              />
              <p className="absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl">
              The launch phase releases the app, followed by maintenance for updates.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
