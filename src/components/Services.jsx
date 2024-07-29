
// import Word from '../assets/akshtech images/wordpress.jpg';
// import Cart from '../assets/akshtech images/cart.jpeg';
// import Cloud from '../assets/akshtech images/cloud.png';
// import Game from '../assets/akshtech images/play.jpeg';

// export default function Services() {
//   return (
//     <div className='bg-[#000116] max-w-[2240px] w-full pt-[60px] pb-[70px]  rounded-b-3xl mt-[-90px] px-3 space-y-3'>
//       <div className='lg:ml-[40%] text-white text-4xl md:text-7xl font-normal mb-32 md:pt-[-44px]'>
//         <h1>Our Services</h1>
//       </div>
//       <div className='grid grid-cols-1 gap-32 mx-auto md:grid-cols-3 lg:grid-cols-4 max-w-7xl'>
//         {/* Service 1 */}
//         <div className='bg-[#1e1e32] rounded-full lg:w-80 text-white p-10 flex items-center'>
//           <img src={Word} alt="" className="mr-4 rounded-full w-14 h-14" />
//           <p className="text-base font-medium">
//             Alex raises $8.4M to bring DeFi to the...
//           </p>
//         </div>
        
//         {/* Service 2 */}
//         <div className='bg-[#1e1e32] rounded-full lg:w-80  text-white p-10 flex items-center'>
//           <img src={Cart} alt="" className="mr-4 rounded-full w-14 h-14" />
//           <p className="text-base font-medium">
//             NYC gets own cryptocurrency after...
//           </p>
//         </div>
        
//         {/* Service 3 */}
//         <div className='bg-[#1e1e32] rounded-full lg:w-80 text-white p-10 flex items-center'>
//           <img src={Cloud} alt="" className="mr-4 rounded-full w-14 h-14" />
//           <p className="text-base font-medium">
//             Alex raises $8.4M to bring DeFi to the...
//           </p>
//         </div>
        
//         {/* Service 4 */}
//         <div className='bg-[#1e1e32] rounded-full lg:w-80 text-white p-10 flex items-center'>
//           <img src={Game} alt="" className="mr-4 rounded-full w-14 h-14" />
//           <p className="text-base font-medium">
//             Alex raises $8.4M to bring DeFi to the...
//           </p>
//         </div>
//          {/* Service 5 */}
//          <div className='bg-[#1e1e32] rounded-full lg:w-80 text-white p-10 flex items-center'>
//           <img src={Game} alt="" className="mr-4 rounded-full w-14 h-14" />
//           <p className="text-base font-medium">
//             Alex raises $8.4M to bring DeFi to the...
//           </p>
//         </div>
//          {/* Service 6*/}
//          <div className=' bg-[#1e1e32] rounded-full lg:w-80 text-white p-10 flex items-center'>
//           <img src={Game} alt="" className="mr-4 rounded-full w-14 h-14" />
//           <p className="text-lg font-medium">
//             Alex raises $8.4M to bring DeFi to the...
//           </p>
//         </div>
//           {/* Service 7*/}
//           <div className=' bg-[#1e1e32] rounded-full lg:w-80 text-white p-10 flex items-center'>
//           <img src={Game} alt="" className="mr-4 rounded-full w-14 h-14" />
//           <p className="text-lg font-medium">
//             Alex raises $8.4M to bring DeFi to the...
//           </p>
//         </div>
//           {/* Service 8*/}
//           <div className=' bg-[#1e1e32] rounded-full lg:w-80 text-white p-10 flex items-center'>
//           <img src={Game} alt="" className="mr-4 rounded-full w-14 h-14" />
//           <p className="text-lg font-medium">
//             Alex raises $8.4M to bring DeFi to the...
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import Word from '../assets/akshtech images/wordpress.jpg';
import Cart from '../assets/akshtech images/cart.jpeg';
import Cloud from '../assets/akshtech images/cloud.png';
import Game from '../assets/akshtech images/play.jpeg';

const services = [
  { img: Word, text: 'Alex raises $8.4M to bring DeFi to the...' },
  { img: Cart, text: 'NYC gets own cryptocurrency after...' },
  { img: Cloud, text: 'Innovative cloud solutions for modern businesses...' },
  { img: Game, text: 'Next-gen gaming technology and experiences...' },
  { img: Word, text: 'Alex raises $8.4M to bring DeFi to the...' },
  { img: Cart, text: 'NYC gets own cryptocurrency after...' },
  { img: Cloud, text: 'Innovative cloud solutions for modern businesses...' },
  { img: Game, text: 'Next-gen gaming technology and experiences...' },
];

export default function Services() {
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
  );
}
