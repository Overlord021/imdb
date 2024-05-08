import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "./styles.css";
// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { MyContext } from "../../../../App/App";

const FeatureItem = () => {
  const { appmain } = useContext(MyContext);
  return (
    <div className="w-full flex justify-center mt-16">
      <div className="w-full lg:w-[1024px] xl:w-[1280px] flex">
        <div className="w-full lg:w-[70%] bg-[#121212] lg:bg-transparent xl:w-[900px] pb-8">
          <div className="w-full">
            <h3 className="text-[32px] ms-2 pb-6 font-bold text-[#f5c518]">
              Featured today
            </h3>
          </div>
          <div className="w-full">
            <Swiper
              slidesPerView={2}
              slidesPerGroup={2}
              centeredSlides={false}
              freeMode={true}
              navigation={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
                {appmain.Feature?.map((elem) => {
                  return (
                    <>
                      <SwiperSlide key={elem.id}>
                        <div className="w-full flex flex-col bg-[#121212] lg:bg-[#000]">
                          <div className="w-full px-2 flex justify-between">
                            <img  src={elem.image} />
                          </div>
                          <div className="w-full flex flex-col text-start px-2">
                            <div className="w-full">
                              <a className="hover:underline" href={elem.link}>{elem.title}</a>
                            </div>
                            <div className="w-full">
                              <a className="hover:underline text-[#5799ef]" href={elem.link}>{elem.caption}</a>
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
        <div className="hidden w-[380px] lg:flex flex-col"></div>
      </div>
    </div>
  );
};

export default FeatureItem;
