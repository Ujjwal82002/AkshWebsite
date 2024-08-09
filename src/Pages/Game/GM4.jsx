
import Game1 from '../../assets/akshtech images/gamedev1.jpg'
import Game2 from '../../assets/akshtech images/gamedev2.jpg';
import Game3 from '../../assets/akshtech images/gamedev3.jpg';
import Game4 from '../../assets/akshtech images/gamedev4.jpg'

export default function GM4() {
  return (
    <div className="mt-[-65px] lg:mt-[-130px]">
    <div className='flex justify-center mt-16'>
      <div className='flex flex-wrap w-full max-w-6xl'>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-l-xl w-full h-[277px] object-cover' src={Game1} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            Creating immersive gaming experiences through art, code, and creative innovation.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={Game2} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
            Game development begins with designing characters, levels, and overall aesthetics.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='w-full h-[277px] object-cover' src={Game3} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50'>
             Programming involves coding gameplay mechanics, AI, and controls.
            </p>
          </div>
        </div>
        <div className='w-full p-2 sm:w-1/2 lg:w-1/4'>
          <div className='relative'>
            <img className='rounded-r-xl w-full h-[277px] object-cover' src={Game4} alt="" />
            <p className='absolute bottom-0 w-full p-2 text-center text-white bg-black bg-opacity-50 rounded-b-xl'>
            Finally, deployment includes releasing the game and post-launch updates.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


