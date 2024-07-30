const Card = ({ title, paragraph }) => {
  return (
    <div className="max-w-sm gap-2 lg:w-96 lg:h-80 w-[850px] h-56 overflow-hidden bg-[#b0b0ba] rounded-lg shadow-md transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col justify-center p-20">
        <h2 className="mb-2 text-xl font-bold mt-[-35px] lg:mt-[-5px]">{title}</h2>
        <p className="text-gray-700">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
