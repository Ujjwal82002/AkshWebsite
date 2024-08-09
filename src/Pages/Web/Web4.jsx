
import Web1 from '../../assets/akshtech images/webdev1.jpg'
import Web2 from '../../assets/akshtech images/wevdev2.jpg'
import Web3 from '../../assets/akshtech images/webdev3.jpg'
import Web5 from '../../assets/akshtech images/webdev4.jpg'

export default function Web4() {
  return (
    <div className="mt-[-65px]  max-w-screen-2xl lg:mt-[-130px]">
    <div className='flex justify-center mt-16'>
      <div className='flex flex-wrap w-full max-w-6xl'>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-l-xl w-full h-[277px] object-cover' src={Web1} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            Web development starts with planning the site’s structure and goals.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={Web2} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
            Designing involves creating visually appealing layouts and user-friendly interfaces.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={Web3} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
            Web development begins with researching target audience and industry trends.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-r-xl w-full h-[277px] object-cover' src={Web5} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            Web development consists of architecture design to establish site navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


