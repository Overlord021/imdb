import React from "react";
import Fav from "./Fav/Fav";
import TopImdb from "./TopImdb/TopImdb";
import AddFan from "./CRUD/Fan/AddFan/AddFan";
import AddTopTen from "./CRUD/TopTen/AddTopTen/AddTopTen";
import RemoveTopTen from "./CRUD/TopTen/RemoveTopTen/RemoveTopTen";
import RemoveFan from "./CRUD/Fan/RemoveFan/RemoveFan";
import EditTopTen from "./CRUD/TopTen/EditTopTen/EditTopTen";
import EditFan from "./CRUD/Fan/EditFan/EditFan";

const Management = () => {
  return (
    <>
      {/* <Routes>
        </Routes> */}
      <div className="w-full flex flex-col items-center">
        <TopImdb />
        <div className="w-full lg:w-[1024px] xl:w-[1280px] flex flex-col lg:flex-row lg:justify-center">
          <div className="flex lg:justify-center">
            <AddTopTen />
          </div>
          <div className="lg:mx-6 flex lg:justify-center my-2 lg:my-0">
            <EditTopTen />
          </div>
          <div className="flex lg:justify-center">
            <RemoveTopTen />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <Fav />
        <div className="w-full lg:w-[1024px] xl:w-[1280px] flex flex-col lg:flex-row lg:justify-center">
          <div className="flex lg:justify-center">
            <AddFan />
          </div>
          <div className="lg:mx-6 flex lg:justify-center my-2 lg:my-0">
            <EditFan />
          </div>
          <div className="flex lg:justify-center">
            <RemoveFan />
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;
