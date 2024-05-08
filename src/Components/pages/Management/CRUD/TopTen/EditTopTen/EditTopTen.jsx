import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditTopTen = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://662e2b04a7dda1fa378c4088.mockapi.io/TopTen/${id}`,
        { title, image, rate,id }
      );
      if (res.status === 200) {
        Swal.fire({
          title: "Done!",
          text: "Your Post Has Been Updated Successfully!",
          icon: "success",
          confirmButtonText: "Close",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
    document.getElementById("my_modal_Top_Edit").close();
  };
  return (
    <>
       <button
        className="btn btn-xl bg-blue-800 hover:bg-blue-600 w-40 border-0 rounded-md"
        onClick={() =>
          document.getElementById("my_modal_Top_Edit").showModal()
        }
      >
        Edit Topten
      </button>
      <dialog id="my_modal_Top_Edit" className="modal">
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
                onSubmit={submitHandler}
              >
                <div className="mb-2">
                  <label className="text-black" htmlFor="ID">
                    ID
                  </label>
                  <input
                    className="w-full py-1.5 ps-1 rounded-md bg-[#1a1a1a]"
                    placeholder="ID........!!!"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                  {id.length===0?<span className="text-red-500 capitalize">Please Fill Field</span>:null}
                  {id.length > 3 ? (
                  <p className="text-red-500 capitalize">id is required</p>
                ) : null}
                </div>
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
                  {title.length === 0 ? (
                    <p className="text-red-500 capitalize">Please Fill Field</p>
                  ) : null}
                  {title.length === 1 ? (
                    <p className="text-red-500 capitalize">title more than 1 character</p>
                  ) : null}
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
                  {image.length === 0 ? (
                  <p className="text-red-500 capitalize">Please Fill Field</p>
                ) : null}
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
                  />{rate.length === 0 ? (
                  <p className="text-red-500 capitalize">Please Fill Field</p>
                ) : null}
                {rate.length > 3 ? (
                  <p className="text-red-500 capitalize">rate is required</p>
                ) : null}
                </div>
                <div className="flex justify-center">
                  <button className="btn btn-sm w-40 rounded-md bg-blue-800 hover:bg-blue-600 hover:border-none border-none">
                    Edit
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

export default EditTopTen;
