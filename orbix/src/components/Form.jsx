import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Form() {
  const [query, setSetQuery] = useState("");

  const { filter, setFilter } = useContext(AppContext);
  const updateFilter = (e) => {
    if (e.target.name === "status") {
      setFilter({ ...filter, status: e.target.value, query: "" });
      setSetQuery("");
    }
    if (e.target.name === "launch") {
      setFilter({ ...filter, launch: e.target.value, query: "" });
      setSetQuery("");
    }
    if (e.target.name === "type") {
      setFilter({ ...filter, type: e.target.value, query: "" });
      setSetQuery("");
    }
  };

  const handleClearFilter = () => {
    setSetQuery("");
    setFilter({
      ...filter,
      query: "",
      status: "Select Status",
      launch: "Select Launch Year",
      type: "Select Type",
    });
  };

  return (
    <div className="form bg-black flex flex-col gap-6 justify-center items-center p-4 py-8 text-lg text-white">
      <div className="font-bold mt-4 mb-6 text-4xl text-left font-mont backdrop-blur-md">
        Explore Capsules
      </div>
      <div className="flex gap-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6 font-barlow text-2xl">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="search"
              value={query}
              onChange={(e) => setSetQuery(e.target.value)}
              placeholder="Search Id or Serial No"
              className="border shadow-md shadow-gray-500 text-black border-slate-200 px-4 py-1 rounded-md"
            />
            <div className="flex gap-3 justify-center items-center">
              <div
                onClick={() => setFilter({ ...filter, query: query })}
                className="bg-gray-300 hover:bg-gray-400 font-bold text-black rounded-md px-4 py-1 cursor-pointer"
              >
                Search
              </div>
              <div
                onClick={handleClearFilter}
                className="shadow-lg bg-gray-300 hover:bg-gray-400 text-[18px] font-bold text-black h-8 rounded-md px-2 cursor-pointer"
              >
                Clear
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex gap-3">
              <span className="font-bold backdrop-blur-md">Status: </span>
              <select
                name="status"
                value={filter.status}
                onChange={(e) => updateFilter(e)}
                className="bg-[#EDF0F4] text-black px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300"
              >
                <option value="Select Status">Select Status</option>
                <option value="active">Active</option>
                <option value="retired">Retired</option>
                <option value="unknown">Unknown</option>
                <option value="destroyed">Destroyed</option>
              </select>
            </div>
            <div className="flex gap-3">
              <span className="font-bold backdrop-blur-md">
                Original Launch:{" "}
              </span>
              <select
                name="launch"
                value={filter.launch}
                onChange={(e) => updateFilter(e)}
                className="bg-[#EDF0F4] text-black px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300"
              >
                <option value="Select Launch Year">Select Launch Year</option>
                <option value="2010">2010</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="null">Upcoming</option>
              </select>
            </div>
            <div className="flex gap-3">
              <span className="font-bold backdrop-blur-md">Type: </span>
              <select
                name="type"
                value={filter.type}
                onChange={(e) => updateFilter(e)}
                className="bg-[#EDF0F4] text-black px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-300"
              >
                <option value="Select Type">Select Type</option>
                <option value="Dragon 1.0">Dragon 1.0</option>
                <option value="Dragon 1.1">Dragon 1.1</option>
                <option value="Dragon 2.0">Dragon 2.0</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
