
import heart from "../../assets/akshtech images/heart.svg";
import star from "../../assets/akshtech images/star.svg";
import timer from "../../assets/akshtech images/timer.svg";
import fileIcon from "../../assets/akshtech images/fileicon.svg";
import folderIcon from "../../assets/akshtech images/foldericon.svg";
import copy from "../../assets/akshtech images/copy.svg";

export default function SW3() {
  return (
    <div  className="bg-[#00ffff]">
    <div className="flex flex-col m-8 lg:mt-[-200px] lg:flex-row lg:m-32 lg:ml-44">
      <div className="w-full lg:w-[518px] mt-7 lg:m-0 lg:h-[410.98px] mb-8 lg:mb-0">
        <h1 className="text-3xl font-bold lg:text-5xl">
          Design. Think.
        </h1>
        <h1 className="-mt-2 text-3xl font-bold lg:text-5xl lg:mt-2">
          Solve. Develop.
        </h1>
        <p className="text-base lg:text-lg mt-4 lg:mt-4 px-0 lg:px-7 lg:-ml-7 lg:w-[482.93px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe officiis expedita Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, incidunt!
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
              <h1 className="font-medium">168</h1>
              <p className="w-[204px]">
                Lorem ipsum dolor sit amet lorem ?
              </p>
            </div>
          </div>

          <div className="flex my-8">
            <img className="mr-3" src={star} alt="star" />
            <div className="w-[204px] h-[74px]">
              <h1 className="font-medium">168</h1>
              <p className="w-[204px]">
                Lorem dolor sit amet consectetur adipisicing elit. Moll
              </p>
            </div>
          </div>

          <div className="flex my-8">
            <img className="mr-3" src={timer} alt="" />
            <div className="w-[204px] h-[74px]">
              <h1 className="font-medium">168</h1>
              <p className="w-[204px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,fsddgth amet?
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[310.24px]">
          <div className="flex mb-8">
            <img className="mr-3" src={folderIcon} alt="" />
            <div className="w-[204px] h-[74px]">
              <h1 className="font-medium">168</h1>
              <p className="w-[204px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, amet?
              </p>
            </div>
          </div>

          <div className="flex my-8">
            <img className="mr-3" src={fileIcon} alt="fileIcon" />
            <div className="w-[204px] h-[74px]">
              <h1 className="font-medium">168</h1>
              <p className="w-[204px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, amet?
              </p>
            </div>
          </div>
          <div className="flex my-8">
            <img className="mr-3" src={copy} alt="" />
            <div className="w-[204px] h-[74px]">
              <h1 className="font-medium">168</h1>
              <p className="w-[204px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, amet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
