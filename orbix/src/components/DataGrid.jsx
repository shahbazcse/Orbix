export default function DataGrid() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-wrap gap-8 px-12 justify-center items-center mx-12 mb-4">
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
        <div className="bg-orange-400 rounded-md h-52 w-52"></div>
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
