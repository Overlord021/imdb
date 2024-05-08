import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Watchlist = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-8">
        <div className="w-full lg:w-[1024px] xl:w-[1280px] flex flex-col">
          <div className="w-full flex justify-between mb-6">
            <h3 className="text-[32px] text-[#f5c518] font-bold">
              What to watch
            </h3>
            <a
              className="flex items-center font-semibold text-[#5799ef] hover:underline"
              href="#"
            >
              Get more recommendations{" "}
              <span className="flex justify-center items-center pt-1">
                <MdOutlineKeyboardArrowRight />
              </span>
            </a>
          </div>
          <div className="w-full flex flex-col bg-[#121212] lg:bg-transparent">
            <div className="w-full flex items-center pb-6">
              <span className="w-[4px] h-[30px] rounded-full m-[2px] me-2 bg-[#f5c518]"></span>
              <h3 className="text-[24px] flex font-bold cursor-pointer hover:text-[#f5c518]">
                <span className="text-white">From your Watchlist</span>
                <span className="flex justify-center items-center text-[40px]">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </h3>
            </div>
            <div className="w-full flex flex-col justify-center">
              <div className="w-full flex justify-center relative">
                <span className="h-[54px] flex justify-center items-center text-white">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 34"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <polygon
                      fill="transparent"
                      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                    ></polygon>
                    <polygon
                      fill="#3c3c3ce6"
                      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                    ></polygon>
                    <polygon
                      fill="#2b2b2b"
                      points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                    ></polygon>
                  </svg>
                  <svg
                    className="absolute bottom-[35%] right-[50%] translate-x-[50%]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                  </svg>
                </span>
              </div>
              <div className="w-full flex justify-center text-white pt-4">
                <span className="font-semibold">
                  Sign in to access your Watchlist
                </span>
              </div>
              <div className="w-full flex justify-center text-white">
                <span className="font-semibold">
                  Save shows and movies to keep track of what you want to watch.
                </span>
              </div>
              <div className="w-full flex justify-center py-8">
                <button className="w-[164px] h-[36px] text-[14px] hover:bg-[#191E25] rounded-md bg-[#ffffff14] text-[#5799ef] font-semibold">
                  Sign in to IMDb
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
