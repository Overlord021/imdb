import React from "react";
import { Link } from "react-router-dom";

const Unavailable = () => {
  return (
    <>
      <div className="w-full h-96 flex flex-col items-center justify-center">
        <h3 className="text-red-500 text-5xl font-bold mb-12">This Page Not Found</h3>
        <Link to="/imdb/">
          <button className="btn btn-sm w-52 py-6 rounded-md bg-black text-white border-[1px] border-white hover:border-[1px] hover:border-white">
            <span className="flex w-full h-full text-[18px] justify-center items-center">
              Back
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Unavailable;
