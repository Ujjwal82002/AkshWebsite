import img1 from '..//../assets/akshtech images/Background.png'
import img2 from '..//../assets/akshtech images/Background(1).png'
import img3 from '..//../assets/akshtech images/Background(2).png'
import img4 from '..//../assets/akshtech images/Background(3).png'



const services = [
    { img: img1,  h1:'Mobile Friendly',       text: 'Alex raises $8.4M to bring DeFi to the...' },
    { img: img2,  h2:'Loading Time',      text: 'NYC gets own cryptocurrency after...' },
    { img: img3,  h3:'Better Security',       text: 'Innovative cloud solutions for modern businesses...' },
    { img: img4,  h4:'Fast Servicing',     text: 'Next-gen gaming technology and experiences...' },
  
  ];

export default function Ourservices() {
  return (
    <div className='bg-[#000116] max-w-[2240px] w-full pt-[40px] pb-[90px]  rounded-b-3xl mt-[-90px] px-3 space-y-3'>
    <div className='lg:ml-[40%] text-white text-4xl md:text-7xl font-normal mb-16 lg:mb-32 md:pt-[-44px]'>
      <h1>Our Services</h1>
    </div>
    <div className='grid grid-cols-1 gap-8 mx-auto lg:gap-28 md:grid-cols-3 lg:grid-cols-4 max-w-7xl'>
      {services.map((service, index) => (
        <div
          key={index}
          className='bg-[#1e1e32] rounded-lg lg:rounded-full text-white pl-7  flex items-center justify-center lg:p-10 lg:h-[170px] lg:w-80 h-[90px]'
        >
          <div className='flex items-center w-full h-full '>
            <img
              src={service.img}
              alt={`Service ${index + 1}`}
              className="w-10 h-10 mr-4 rounded-full lg:w-16 lg:h-16"
            />
            <p className="text-base font-medium text-center">
              {service.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
