import { createContext, useEffect, useState } from "react";
import { getAllCapsules, getAllRockets } from "../services/DataService";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [capsulesData, setCapsulesData] = useState([]);
  const [rocketsData, setRocketsData] = useState([]);
  const [filter, setFilter] = useState({
    query: "",
    status: "Select Status",
    launch: "Select Launch Year",
    type: "Select Type",
  });

  useEffect(() => {
    (async () => {
      const allCapsulesData = await getAllCapsules();
      setCapsulesData(allCapsulesData);
      const allRocketsData = await getAllRockets();
      setRocketsData(allRocketsData);
    })();
  }, []);

  console.log(filter);

  const filteredCapsules = capsulesData.filter(
    (c) =>
      (filter.status === "Select Status" || c.status === filter.status) &&
      (filter.launch === "Select Launch Year" ||
        String(c.original_launch) === filter.launch ||
        parseInt(c.original_launch) === Number(filter.launch)) &&
      (filter.type === "Select Type" || c.type === filter.type) &&
      (filter.query === "" ||
        c.capsule_id.toLowerCase().includes(filter.query.toLowerCase()) ||
        c.capsule_serial.toLowerCase().includes(filter.query.toLowerCase()))
  );

  return (
    <AppContext.Provider
      value={{ filteredCapsules, rocketsData, filter, setFilter }}
    >
      {children}
    </AppContext.Provider>
  );
}
