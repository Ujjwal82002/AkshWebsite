import React from "react";
import vanasthali from "../../assets/akshtech images/vanasthalilogo.svg";
import jaslogo from "../../assets/akshtech images/jaslogo.svg";
import truePay from "../../assets/akshtech images/truePay.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Clientlogo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-4">
      <div className="w-screen flex flex-col justify-center items-center mt-10 p-10 h-auto">
        <div className="w-[368px] h-[58px] bg-[#dacaca] flex justify-center items-center rounded-xl">
          <h1 className="text-2xl font-bold">We Have Worked With</h1>
        </div>
      </div>
      <Slider {...settings}>
        <div className=" ">
          <img src={jaslogo} alt="Ashley" className="mx-auto mt-10" />
        </div>

        <div className="">
          <img src={truePay} alt="Antony" className="mx-auto mt-10" />
        </div>

        <div className=" ">
          <img src={vanasthali} alt="AntonyDe" className="mx-auto" />
        </div>
      </Slider>
    </div>
  );
}

export default Clientlogo;
