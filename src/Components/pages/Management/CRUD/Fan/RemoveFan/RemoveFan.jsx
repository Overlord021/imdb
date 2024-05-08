import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const RemoveFan = () => {
  const [id, setId] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const removeFanPost = async () => {
      try {
        let res = await axios.delete(
          `https://662e2b04a7dda1fa378c4088.mockapi.io/FanFav/${id}`
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    removeFanPost();
    document.getElementById("my_modal_Fan_Rmv").close();
    Swal.fire({
      title: "Done!",
      text: "Your Post Has Been Successfully Removed!",
      icon: "success",
      confirmButtonText: "Close",
    });
  };
  return (
    <>
      <button
        className="btn btn-xl bg-red-800 hover:bg-red-600 w-40 lg:w-56 border-0 rounded-md"
        onClick={() => document.getElementById("my_modal_Fan_Rmv").showModal()}
      >
        Remove From Fan Favorites
      </button>
      <dialog id="my_modal_Fan_Rmv" className="modal">
        <div className="modal-box bg-white">
          <div className="w-full flex justify-center">
            <div
              className="w-[90%] h-full py-10 bg-white flex flex-col items-center"
              style={{ boxShadow: "1px 1px 15px #fff" }}
            >
              <form
                action="#"
                className="w-[90%]"
                method="post"
                onSubmit={(e) => submitHandler(e)}
              >
                <div className="mb-12">
                  <label className="text-black" htmlFor="id">
                    id
                  </label>
                  <input
                    className="w-full py-1.5 ps-1 rounded-md bg-[#1a1a1a]"
                    placeholder="id........!!!"
                    type="text"
                    onChange={(e) => setId(e.target.value)}
                  />
                  {id.length===0?<span className="text-red-500 capitalize">Please Fill Field</span>:null}
                  {id.length > 3 ? (
                  <p className="text-red-500 capitalize">id is required</p>
                ) : null}
                </div>
                <div className="flex justify-center">
                  <button className="btn btn-sm w-56 rounded-md bg-red-800 hover:bg-red-600 hover:border-none border-none">
                    Remove
                  </button>
                </div>
              </form>
            </div>
          </div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
              ✕
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default RemoveFan;
