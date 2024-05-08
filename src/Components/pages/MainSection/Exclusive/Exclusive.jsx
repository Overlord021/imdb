import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./styles.css";
import { FreeMode, Navigation } from "swiper/modules";
import { MyContext } from "../../../App/App";
import { FaRegCirclePlay } from "react-icons/fa6";

const Exclusive = () => {
  const { appmain } = useContext(MyContext);
  return (
    <>
      <div className="w-full flex justify-center mt-2 lg:mt-16">
        <div className="w-full lg:w-[1024px] xl:w-[1280px] flex flex-col">
          <div className="w-full lg:w-[70%] bg-[#121212] lg:bg-transparent xl:w-[900px]">
            <div className="w-full text-[32px] mb-10">
              <h3 className="flex font-bold text-[#f5c518]">
                Exclusive videos
              </h3>
            </div>
            <div className="w-full flex items-center">
              <span className="w-[4px] h-[30px] rounded-full m-[2px] me-2 bg-[#f5c518]"></span>
              <h3 className="text-[24px] flex font-bold">
                <span className="text-white">IMDb Originals</span>
              </h3>
            </div>
            <div className="w-full text-[16px] mb-8 text-[#ffffffb3]">
              <span>
                Celebrity interviews, trending entertainment stories, and expert
                analysis
              </span>
            </div>
          </div>

          <div className="w-full bg-[#121212] lg:bg-transparent">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              freeMode={true}
              centeredSlides={false}
              breakpoints={{
                1280: {
                    slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 34,
                },
                992: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                600: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
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
              {appmain.Exclusive?.map((elem) => {
                return (
                  <>
                    <SwiperSlide key={elem.id}>
                      <div className="w-full h-full flex flex-col bg-[#121212] lg:bg-[#000]">
                        <div className="w-full h-full relative hover:text-[#f5c518] cursor-pointer hover:brightness-90 flex justify-between">
                          <img src={elem.image} />
                          <div className="p-3 flex justify-between items-center absolute bottom-0">
                            <span className="me-2 text-[28px]">
                            <FaRegCirclePlay />
                            </span>
                            <span className="text-[14px] text-white">
                              {elem.time}
                            </span>
                          </div>

                        </div>
                        <div className="w-full h-full flex flex-col text-start ">
                          <div className="w-full flex pt-4 pb-2">
                            <a className="hover:underline" href="#">
                              {elem.title}
                            </a>
                          </div>
                          <div className="w-full flex">
                            <a
                              className="hover:underline text-[#5799ef]"
                              href="#"
                            >
                              <span>Watch now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
          <div className="hidden w-[380px] lg:flex flex-col"></div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
