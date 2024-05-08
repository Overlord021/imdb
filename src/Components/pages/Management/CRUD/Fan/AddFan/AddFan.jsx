import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddFan = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const addFanPost = async () => {
      try {
        let res = await axios.post("https://662e2b04a7dda1fa378c4088.mockapi.io/FanFav",{
            title,image,rate
          });
          if (res.status === 201){
            Swal.fire({
              title: "Done!",
              text: "Your Post Has Been Successfully Added!",
              icon: "success",
              confirmButtonText: 'Close'
            });
          }
      } catch (error) {
        console.log(error.message);
      }
    };
    addFanPost();
    document.getElementById("my_modal_Fan_Add").close();
    
  };
  return (
    <>
      <button
        className="btn btn-xl bg-green-800 hover:bg-green-600 w-40 border-0 rounded-md"
        onClick={() => document.getElementById("my_modal_Fan_Add").showModal()}
      >
        Add to Fan Favorite
      </button>
      <dialog id="my_modal_Fan_Add" className="modal">
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
                <div className="mb-2">
                  <label className="text-black" htmlFor="Title">
                    Title
                  </label>
                  <input
                    className="w-full py-1.5 ps-1 rounded-md bg-[#1a1a1a]"
                    placeholder="Title........!!!"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="text-black" htmlFor="Image">
                    Image
                  </label>
                  <input
                    className="w-full py-1.5 ps-1 rounded-md bg-[#1a1a1a]"
                    placeholder="Image........!!!"
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="mb-10">
                  <label className="text-black" htmlFor="Rate">
                    Rate
                  </label>
                  <input
                    className="w-full py-1.5 ps-1 rounded-md bg-[#1a1a1a]"
                    placeholder="Rate........!!!"
                    type="text"
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
                <div className="flex justify-center">
                  <button className="btn btn-sm w-40 rounded-md bg-green-800 hover:bg-green-600 hover:border-none border-none">
                    Add
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

export default AddFan;
