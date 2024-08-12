import Word from "../assets/akshtech images/wordpress.jpg";
import App from "../assets/akshtech images/app1.svg.png";
import Cloud from "../assets/akshtech images/cloud.png";
import Game from "../assets/akshtech images/play.jpeg";
import Web from "../assets/akshtech images/web.png"
import Software from "../assets/akshtech images/software.svg.png"
import Cart from "../assets/akshtech images/cart.jpeg"

import Digital from "../assets/akshtech images/oniline.jpeg"


const services = [
  { img: Word, text: "Build websites with ease.." },
  { img: App, text: "Innovative apps for everyone.." },
  { img: Cloud, text: "Store data and share securely." },
  { img: Game, text: "Designing fun, engaging games." },
  { img: Software, text: "Software that solves problems." },
  { img: Web, text: "Creating dynamic web solutions." },
  { img: Digital, text: "Boosting online brand visibility." },
  { img: Cart, text: "Shopping made easy online." },
];

export default function Services() {
  return (
    <div className="bg-[#000116] max-w-[2240px] w-full pt-[40px] pb-[90px]  rounded-b-3xl mt-[-90px] px-0 space-y-3">
      <div className="lg:ml-[40%] ml-5 text-white text-4xl md:text-7xl font-display mb-16 lg:mb-24 md:pt-[-44px]">
        <h1>Our Services</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 mx-2 lg:mx-40 lg:gap-9 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1e1e32] rounded-lg lg:rounded-full text-white pl-7  flex items-center justify-center lg:p-10 lg:h-[140px] lg:w-70 h-[90px]"
          >
            <div className="flex items-center w-full h-full ">
              <img
                src={service.img}
                alt={`Service ${index + 1}`}
                className="w-10 h-10 mr-4 rounded-full lg:w-12 lg:h-12"
              />
              <p className="text-base font-medium text-center">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
