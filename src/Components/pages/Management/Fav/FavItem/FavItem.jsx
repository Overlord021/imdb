import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "./styles.css";
import "./FavItem.css";
// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { FaPlay, FaStar } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MyContext } from "../Fav";

const FavItem = () => {
  const { favorite } = useContext(MyContext);

  return (
    <>
      <div className="w-full flex justify-center mt-2 mb-8 lg:mt-16">
        <div className="w-full lg:w-[1024px] xl:w-[1280px] bg-[#121212] lg:bg-transparent pt-2 pb-6 flex flex-col">
          <div className="w-full flex justify-between pb-6">
            <div className="flex flex-col">
              <div className="w-full flex items-center">
                <span className="w-[4px] h-[30px] rounded-full m-[2px] me-2 bg-[#f5c518]"></span>
                <h3 className="text-[24px] flex font-bold cursor-pointer hover:text-[#f5c518]">
                  <span className="text-white">Fan favorites</span>
                  <span className="flex justify-center items-center text-[40px]">
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </h3>
              </div>
              <div className="w-full text-[16px] text-[#ffffffb3]">
                <span>This week's top TV and movies</span>
              </div>
            </div>
            {/* <div className="w-full flex items-center justify-between pb-6">
              <div className="w-[300px] flex justify-between">
                <Link to="/Management/TopTen/Add">
                  <button className="btn btn-md bg-green-800 hover:bg-green-600 w-24">
                    Add
                  </button>
                </Link>
                <Link to="/Management/TopTen/Edit">
                  <button className="btn btn-md bg-blue-800 hover:bg-blue-500 w-24">
                    Edit
                  </button>
                </Link>
                <Link to="/Management/TopTen/Remove">
                  <button className="btn btn-md bg-red-800 hover:bg-red-500 w-24">
                    Remove
                  </button>
                </Link>
              </div>
            </div> */}
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            centeredSlides={false}
            breakpoints={{
              1280: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 34,
              },
              992: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              450: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
          >
            {favorite?.map((elem) => {
              return (
                <>
                  <SwiperSlide key={elem.id}>
                    <div className="w-full  flex flex-col bg-[#1A1A1A]">
                      <div className="w-full cursor-pointer hover:brightness-90 relative flex">
                        <img src={elem.image} />
                        <span className="h-[54px] hover:brightness-200 cursor-pointer flex justify-center items-center absolute left-0 top-0 text-white">
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
                            className="absolute bottom-[12px] right-[50%] translate-x-[54%]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            role="presentation"
                          >
                            <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="w-full flex flex-col text-start mt-1.5">
                        <div className="w-full flex items-center">
                          <span className="ms-2 me-1.5 text-[#F5C518]">
                            <FaStar />
                          </span>
                          <span className="me-6 text-[#ffffffb3]">
                            {elem.rate}
                          </span>
                          <button className="btn btn-xs rounded-md bg-transparent border-none flex justify-center items-center hover:border-none hover:bg-[#2C2C2C]">
                            <span className="text-[#5799EF] flex justify-center items-center text-center">
                              <HiOutlineStar />
                            </span>
                          </button>
                        </div>
                        <div className="w-full h-[48px] flex">
                          <span className="ms-3 text-[16px] text-white cursor-pointer hover:underline hover:underline-offset-2">
                            {elem.title}
                          </span>
                        </div>
                        <div className="w-full h-full flex mt-4 justify-center">
                          <div className="w-full flex items-end mx-2">
                            <button className="w-full text-[#5799ef] bg-[#ffffff14] border-none hover:border-none hover:bg-[#30353C] btn rounded-md btn-sm">
                              <span className="text-[20px]">
                                <AiOutlinePlus />
                              </span>
                              <span className="text-start text-[14px]">
                                Watchlist
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="w-full flex justify-center mt-4 pb-4">
                          <div className="w-[50%] flex justify-center">
                            <button className="btn btn-sm rounded-md bg-transparent border-none hover:border-none hover:bg-[#2C2C2C]">
                              <span>
                                <FaPlay />
                              </span>
                              <span className="font-semibold text-white text-[14px]">
                                Trailer
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FavItem;
