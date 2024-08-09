
import vanasthali from "../../assets/akshtech images/vanasthalilogo.svg";
import jaslogo from "../../assets/akshtech images/jaslogo.svg";
import truePay from "../../assets/akshtech images/truePay.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 export default function UI7() {
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
    <div  className="">
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center h-auto p-10 mt-[-20px] ">
        <div className="w-[368px] h-[58px] bg-[#dacaca] flex justify-center  items-center rounded-xl">
          <h1 className="text-2xl font-bold">We Have Worked With</h1>
        </div>
      </div>
      <Slider {...settings} className="lg:mx-[5%]" >
        <div className="py-16">
          <img src={jaslogo} alt="Ashley" className="mx-auto mt-[-30px]" />
        </div>

        <div className="">
          <img src={truePay} alt="Antony" className="mx-auto mt-10" />
        </div>

        <div className="">
          <img src={vanasthali} alt="AntonyDe" className="mx-auto" />
        </div>
      </Slider>
    </div>
    </div>
  );
}


