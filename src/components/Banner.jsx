import Banner1 from '../assets/akshtech images/Banner1.png'
import Banner2 from '../assets/akshtech images/Banner2.png'
import Banner3 from '../assets/akshtech images/Banner3.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banner() {
    /// coursoul slider
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      autoplay: true,
      autoplaySpeed: 1500, // Adjust autoplay speed in milliseconds
    };
  return (
    <div className='bg-[#2699fb] w-full lg:mt-[-140px] mt-[-90px]'>
        <div className='max-w-[2240px] overflow-hidden  my-[80px]  w-[100] mx-auto text-center font-bold'>
       
      <Slider {...settings}>
        <div>
          <img src={Banner1} alt="slide1" />
        </div>
        <div>
          <img src={Banner2} alt="slide2" />
        </div>
        <div>
          <img src={Banner3} alt="slide3" />
        </div>
      </Slider>
   
        </div>
    </div>
  )
}
