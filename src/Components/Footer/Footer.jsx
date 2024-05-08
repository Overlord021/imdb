import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { CiShare1 } from "react-icons/ci";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-2 lg:mt-16 mb-12">
        <div className="w-full lg:w-[1024px] flex flex-col">
          <div className="w-full flex justify-center mt-8 mb-0 py-4 lg:py-0 bg-[#ffffff1a] lg:bg-transparent lg:mt-0 lg:mb-12">
            <button className="px-4 lg:px-8 flex py-2 text-black rounded-md bg-[#f5c518] hover:bg-[#E2B616] lg:hidden">
              <span>Get the IMDb app</span>
            </button>
            <button className="px-4 lg:px-8 btn btn-sm hidden lg:flex text-black rounded-md bg-[#f5c518] hover:bg-[#E2B616]">
              Sign in for more access
            </button>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-[50%] flex flex-col justify-center items-center">
              <div className="w-[95%] flex flex-col items-center p-4 justify-center lg:border lg:border-[#1F1F1F] rounded-lg text-white">
                <div className="w-full hidden lg:flex justify-center items-center">
                  <span className="text-[20px] font-bold">
                    Follow IMDb on social
                  </span>
                </div>
                <div className="w-[68%] flex justify-between items-center text-[24px]">
                  <a
                    className="w-[48px] h-[48px] rounded-full flex justify-center items-center hover:bg-[#141414]"
                    href="#"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    className="w-[48px] h-[48px] rounded-full flex justify-center items-center hover:bg-[#141414]"
                    href="#"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="w-[48px] h-[48px] rounded-full flex justify-center items-center hover:bg-[#141414]"
                    href="#"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    className="w-[48px] h-[48px] rounded-full flex justify-center items-center hover:bg-[#141414]"
                    href="#"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    className="w-[48px] h-[48px] rounded-full flex justify-center items-center hover:bg-[#141414]"
                    href="#"
                  >
                    <BiLogoFacebookSquare />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] hidden lg:flex justify-center">
              <div className="w-[95%] flex justify-between p-4 border items-center border-[#1F1F1F] rounded-lg text-white">
                <div className="w-[50%] flex flex-col">
                  <div className="w-full flex items-center">
                    <span className="text-[20px] text-white">
                      Get the IMDb app
                    </span>
                  </div>
                  <div className="w-full flex items-center">
                    <span className="text-[16px] text-[#ffffffb3]">
                      For Android and iOS
                    </span>
                  </div>
                </div>
                <div className="w-[66px] h-[66px] flex justify-center items-center bg-white rounded-md">
                  <img
                    className="w-[58px] h-[58px]"
                    src="./Images/QRCode.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center bg-[#ffffff0f] py-4 lg:hidden">
            <button className="px-8 lg:px-8 py-2 flex lg:hidden text-[#5799ef] hover:bg-[#262B32] rounded-md bg-[#ffffff14]">
              Sign in for more access
            </button>
            </div>
          </div>

          <div className="w-full flex justify-center lg:w-[1024px] flex-wrap pt-12 pb-2">
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Help</span>
                <span className="ms-1">
                  <CiShare1 />
                </span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Site Index</span>
                <span className="ms-1">
                  <CiShare1 />
                </span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>IMDBPro</span>
                <span className="ms-1">
                  <CiShare1 />
                </span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Box Office Mojo</span>
                <span className="ms-1">
                  <CiShare1 />
                </span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>License IMDb Data</span>
                <span className="ms-1">
                  <CiShare1 />
                </span>
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center lg:w-[1024px] flex-wrap pt-4">
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Press Room</span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Advertising</span>
                <span className="ms-1">
                  <CiShare1 />
                </span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Jobs</span>
                <span className="ms-1">
                  <CiShare1 />
                </span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Conditions of Use</span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Privacy Policy</span>
              </a>
            </div>
            <div className="max-w-[250px] flex mx-6">
              <a
                className="flex hover:underline justify-center items-center text-[16px] font-semibold"
                href="#"
              >
                <span>Your Ads Privacy Choices</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
