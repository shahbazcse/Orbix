import { useState } from "react";
import Modal from "./Modal";

export default function DataGrid() {
  const [openModal, setOpenModal] = useState(false);

  const dataCount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="bg-[#ffffff] flex flex-col justify-center items-center lg:px-[8rem]">
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="flex flex-wrap gap-8 px-12 justify-center items-center mx-12 mb-4">
        {dataCount.slice(0, 10).map((n) => (
          <div
            key={n}
            onClick={() => setOpenModal(true)}
            className="bg-orange-400 rounded-md h-[16rem] w-[16rem] cursor-pointer"
          ></div>
        ))}
      </div>
      <div className="flex gap-4 my-2 border-[#EDF0F4] border-[3px] rounded-lg justify-center items-center h-[3rem]">
        <div className="px-2 py-1">page 1</div>
        <div className="px-2 py-1">page 1</div>
        <div className="px-2 py-1">page 1</div>
        <div className="px-2 py-1">page 1</div>
        <div className="px-2 py-1">page 1</div>
        <div className="px-2 py-1">page 1</div>
        <div className="px-2 py-1">page 1</div>
      </div>
      <div className="flex gap-8 my-3 justify-between items-center text-white">
        <div className="h-[2rem] w-[5rem] pt-1 text-center items-center bg-slate-800 hover:bg-black rounded-md cursor-pointer">
          Previous
        </div>
        <div className="h-[2rem] w-[5rem] pt-1 text-center items-center bg-slate-800 hover:bg-black rounded-md cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
}
