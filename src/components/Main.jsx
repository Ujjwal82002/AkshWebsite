const CenteredContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-5 pb-16 mx-4 sm:mx-8 lg:mx-32">
        <div className="text-center">
          <h1 className="mb-10 text-4xl text-gray-900 font-display sm:text-5xl md:text-6xl lg:text-7xl">
            Find the project you love
          </h1>
          <p className="text-2xl font-normal text-gray-700 lg:w-[750px] sm:text-xl md:text-2xl sm:mx-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam. Lorem ipsum dolor sit ame, consectetur.
          </p>
          <button className="px-8 py-4 mt-6 text-base font-medium text-white bg-black rounded-full sm:text-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Explore
          </button>
        </div>
      </div>

      <div className="max-w-full p-4 mx-auto mb-12 overflow-hidden bg-white shadow-lg sm:p-8 lg:p-16 rounded-3xl sm:mb-24 lg:mb-52 lg:max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          {[
            {
              title: "Title 1",
              paragraph: "Lorem ipsum dolor sit amet, consectetur.",
            },
            {
              title: "Title 2",
              paragraph: "Lorem ipsum dolor sit amet, consectetur.",
            },
            {
              title: "Title 3",
              paragraph: "Lorem ipsum dolor sit amet, consectetur.",
            },
            {
              title: "Title 4",
              paragraph: "Lorem ipsum dolor sit amet, consectetur.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 p-4 border-b sm:p-6 lg:border-b-0 last:border-r-0"
            >
              <h2 className="pb-3 mb-2 text-2xl lg:mr-[150px] font-semibold text-gray-800 border-b-4 border-gray-900 sm:text-3xl">
                {item.title}
              </h2>
              <p className="text-base font-normal text-gray-600 sm:text-xl">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CenteredContent;
