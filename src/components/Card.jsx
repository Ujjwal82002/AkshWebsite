const Card = ({ title, paragraph }) => {
  return (
    <div className="max-w-sm gap-2 lg:w-72 lg:h-56 w-[850px] h-56 overflow-hidden bg-[#b0b0ba] rounded-lg shadow-md transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col justify-center p-20">
        <h2 className="mb-2 lg:ml-[-50px] text-xl font-bold mt-[-35px] lg:mt-[-55px]">
          {title}
        </h2>
        <p className="p-[-105px] lg:ml-[-50px] text-gray-700">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
