export default function Form() {
  return (
    <div className="bg-[#ffffff] flex flex-col gap-6 justify-center items-center p-4 py-8 text-lg">
      <div className="font-bold text-3xl">Search Rockets</div>
      <div className="flex gap-6 justify-center items-center">
        <div className="flex gap-6">
          <div className="flex gap-3">
            <span className="font-bold">Status: </span>
            <select className="bg-[#EDF0F4] px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300">
              <option value="active">Active</option>
              <option value="retired">Retired</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Original Launch: </span>
            <select className="bg-[#EDF0F4] px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300">
              <option value="active">Active</option>
              <option value="retired">Retired</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Type: </span>
            <select className="bg-[#EDF0F4] px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300">
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              <option value="Type 3">Type 3</option>
            </select>
          </div>
        </div>
        <div className="bg-slate-800 hover:bg-black rounded-md text-white font-semibold px-4 py-1 cursor-pointer">
          Search
        </div>
      </div>
    </div>
  );
}
