
import Slider from 'react-slick';
import ashely from "../assets/akshtech images/Ashley.svg";
import antony from "../assets/akshtech images/Antony.svg";
import antonyDe from "../assets/akshtech images/AntonDe.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='max-w-6xl p-10 mx-auto mt-5 overflow-hidden'>
            <div className='w-full max-w-2xl mx-auto font-extrabold text-center'>
                <h1 className='text-xl md:text-2xl'>What our Clients are saying about us!</h1>
            </div>

            <div className='mt-4'>
                <Slider {...settings}>
                    <div className='bg-[#F1F4F8] rounded-[30px] p-6 h-auto'>
                        <div className='text-[16px]'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={ashely} alt="Ashley" className='mx-auto mt-4' />
                    </div>

                    <div className='bg-[#F1F4F8] rounded-[30px] p-6'>
                        <div className='text-[16px]'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={antony} alt="Antony" className='mx-auto mt-4' />
                    </div>

                    <div className='bg-[#F1F4F8] rounded-[30px] p-6'>
                        <div className='text-[16px]'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={antonyDe} alt="AntonyDe" className='mx-auto mt-4' />
                    </div>

                    <div className='bg-[#F1F4F8] rounded-[30px] p-6 h-auto'>
                        <div className='text-[16px]'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={ashely} alt="Ashley" className='mx-auto mt-4' />
                    </div>

                    <div className='bg-[#F1F4F8] rounded-[30px] p-6'>
                        <div className='text-[16px]'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={antony} alt="Antony" className='mx-auto mt-4' />
                    </div>

                    <div className='bg-[#F1F4F8] rounded-[30px] p-6'>
                        <div className='text-[16px]'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={antonyDe} alt="AntonyDe" className='mx-auto mt-4' />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Client;