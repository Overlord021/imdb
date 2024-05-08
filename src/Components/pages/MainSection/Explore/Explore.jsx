import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./styles.css";
import { FreeMode, Navigation } from "swiper/modules";
import { MyContext } from "../../../App/App";
import { HiOutlineStar } from "react-icons/hi";
import { FaPlay, FaStar } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

const Explore = () => {
  const { appmain } = useContext(MyContext);
  return (
    <>
      <div className="w-full flex justify-center mt-2 lg:mt-16 ">
        <div className="w-full lg:w-[1024px] xl:w-[1280px] flex flex-col">
          <div className="w-full lg:w-[70%] bg-[#121212]  lg:bg-transparent xl:w-[900px]">
            <div className="w-full text-[32px] mb-6">
              <h3 className="flex font-bold text-[#f5c518]">
                Explore what’s streaming
              </h3>
            </div>
            <div className="w-full">
              <button className="h-[48px] px-6 btn btn-sm uppercase border-0 border-b-[2px] border-b-[#5799ef] hover:border-b-[#5799ef] bg-transparent hover:bg-[#141414] font-bold">
                prime video
              </button>
            </div>
            <div className="w-full my-4">
              <p>included with Prime</p>
            </div>
          </div>
          <div className="w-full bg-[#121212] py-4 lg:bg-transparent">
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
             {appmain.Explore?.map((elem) => {
              return (
                <>
                  <SwiperSlide key={elem.id}>
                    <div className="w-full h-full flex flex-col bg-[#1A1A1A]">
                      <div className="w-full h-[274px] cursor-pointer hover:brightness-90 relative flex">
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
                            {elem.rate}.{elem.rate2}
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
                              <span className="text-start text-[14px]">
                                Watch now
                              </span>
                              <span className="text-[16px]">
                                <CiShare1 />
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
      </div>
    </>
  );
};

export default Explore;
