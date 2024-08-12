// /* eslint-disable react/prop-types */
// const Card = ({ title, paragraph }) => {
//   return (
//     <div className="max-w-sm gap-2 lg:w-72 lg:h-56 w-[850px] h-56 overflow-hidden bg-[#b0b0ba] rounded-lg shadow-md transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl">
//       <div className="flex flex-col justify-center p-20">
//         <h2 className="mb-2 lg:ml-[-50px] text-xl font-display mt-[-35px] lg:mt-[-55px]">
//           {title}
//         </h2>
//         <p className="p-[-105px] lg:ml-[-50px] text-gray-700">{paragraph}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
/* eslint-disable react/prop-types */
const Card = ({ title, paragraph }) => {
  return (
    <div className="max-w-xs sm:max-w-sm gap-2 lg:w-72 lg:h-56 w-full h-56 overflow-hidden bg-[#1e1e32] rounded-lg shadow-md transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-20">
        <h2 className="mb-2 text-xl text-rose-700 font-display mt-[-10px] sm:mt-[-20px] lg:mt-[-55px] lg:ml-[-50px]">
          {title}
        </h2>
        <p className="text-white lg:ml-[-50px]">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
