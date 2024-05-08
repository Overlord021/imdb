import React from "react";

const MoreToWatch = () => {
  return (
    <div className="w-full flex justify-center lg:mt-16">
      <div className="w-full lg:w-[1024px] xl:w-[1280px] flex flex-col">
        <div className="w-full flex flex-col bg-[#121212] pb-6 lg:bg-transparent">
          <div className="w-full flex items-center">
            <span className="w-[4px] h-[30px] rounded-full m-[2px] me-2 bg-[#f5c518]"></span>
            <h3 className="text-[24px] flex font-bold hover:text-[#f5c518]">
              <span className="text-white">More to watch</span>
            </h3>
          </div>
          <div className="w-full text-[16px] mb-8 text-[#ffffffb3]">
            <span>This week's top TV and movies</span>
          </div>
          <div className="max-w-[740px] h-[36px] sm:h-[90px] flex sm:flex-col sm:items-start items-center justify-between">
            <button className="btn btn-sm rounded-sm w-[48%] h-[36px] mdd:w-[360px] sm:w-[80%] border-[2px] text-white border-white bg-transparent hover:bg-[#141414] hover:border-white flex items-center justify-center">Watch Guide</button>
            <button className="btn btn-sm rounded-sm w-[48%] h-[36px] mdd:w-[360px] sm:w-[80%] border-[2px] text-white border-white bg-transparent hover:bg-[#141414] hover:border-white flex items-center justify-center">Most Popular</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreToWatch;
