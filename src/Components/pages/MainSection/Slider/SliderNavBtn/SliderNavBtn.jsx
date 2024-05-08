import React from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSwiper } from "swiper/react";

const SliderNavBtn = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
              className=" w-[50px] z-[999] hidden absolute top-[45%] left-0 -translate-y-[100%] h-[66px] border-[1px] border-[#B8BAB7] rounded-md bg-[#12121273] md:flex items-center justify-center text-[48px] hover:cursor-pointer outline-none"
              onClick={() => swiper.slidePrev()}
            >
              <span className="hover:text-[#f5c518] text-white transition-all duration-500">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </button>
            <button
              className=" w-[50px] z-[999] hidden absolute top-[45%] right-0 -translate-y-[100%] h-[66px] border-[1px] border-[#B8BAB7] rounded-md bg-[#12121273] md:flex items-center justify-center text-[48px] hover:cursor-pointer outline-none"
              onClick={() => swiper.slideNext()}
            >
              <span className="hover:text-[#f5c518] text-white transition-all duration-500">
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
    </>
  )
};

export default SliderNavBtn;
