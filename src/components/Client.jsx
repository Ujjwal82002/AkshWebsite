// import { useState } from "react";
// import Slider from "react-slick";
// // import ashely from "../assets/akshtech images/Ashley.svg";
// import antony from "../assets/akshtech images/Antony.svg";
// import ReactStars from 'react-rating-stars-component';
// // import antonyDe from "../assets/akshtech images/AntonDe.svg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   {
//     text: "Aksh Technology provided exceptional service, delivering our project on time with precision. Their professionalism and attention to detail were outstanding. We were thoroughly impressed with their commitment and highly recommend their services for any IT-related projects",
//     imgSrc: antony,
//     alt: "Rajesh K.",
//     name:'Rajesh K.'
//   },
//   {
//     text: "The team at Aksh Technology is incredibly skilled and professional. They resolved our IT issues quickly and efficiently, making the entire process stress-free. Their expertise is evident, and I would highly recommend them for reliable IT solutions.",
//     imgSrc: antony,
//     alt: "Priya M.",
//     name:'Priya M.'
//   },
//   {
//     text: "Our experience with Aksh Technology was excellent. Their innovative solutions not only met but exceeded our expectations. The team's creativity and technical prowess ensured our project's success. We're highly satisfied and would definitely work with them again.",
//     imgSrc: antony,
//     alt: "Vikram S.",
//     name:'Vikram S.'
//   },
//   {
//     text: "Aksh Technology's customer service is exceptional. They were always available to assist us with our queries, providing timely and effective support. Their dedication to customer satisfaction is commendable, making them a trusted partner for IT services.",
//     imgSrc: antony,
//     alt: "Anjali R.",
//     name:'Anjali R.'
//   },
//   {
//     text: "The expertise and dedication of Aksh Technology's team are truly impressive. They seamlessly helped us achieve our IT goals, demonstrating high-level proficiency throughout the process. We couldn't be more pleased with the results and highly recommend their services.",
//     imgSrc: antony,
//     alt: "Amit P.",
//     name:'Amit P.'
//   },
//   {
//     text: "Aksh Technology transformed our business with their cutting-edge technology solutions. Their innovative approach and commitment to excellence were evident from the start. We're extremely satisfied with the results and highly recommend them for any business looking to modernize.",
//     imgSrc: antony,
//     alt: "Sneha L",
//     name:'Sneha L'
//   }
// ];

// const Client = () => {
//   const [rating, setRating] = useState();

//   const ratingChanged = (newRating) => {
//     setRating(newRating);
//     console.log(`New rating: ${newRating}`);
//   };
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="p-6 mx-auto mt-2 overflow-hidden lg:py-10 lg:px-0 lg:w-full max-w-9xl">
//       <div className="w-full max-w-2xl mx-auto my-3 text-center font-display">
//         <h1 className="text-lg md:text-2xl lg:mb-5 lg:text-5xl">
//           What our Clients are saying about us!
//         </h1>
//       </div>

//       <div className="px-4 mt-4 lg:px-10">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="px-2 lg:px-4">
//               <div className="bg-[#F1F4F8] rounded-2xl p-4 lg:p-6">
//                 <div className="text-sm lg:text-base">
//                   <p>{testimonial.text} </p>
//                 </div>
//                 <div>
               
//                 {/* <img src={testimonial} alt={testimonial.alt} className="mx-auto mt-8 lg:mt-12 max-w-[80%] lg:max-w-full" /> */}
//                 <p className="mt-10">{testimonial.name}
//                 <ReactStars
//         count={5}
//         onChange={ratingChanged}
//         size={24}
//         activeColor="#ffd700"
//       /> </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// // export default Client;
// import { useState } from "react";
import Slider from "react-slick";
import antony from "../assets/akshtech images/Antony.svg";
import ReactStars from 'react-rating-stars-component';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Aksh Technology provided exceptional service, delivering our project on time with precision. Their professionalism and attention to detail were outstanding. We were thoroughly impressed with their commitment and highly recommend their services for any IT-related projects.",
    imgSrc: antony,
    alt: "Rajesh K.",
    name:'Rajesh K.'
  },
  {
    text: "The team at Aksh Technology is incredibly skilled and professional. They resolved our IT issues quickly and efficiently, making the entire process stress-free. Their expertise is evident, and I would highly recommend them for reliable IT solutions.",
    imgSrc: antony,
    alt: "Priya M.",
    name:'Priya M.'
  },
  {
    text: "Our experience with Aksh Technology was excellent. Their innovative solutions not only met but exceeded our expectations. The team's creativity and technical prowess ensured our project's success. We're highly satisfied and would definitely work with them again.",
    imgSrc: antony,
    alt: "Vikram S.",
    name:'Vikram S.'
  },
  {
    text: "Aksh Technology's customer service is exceptional. They were always available to assist us with our queries, providing timely and effective support. Their dedication to customer satisfaction is commendable, making them a trusted partner for IT services.",
    imgSrc: antony,
    alt: "Anjali R.",
    name:'Anjali R.'
  },
  {
    text: "The expertise and dedication of Aksh Technology's team are truly impressive. They seamlessly helped us achieve our IT goals, demonstrating high-level proficiency throughout the process. We couldn't be more pleased with the results and highly recommend their services.",
    imgSrc: antony,
    alt: "Amit P.",
    name:'Amit P.'
  },
  {
    text: "Aksh Technology transformed our business with their cutting-edge technology solutions. Their innovative approach and commitment to excellence were evident from the start. We're extremely satisfied with the results and highly recommend them for any business looking to modernize.",
    imgSrc: antony,
    alt: "Sneha L",
    name:'Sneha L'
  }
];

const Client = () => {
  // const [rating, setRating] = useState(4); // Default rating set to 4

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
      <div className="w-full max-w-2xl mx-auto my-3 text-center font-display">
        <h1 className="text-lg md:text-2xl lg:mb-5 lg:text-5xl">
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
                <div>
                  {/* <img src={testimonial.imgSrc} alt={testimonial.alt} className="mx-auto mt-8 lg:mt-12 max-w-[80%] lg:max-w-full" /> */}
                  <p className="mt-10">{testimonial.name}</p>
                  <ReactStars
                    count={5}
                    value={5} // Fixed rating value set to 4
                    size={24}
                    activeColor="#ffd700"
                    edit={false} // Disables editing
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
