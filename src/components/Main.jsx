import { HashLink } from "react-router-hash-link";


const CenteredContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-5 pb-16 mx-4 sm:mx-8 lg:mx-32">
        <div className="text-center">
          <h1 className="mb-10 text-4xl text-gray-900 font-display sm:text-5xl md:text-6xl lg:text-7xl">
            Find the project you love
          </h1>
          <p className="text-2xl font-normal text-gray-700 lg:w-[750px] sm:text-xl md:text-2xl sm:mx-8">
          An innovative platform designed to help individuals discover IT projects that align with their interests,
           skills, and career goals. This platform leverages advanced algorithms and personalized recommendations
            to match users with projects ..
          </p>
          <HashLink to="/#home"><button className="px-8 py-4 mt-6 text-base font-medium text-white bg-black rounded-full sm:text-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700">
            Explore
          </button></HashLink>
        </div>
      </div>

      <div className="max-w-full p-4 mx-auto mb-12 overflow-hidden bg-white shadow-lg sm:p-8 lg:p-16 rounded-3xl sm:mb-24 lg:mb-52 lg:max-w-8xl">
        <div className="flex flex-col lg:flex-row">
          {[
            {
              title: "App  Development",
              paragraph: " Focus on both Android and iOS platforms, using the latest technologies and development practices to create user-friendly apps that meet clients' needs..",
            },
            {
              title: "Software Development",
              paragraph: " the world of game development, creating engaging and immersive games for various platforms. the concept design and coding to testing and deployment.",
            },
            {
              title: "Web Development",
              paragraph: "Web development is the process of creating and maintaining websites, focusing on design, functionality, and user experience for optimal engagement..",
            },
            {
              title: "UI & UX Design",
              paragraph: "UI and UX design involve creating user-friendly interfaces and improving user experiences to make digital products intuitive,and visually appealing.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 p-4 border-b sm:p-6 lg:border-b-0 last:border-r-0"
            >
              <h2 className="pb-3 mb-2 text-2xl lg:mr-[150px] font-display text-gray-800 border-b-4 border-gray-900 sm:text-2xl">
                {item.title}
              </h2>
              <p className="text-base font-normal text-gray-600 sm:text-lg">
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
