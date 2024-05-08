import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import axios from "axios";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import MainSection from "../pages/MainSection/MainSection";
import Management from "../pages/Management/Management";
import Unavailable from "../pages/Unavailable/Unavailable";
import { MdKeyboardArrowUp } from "react-icons/md";
import Footer from "../Footer/Footer";
export const MyContext = React.createContext();
const App = () => {
  const [appmain, setAppMain] = useState([]);
  const [error, setError] = useState("");
  // console.log(appmain)
  const fetchAppMain = async () => {
    try {
      let res = await axios(
        "https://overlord021.github.io/imdb-file/Database.json"
      );
      setAppMain(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchAppMain();
  }, []);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <MyContext.Provider value={{ appmain, error }}>
          <Navigation />
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="back-to-top-button ms-[50%] -translate-x-[50%] z-[5] flex justify-center items-center fixed bg-white text-black w-[120px] h-[32px] rounded-full"
          >
            <span>
              <MdKeyboardArrowUp />
            </span>
            <span>Back to Top</span>
          </button>
        )}
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route
            path="/Management/*"
            element={<Management />}
          />
          <Route path="*" element={<Unavailable />} />
        </Routes>
        <Footer/>
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
