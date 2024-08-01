
import Slider from "react-slick";
import ashely from "../assets/akshtech images/Ashley.svg";
import antony from "../assets/akshtech images/Antony.svg";
import antonyDe from "../assets/akshtech images/AntonDe.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imgSrc: ashely,
    alt: "Ashley",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imgSrc: antony,
    alt: "Antony",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imgSrc: antonyDe,
    alt: "AntonyDe",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imgSrc: antonyDe,
    alt: "AntonyDe",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imgSrc: antonyDe,
    alt: "AntonyDe",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imgSrc: antonyDe,
    alt: "AntonyDe",
  }
];

const Client = () => {
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
    <div className="p-6 mx-auto mt-2 overflow-hidden lg:py-10 lg:px-0 lg:w-full max-w-9xl">
      <div className="w-full max-w-2xl mx-auto my-3 font-extrabold text-center">
        <h1 className="text-lg md:text-xl lg:text-2xl">
          What our Clients are saying about us!
        </h1>
      </div>

      <div className="px-4 mt-4 lg:px-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 lg:px-4">
              <div className="bg-[#F1F4F8] rounded-2xl p-4 lg:p-6">
                <div className="text-sm lg:text-base">
                  <p>{testimonial.text}</p>
                </div>
                <img src={testimonial.imgSrc} alt={testimonial.alt} className="mx-auto mt-8 lg:mt-12 max-w-[80%] lg:max-w-full" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
