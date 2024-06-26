import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { MyContext } from "../../App/App";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLocalMovies,
  MdPeople,
  MdStars,
} from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { AiFillPlaySquare } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";

const NavDesktop = () => {

  const { appmain } = useContext(MyContext);
  const [isHidden, setIsHidden] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(new Array(appmain.length).fill(false));
  const [isArrowUp, setIsArrowUp] = useState(false);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "MdLocalMovies":
        return <MdLocalMovies />;
      case "FaTv":
        return <FaTv />;
      case "MdStars":
        return <MdStars />;
      case "MdPeople":
        return <MdPeople />;
      case "AiFillPlaySquare":
        return <AiFillPlaySquare />;
      case "IoEarthSharp":
        return <IoEarthSharp />;
      default:
        return null;
    }
  };

  const handleLogoClick = () => {
    setIsHidden(true);
    setIsMenuOpen(false);
    setIsOpen(false);
    setIsArrowUp(false);
  };

  const handleManagementClick = () => {
    setIsHidden(true);
    setIsMenuOpen(false);
    setIsOpen(false);
    setIsArrowUp(false);
  };

  const handleCloseClick = () => {
    setIsHidden(true);
    setIsMenuOpen(false);
    setIsOpen(false);
    setIsArrowUp(false);
  };
  
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    setIsHidden(false);
    setIsOpen(false);
    setIsArrowUp(false);
  };

  const arrowToggle = () => {
    setIsArrowUp(!isArrowUp);
  };

  const toggleOpen = (index) => {
    const updatedOpenState = new Array(appmain.length).fill(false);
    updatedOpenState[index] = !isOpen[index];
    setIsOpen(updatedOpenState);
  };

  return (
    <>
      <div className="w-full h-[56px] p-0 fixed flex justify-center z-10 items-center bg-[#121212]">
        <div className="xl:w-[1280px] lg:w-[1024px] w-[100vw] flex justify-between lg:justify-between md:justify-center items-center">
          {/****************************** logo and menu ****************************** */}
          <div className="xl:navbar-start md:w-[140px] lg:w-[180px] xl:me-4 xl:flex xl:flex-row xl:justify-between lg:navbar-start  lg:flex lg:flex-row lg:justify-between md:navbar-start md:flex flex flex-row-reverse md:justify-between">
            <Link to="/imdb/">
              <a
                className="btn no-animation btn-sm p-0 flex border-none hover:bg-transparent hover:border-none md:mx-1 mdd:mx-0 text-xl"
                href="#"
              >
                <svg
                  id="home_img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="32"
                  viewBox="0 0 64 32"
                  version="1.1"
                >
                  <g fill="#F5C518">
                    <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>
                  </g>
                  <g transform="translate(8.000000, 7.000000)" fill="#000000">
                    <polygon points="0 18 5 18 5 0 0 0"></polygon>
                    <path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>
                    <path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>
                    <path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>
                  </g>
                </svg>
              </a>
            </Link>

            <button
              className="btn no-animation btn-sm bg-transparent hover:bg-[#252525] border-none rounded-sm flex text-white"
              onClick={handleMenuOpen}
            >
              <svg
                className="swap-off fill-current float-end"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <span className="hidden lg:flex">Menu</span>
            </button>
          </div>

          {/****************************** logo and menu ****************************** */}

          {/****************************** Searchbar ****************************** */}

          <div className="hidden xl:w-[55%] xl:navbar-center xl:hover:border-none xl:flex xl:justify-center xl:items-center lg:w-[50%] lg:navbar-center lg:hover:border-none lg:flex lg:justify-center lg:items-center lg:mx-0 mdd:w-[65%] md-flex md:w-[50%] md:navbar-center md:hover:border-none md:flex md:justify-center md:items-center md:mx-1">
            <form className="w-full rounded-md flex justify-center items-center">
              <div className=" h-[32px] sm:col-span-3 border-none">
                <div className="border-none">
                  <select
                    className="bg-white w-full text-black rounded-md rounded-r-none h-[32px] border-none focus:outline-none py-1.5 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option selected>All</option>
                    <option>Titles</option>
                    <option>TV Episodes</option>
                    <option>Celebs</option>
                    <option>Companies</option>
                    <option>Keywords</option>
                  </select>
                </div>
              </div>

              <label className="xl:w-[86%] lg:w-[78%] md:w-[86%] h-[32px] int bg-white text-black focus:border-none border-l-[1px] border-l-[#B2B2B2] flex items-center rounded-l-none rounded-md">
                <input
                  type="text"
                  className="grow bg-white outline-none ps-2"
                  placeholder="Search IMDb"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70 me-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </form>
          </div>

          {/****************************** Searchbar ****************************** */}

          {/****************************** Nav Items ****************************** */}

          <div className="lg:w-[340px] md:w-[180px] xl:ms-4 xl:xl:navbar-end xl:flex xl:justify-between  lg:navbar-end lg:flex lg:justify-between  md:justify-between md:flex ">
            {/****************************** imdbpro ****************************** */}
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end border-none hidden lg:flex">
              <a className="btn no-animation btn-sm bg-transparent hover:bg-[#252525] border-none rounded-sm">
                <span>
                  <svg
                    className="text-white"
                    width="52"
                    height="14"
                    viewBox="0 0 52 14"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g fill="currentColor">
                      <rect x="0" y="1" width="3.21" height="12.34"></rect>
                      <path d="M10,1 L9.3,6.76 L8.84,3.63 C8.7,2.62 8.58,1.75 8.45,1 L4.3,1 L4.3,13.34 L7.11,13.34 L7.11,5.19 L8.3,13.34 L10.3,13.34 L11.42,5 L11.42,13.33 L14.22,13.33 L14.22,1 L10,1 Z"></path>
                      <path d="M19.24,3.22 C19.3711159,3.29185219 19.4602235,3.42180078 19.48,3.57 C19.5340993,3.92393477 19.554191,4.28223587 19.54,4.64 L19.54,9.42 C19.578852,9.92887392 19.5246327,10.4405682 19.38,10.93 C19.27,11.12 18.99,11.21 18.53,11.21 L18.53,3.11 C18.7718735,3.09406934 19.0142863,3.13162626 19.24,3.22 Z M19.24,13.34 C19.8163127,13.3574057 20.3928505,13.3138302 20.96,13.21 C21.3245396,13.1481159 21.6680909,12.9969533 21.96,12.77 C22.2288287,12.5438006 22.4209712,12.2398661 22.51,11.9 C22.643288,11.1679419 22.6969338,10.4236056 22.67,9.68 L22.67,5.34 C22.6662002,4.55669241 22.6060449,3.77467335 22.49,3 C22.43037,2.59841431 22.260779,2.22116094 22,1.91 C21.6636187,1.56093667 21.2326608,1.317654 20.76,1.21 C19.7709421,1.02848785 18.7647002,0.958050915 17.76,1 L15.32,1 L15.32,13.34 L19.24,13.34 Z"></path>
                      <path d="M27.86,10.34 C27.8769902,10.7218086 27.8501483,11.1043064 27.78,11.48 C27.72,11.63 27.46,11.71 27.26,11.71 C27.0954951,11.7299271 26.9386363,11.6349863 26.88,11.48 C26.7930212,11.1542289 26.7592527,10.8165437 26.78,10.48 L26.78,7.18 C26.7626076,6.84408875 26.7929089,6.50740774 26.87,6.18 C26.9317534,6.03447231 27.0833938,5.94840616 27.24,5.97 C27.43,5.97 27.7,6.05 27.76,6.21 C27.8468064,6.53580251 27.8805721,6.87345964 27.86,7.21 L27.86,10.34 Z M23.7,1 L23.7,13.34 L26.58,13.34 L26.78,12.55 C27.0112432,12.8467609 27.3048209,13.0891332 27.64,13.26 C28.0022345,13.4198442 28.394069,13.5016184 28.79,13.5 C29.2588971,13.515288 29.7196211,13.3746089 30.1,13.1 C30.4399329,12.8800058 30.6913549,12.5471372 30.81,12.16 C30.9423503,11.6167622 31.0061799,11.0590937 31,10.5 L31,7 C31.0087531,6.51279482 30.9920637,6.02546488 30.95,5.54 C30.904474,5.28996521 30.801805,5.05382649 30.65,4.85 C30.4742549,4.59691259 30.2270668,4.40194735 29.94,4.29 C29.5869438,4.15031408 29.2096076,4.08232558 28.83,4.09 C28.4361722,4.08961884 28.0458787,4.16428368 27.68,4.31 C27.3513666,4.46911893 27.0587137,4.693713 26.82,4.97 L26.82,1 L23.7,1 Z"></path>
                    </g>
                    <g fill="#02ACD3">
                      <path d="M32.13,1 L35.32,1 C35.9925574,0.978531332 36.6650118,1.04577677 37.32,1.2 C37.717112,1.29759578 38.0801182,1.50157071 38.37,1.79 C38.6060895,2.05302496 38.7682605,2.37391646 38.84,2.72 C38.935586,3.27463823 38.9757837,3.8374068 38.96,4.4 L38.96,5.46 C38.9916226,6.03689533 38.9100917,6.61440551 38.72,7.16 C38.5402933,7.53432344 38.2260614,7.82713037 37.84,7.98C37.3049997,8.18709035 36.7332458,8.28238268 36.16,8.26 L35.31,8.26 L35.31,13.16 L32.13,13.16 L32.13,1 Z M35.29,3.08 L35.29,6.18 L35.53,6.18 C35.7515781,6.20532753 35.9725786,6.12797738 36.13,5.97 C36.2717869,5.69610033 36.3308522,5.38687568 36.3,5.08 L36.3,4.08 C36.3390022,3.79579475 36.2713114,3.5072181 36.11,3.27 C35.8671804,3.11299554 35.5771259,3.04578777 35.29,3.08 Z"></path>
                      <path d="M42,4.36 L41.89,5.52 C42.28,4.69 43.67,4.42 44.41,4.37 L43.6,7.3 C43.2290559,7.27725357 42.8582004,7.34593052 42.52,7.5 C42.3057075,7.61238438 42.1519927,7.81367763 42.1,8.05 C42.0178205,8.59259006 41.9843538,9.14144496 42,9.69 L42,13.16 L39.34,13.16 L39.34,4.36 L42,4.36 Z"></path>
                      <path d="M51.63,9.71 C51.6472876,10.3265292 51.6003682,10.9431837 51.49,11.55 C51.376862,11.9620426 51.1639158,12.3398504 50.87,12.65 C50.5352227,13.001529 50.1148049,13.2599826 49.65,13.4 C49.0994264,13.5686585 48.5257464,13.6496486 47.95,13.64 C47.3333389,13.6524659 46.7178074,13.5818311 46.12,13.43 C45.6996896,13.322764 45.3140099,13.1092627 45,12.81 C44.7275808,12.5275876 44.5254637,12.1850161 44.41,11.81 C44.2627681,11.2181509 44.1921903,10.6098373 44.2,10 L44.2,7.64 C44.1691064,6.9584837 44.2780071,6.27785447 44.52,5.64 C44.7547114,5.12751365 45.1616363,4.71351186 45.67,4.47 C46.3337168,4.13941646 47.0688388,3.97796445 47.81,4 C48.4454888,3.98667568 49.0783958,4.08482705 49.68,4.29 C50.1352004,4.42444561 50.5506052,4.66819552 50.89,5 C51.1535526,5.26601188 51.3550281,5.58700663 51.48,5.94 C51.6001358,6.42708696 51.6506379,6.92874119 51.63,7.43 L51.63,9.71 Z M48.39,6.73 C48.412199,6.42705368 48.3817488,6.12255154 48.3,5.83 C48.2091142,5.71223121 48.0687606,5.64325757 47.92,5.64325757 C47.7712394,5.64325757 47.6308858,5.71223121 47.54,5.83 C47.447616,6.12046452 47.4136298,6.42634058 47.44,6.73 L47.44,10.93 C47.4168299,11.2204468 47.4508034,11.5126191 47.54,11.79 C47.609766,11.9270995 47.7570827,12.0067302 47.91,11.99 C48.0639216,12.0108082 48.2159732,11.9406305 48.3,11.81 C48.3790864,11.5546009 48.4096133,11.2866434 48.39,11.02 L48.39,6.73 Z"></path>
                    </g>
                  </svg>
                </span>
              </a>
              <div className="dropdown-content relative pt-3 menu p-0 bg-transparent border-none w-[590px] h-[240px]">
                <img className="w-full" src="./Images/imdbpro.png" alt="" />
                <span className="btn btn-sm w-[200px] absolute bottom-[5%] left-[27%] text-black bg-[#f5c518] hover:bg-[#f7dd95]">
                  Try IMDbPro for FREE
                </span>
              </div>
            </div>
            {/****************************** imdbpro ****************************** */}

            {/****************************** watchlist ****************************** */}
            <a
              className="btn no-animation btn-sm bg-transparent hover:bg-[#252525] border-none rounded-sm hidden lg:flex text-white"
              role="button"
              href="#"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path
                  d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Watchlist</span>
            </a>
            {/****************************** watchlist ****************************** */}

            {/****************************** signin ****************************** */}
            <a
              className="btn no-animation btn-sm bg-transparent hover:bg-[#252525] border-none rounded-sm md:mx-1 mdd:mx-0 text-white"
              role="button"
              href="#"
            >
              <span>Sign In</span>
            </a>
            {/****************************** signin ****************************** */}

            {/****************************** UseApp ****************************** */}
            <a
              className="btn no-animation btn-sm lg:hidden bg-[#f5c518] hover:bg-[#E2B616] border-none rounded-md text-white"
              role="button"
              href="#"
            >
              <span className="text-black">Use App</span>
            </a>
            {/****************************** UseApp ****************************** */}

            {/****************************** EN ****************************** */}
            <label
              className="btn no-animation btn-sm bg-transparent hidden lg:flex hover:bg-[#252525] border-none rounded-sm text-white"
              role="button"
            >
            <div className="w-full flex justify-center items-center">
              <span className="font-bold text-md">EN</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
              </svg>
            </div>
              
            </label>
            {/****************************** EN ****************************** */}
          </div>
          {/****************************** Nav Items ****************************** */}
        </div>
      </div>
      <div
        className={`w-[280px] lg:w-full h-[100vh] flex fixed z-10 left-0 ${
          isHidden ? "hidden" : ""
        }`}
      >
        <div className="w-full h-[100vh] bg-[#1F1F1F] flex flex-col items-center absolute z-50 ">
          <div className="w-[280px] h-[56px] lg:w-[1024px] my-4 lg:my-6 flex justify-between lg:justify-between items-center">
            <Link className="hidden lg:flex" to="/imdb/" onClick={handleLogoClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="56"
                viewBox="0 0 64 32"
                version="1.1"
              >
                <g fill="#F5C518">
                  <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>
                </g>
                <g
                  transform="translate(8.000000, 7.000000)"
                  fill="#000000"
                  fill-rule="nonzero"
                >
                  <polygon points="0 18 5 18 5 0 0 0"></polygon>
                  <path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>
                  <path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>
                  <path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>
                </g>
              </svg>
            </Link>
            <Link className="flex ms-2" to="/Management">
              <button
                className="btn bg-[#f5c518] hover:bg-[#E2B616] btn-outline text-[#1F1F1F] border-none"
                onClick={handleManagementClick}
              >
                Management
              </button>
            </Link>
            <button
              className="btn btn-circle text-[#C7C7C7] hover:text-[#c7c7c7] bg-transparent hover:bg-[#252525] lg:bg-[#f5c518] lg:hover:bg-[#E2B616] btn-outline lg:text-[#1F1F1F] lg:hover:text-[#1f1f1f] border-none"
              onClick={handleCloseClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="w-[280px] h-full lg:w-[1024px] flex flex-col  overflow-auto flex-wrap">
            <span className="flex w-full relative mb-6 lg:mb-0 justify-end lg:justify-between flex-wrap">
              {appmain.Menu?.map((elem, index) => {
                const posTwo = index === 1 ? "lg:h-[240px]" : "";
                const posFour = index === 3 ? "lg:mt-40" : "";
                const posFive =
                  index === 4
                    ? "lg:absolute lg:bottom-[20%] lg:right-[50%] lg:translate-x-[50%]"
                    : "";
                const posSix = index === 5 ? "lg:mt-40" : "";

                return (
                  <span
                    className={`w-full lg:w-[30%] flex flex-col text-[#8f8f8f] my-2 lg:my-0 hover:text-white ${posTwo} ${posFour} ${posFive} ${posSix}`}
                    key={elem.id}
                  >
                    <a
                      className="w-full text-[24px] flex cursor-default text-[#8f8f8f] hover:text-white"
                      onClick={() => toggleOpen(index)}
                    >
                      <span className="w-[12%] h-[36px] text-[24px] flex justify-center items-center  lg:text-[#F5C518] lg:hover:text-[#F5C518]">
                        {getIconComponent(elem.icon)}
                      </span>
                      <span className="w-[84%] h-[36px] text-[20px] pb-1 lg:pb-1.5 font-normal lg:text-[24px] lg:font-bold flex  justify-between items-center">
                        <span className="text-[#DADADA] ps-2 lg:ps-0">
                          {elem.name}
                        </span>{" "}
                        <span className="flex me-[2px] lg:hidden">
                          {isOpen[index] ? (
                            <MdKeyboardArrowUp />
                          ) : (
                            <MdKeyboardArrowDown />
                          )}
                        </span>
                      </span>
                    </a>
                    <span className={` ${isOpen[index] ? "flex-col" : "hidden lg:flex lg:flex-col"}`}>
                      {elem.lists?.map((item) => {
                        return (
                          <span
                            className="my-[6px] ms-9 flex text-white"
                            key={item.id}
                          >
                            <a className="hover:underline" href={item.link}>
                              {item.name}
                            </a>
                          </span>
                        );
                      })}
                    </span>
                  </span>
                );
              })}
            </span>
            <div className="w-full ps-2 flex lg:hidden hover:text-[#dadada]">
              <div className="w-[85%] flex flex-col text-[#dadada] ">
                <span className="font-bold">IMDbPro</span>
                <span className="font-semibold">
                  For Industry Professionals
                </span>
              </div>
              <div className="w-[15%] flex justify-center items-center">
                <CiShare1 />
              </div>
            </div>

            <div className="w-full mt-4 lg:hidden" onClick={() => arrowToggle()}>
              <div className="flex ps-2 text-[#8F8F8F] hover:text-[#dadada]">
                <div className="w-[85%] flex flex-col ">
                  <span className="font-bold">Language</span>
                  <span className="text-[#dadada] font-semibold">
                    English(United States)
                  </span>
                </div>
                <div className="w-[15%] flex justify-center items-center">
                  {isArrowUp ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDesktop;
