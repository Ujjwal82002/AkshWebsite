
import img1 from '../../assets/akshtech images/Rectangle 39.png';
import img2 from '../../assets/akshtech images/Rectangle 40.png';
import img3 from '../../assets/akshtech images/Rectangle 41.png';
import img4 from '../../assets/akshtech images/Rectangle 42.png';
import Digi1 from '../../assets/akshtech images/digidev1.jpg';
import Digi2 from '../../assets/akshtech images/digidev2.jpg';
import Digi3 from '../../assets/akshtech images/digidev3.jpg';
import Digi4 from '../../assets/akshtech images/digidev4.jpg';


export default function DT14() {
  return (
    <div className=" mt-[-65px] lg:mt-[-130px]">
    <div className='flex justify-center mt-16'>
      <div className='flex flex-wrap w-full max-w-6xl'>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-l-xl w-full h-[277px] object-cover' src={Digi1} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            Digital marketing starts with researching target audiences and market trends.!
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={Digi2} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
   
          Digital marketing starts with audience segmentation to tailor messages.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={Digi3} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
              
            Digital marketing begins with branding, establishing identity and voice..
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-r-xl w-full h-[277px] object-cover' src={Digi4} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            Paid advertising drives targeted traffic, and conversion optimization to increase sales.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


