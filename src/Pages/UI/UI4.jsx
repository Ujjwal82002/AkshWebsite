
import UI1 from '../../assets/akshtech images/ui1.jpg';
import UI2 from '../../assets/akshtech images/ui2.jpg';
import UI3 from '../../assets/akshtech images/ui3.jpg';
import UI5 from '../../assets/akshtech images/ui4.jpg';


export default function UI4() {
  return (
    <div className="mt-[-65px] lg:mt-[-130px]">
    <div className='flex justify-center mt-16'>
      <div className='flex flex-wrap w-full max-w-6xl'>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-l-xl w-full h-[277px] object-cover' src={UI1} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
              
            UI/UX design begins with researching user needs and behaviors.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={UI2} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
            Wireframing sketches layouts and functionalities for intuitive navigation.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={UI3} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
            Information architecture organizes content for easy access and navigation. 
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-r-xl w-full h-[277px] object-cover' src={UI5} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            UI/UX processes start with brainstorming ideas to generate innovative solutions. 
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


