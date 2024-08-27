
import heart from "../../assets/akshtech images/heart.svg";
import star from "../../assets/akshtech images/star.svg";
import timer from "../../assets/akshtech images/timer.svg";
import fileIcon from "../../assets/akshtech images/fileicon.svg";
import folderIcon from "../../assets/akshtech images/foldericon.svg";
import copy from "../../assets/akshtech images/copy.svg";

export default function GM3() {
  return (
    <div className=" lg:mt-0 mt-[-20px]">
      <div className="flex flex-col m-8 mt-[0px]  lg:mt-[-230px] lg:flex-row lg:m-32 lg:ml-44">
        <div className="w-full  mt-9 lg:m-0 lg:h-[410.98px] mb-8 lg:mb-0">
          <h1 className="text-3xl font-display lg:text-5xl">Design. Think.</h1>
          <h1 className="-mt-2 text-3xl font-display lg:text-5xl lg:mt-2">
            Solve. Develop.
          </h1>
          <p className="text-base lg:text-lg mt-4 lg:mt-4 text-slate-700 px-0 lg:px-7 lg:-ml-7 lg:w-[482.93px]">
          Design with creativity to craft intuitive experiences. Think strategically to plan and innovate. Solve problems efficiently with clear solutions. Develop with precision to bring ideas to life, ensuring quality and functionality.!
          </p>
          <button className="text-white bg-[#06040A] px-4 lg:px-8 lg:py-4 py-2 rounded-full mt-5 font-bold">
            Get started
          </button>
        </div>

        <div className="w-full lg:w-[650px] h-auto flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-[310.24px]">
            <div className="flex h-auto mb-8">
              <img className="mr-3" src={heart} alt="" />
              <div className="w-[204px] h-[74px]">
                {/* <h1 className="font-display">168</h1> */}
                <p className="w-[204px]">We are excited to announce the successful delivery of our latest IT project, benefiting over 168+ users.</p>
              </div>
            </div>

            <div className="flex my-14">
              <img className="mr-3" src={star} alt="star" />
              <div className="w-[204px] h-[74px]">
                {/* <h1 className="font-display">168</h1> */}
                <p className="w-[204px]">
                We are thrilled to share that over 425+ customers have given high ratings for our services and project delivery.
                </p>
              </div>
            </div>

            <div className="flex my-10">
              <img className="mr-3" src={timer} alt="" />
              <div className="w-[204px] h-[74px]">
                {/* <h1 className="font-display">168</h1> */}
                <p className="w-[204px]">
                We are proud to announce the timely delivery of our latest project, thanks to our dedicated team.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[310.24px]">
            <div className="flex mb-8">
              <img className="mr-3" src={folderIcon} alt="" />
              <div className="w-[204px] h-[74px]">
                {/* <h1 className="font-display">168</h1> */}
                <p className="w-[204px]">
                Protecting your data is our top priority. Our new security measures ensure your information is safe and secure.

                </p>
              </div>
            </div>

            <div className="flex my-14">
              <img className="mr-3" src={fileIcon} alt="fileIcon" />
              <div className="w-[204px] h-[74px]">
                {/* <h1 className="font-display">168</h1> */}
                <p className="w-[204px]">
                Our AI-driven support system is designed to provide you with quick and accurate responses to your queries.

                </p>
              </div>
            </div>
            <div className="flex my-10">
              <img className="mr-3" src={copy} alt="" />
              <div className="w-[204px] h-[74px]">
                {/* <h1 className="font-display">168</h1> */}
                <p className="w-[204px]">
                Stay informed with regular updates about the project’s progress and new features being rolled out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
