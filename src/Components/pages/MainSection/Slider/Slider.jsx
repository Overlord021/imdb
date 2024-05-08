import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import SliderNavBtn from "./SliderNavBtn/SliderNavBtn";
import { MyContext } from "../../../App/App";
import "./Slider.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const Slider = () => {
  const { appmain } = useContext(MyContext);
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-[1024px] xl:w-[1280px] h-[550px] flex">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            {appmain.Trailer?.map((elem) => {
              return (
                <>
                  <SwiperSlide
                    className="flex hover:text-[#F5C518]"
                    key={elem.id}
                  >
                    <div className="w-full h-full p-0 cursor-pointer hover:brightness-90 hover:text-[#F5C518] text-white">
                      <img className="p-0" src={elem.banner} alt="" />

                      <div className="w-full absolute ps-4 bottom-0 Back flex">
                        <div className="w-[132px] sm:w-[90px] sm:h-[134px] xl:w-[165px] xl:h-[244px] flex flex-col justify-between relative">
                          <span className="h-[54px] hover:brightness-200 flex justify-center items-center absolute left-0 top-0 text-white">
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
                              className="absolute bottom-[10px] right-[50%] translate-x-[54%]"
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
                          <img
                            className="w-[132px] h-[200px] sm:w-[90px] sm:h-[134px] xl:w-[165px] xl:h-[244px]"
                            src={elem.cover}
                            alt=""
                          />
                          
                        </div>
                        <div className="flex sm:flex-col justify-center">
                          <div className="max-w-[480px] flex items-end mx-2">
                            <span className="mb-6 me-2 sm:mb-0 sm:me-0 flex">
                              <svg
                                className="w-[72px] h-[72px] sm:w-[50px] sm:h-[50px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                role="presentation"
                              >
                                <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                                <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                              </svg>
                              <span className="hidden sm:flex items-center ms-4 text-[14px]">
                                {elem.time}
                              </span>
                            </span>
                          </div>
                          <div className="max-w-[500px] flex flex-col justify-end md:mb-6 sm:mx-2">
                            <div className="flex sm:flex-col-reverse justify-between font-semibold">
                              <div className="max-w-[480px] flex justify-start">
                                <span className="text-[24px] sm:text-[20px] xl:text-[32px] text-white text-start">
                                  {elem.title}
                                </span>
                              </div>
                              <span className="w-[70px] flex justify-center items-end sm:hidden text-[20px] text-[#ffffffb3]">
                                {elem.time}
                              </span>
                            </div>
                            <div className="flex">
                              <div className="flex">
                                <span className="text-[20px] sm:text-[14px] text-start text-[#ffffffb3]">
                                  {elem.caption}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="sm:w-full md:hidden flex items-center mx-2 lg:mx-0">
                            <a
                              className="flex items-center text-white hover:text-[#f5c518]"
                              href="#"
                            >
                              <span className="font-bold flex items-center text-[20px]">
                                Browser trailers
                              </span>

                              <span className="w-6 h-6 text-[24px] flex justify-center items-center pt-1">
                                <MdKeyboardArrowRight />
                              </span>
                            </a>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
            <SliderNavBtn />
          </Swiper>

          <div className="hidden w-[330px] h-[450px] xl:w-[404px] xl:h-[564px] ms-2 lg:flex flex-col justify-between">
            <div>
              <span className="text-[#f5c518] font-bold text-[20px]">
                Up next
              </span>
            </div>
            <div className="h-[462px]">
              <Swiper
                direction={"vertical"}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 5000,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {appmain.Trailer?.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="w-full h-[154px] flex bg-[#000000]">
                        <div className="w-full h-[154px] flex Back2 hover:text-yellow-500 cursor-pointer">
                          <div className="w-[112px] h-full flex justify-center items-center">
                            <div className="w-[88px] h-[130px] relative">
                              <img
                                className="w-[88px] h-[130px]"
                                src={item.cover}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-[275px] pt-[12px]">
                            <div className="w-full h-[130px] flex flex-col">
                              <div className="w-full flex pb-4">
                                <div className="w-[15%] h-[32px]">
                                  <span>
                                    <svg
                                      width="32"
                                      height="32"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      role="presentation"
                                    >
                                      <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                                      <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="w-[80%] h-[32px] text-[14px] flex items-end text-white">
                                  <span>{item.time}</span>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="w-[275px] flex">
                                  <span className="flex justify-start items-center text-[16px] text-start text-white">
                                    {item.title}
                                  </span>
                                </div>
                                <div className="w-[275px] flex">
                                  <span className="flex justify-start items-center text-[14px] text-start text-white">
                                    {item.caption}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex items-center ps-4">
              <a
                className="flex items-center text-white hover:text-[#f5c518]"
                href="#"
              >
                <span className="font-bold flex items-center text-[20px]">
                  Browser trailers
                </span>

                <span className="w-6 h-6 text-[24px] flex justify-center items-center pt-1">
                  <MdKeyboardArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
