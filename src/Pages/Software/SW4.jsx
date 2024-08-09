
import Soft1 from '../../assets/akshtech images/software1.jpg'
import Soft2 from '../../assets/akshtech images/software2.jpg'
import Soft3 from '../../assets/akshtech images/software3.jpg'
import Soft4 from '../../assets/akshtech images/software4.jpg'

export default function SW4() {
  return (
    <div className="mt-[-65px] lg:mt-[-130px] ">
    <div className='flex justify-center mt-16'>
      <div className='flex flex-wrap w-full max-w-6xl'>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-l-xl w-full h-[277px] object-cover' src={Soft1} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            Development involves writing and implementing code to build software functionality effectively. 
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={Soft2} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
            Deployment releases the software to users in a production environment.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={Soft3} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
            Maintenance provides ongoing support and updates to improve performance
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-r-xl w-full h-[277px] object-cover' src={Soft4} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            Design creates system architecture and interface designs for user interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


