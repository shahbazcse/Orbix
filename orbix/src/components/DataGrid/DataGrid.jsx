import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import Modal from "../Modal/Modal";
import CapsulesGrid from "./CapsulesGrid";
import RocketsGrid from "./RocketsGrid";

export default function DataGrid() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({
    type: "",
    capsule_serial: "",
    rocket_id: "",
  });

  const { filteredCapsules: capsulesData, rocketsData } = useContext(AppContext);

  const [dataGrid, setDataGrid] = useState({ capsules: [], rockets: [] });

  useEffect(() => {
    setDataGrid({ ...dataGrid, capsules: capsulesData, rockets: rocketsData });
  }, [capsulesData, rocketsData]);

  return (
    <div className="bg-[#ffffff] flex flex-col justify-center items-center lg:px-[8rem] font-barlow text-2xl pt-4 font-semibold">
      <CapsulesGrid
        capsules={dataGrid.capsules}
        setModalData={setModalData}
        setOpenModal={setOpenModal}
      />
      <RocketsGrid
        rockets={dataGrid.rockets}
        setModalData={setModalData}
        setOpenModal={setOpenModal}
      />
      {openModal && <Modal modalData={modalData} setOpenModal={setOpenModal} />}
    </div>
  );
}
