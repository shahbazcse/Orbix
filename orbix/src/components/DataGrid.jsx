import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function DataGrid() {
  const [openModal, setOpenModal] = useState(false);

  const dataCount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [dataGrid, setDataGrid] = useState([]);
  const [gridPerPage, setGridPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setDataGrid(dataCount);
  }, []);

  const totalPages = Math.ceil(dataGrid.length / gridPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  const lastIndex = currentPage * gridPerPage;
  const firstIndex = lastIndex - gridPerPage;

  const navigatePreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const navigateNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-[#ffffff] flex flex-col justify-center items-center lg:px-[8rem] font-barlow text-2xl font-semibold">
      <div className="flex flex-wrap gap-8 px-12 justify-center items-center mx-12 mb-4">
        {dataGrid.slice(firstIndex, lastIndex).map((n) => (
          <div
            key={n}
            onClick={() => setOpenModal(true)}
            className="flex justify-center items-center border border-gray-400 rounded-md h-[16rem] w-[16rem] cursor-pointer"
          >
            {n}
          </div>
        ))}
      </div>
      <nav
        className="cursor-pointer isolate inline-flex -space-x-px rounded-md shadow-sm my-6"
        aria-label="Pagination"
      >
        <a
          onClick={navigatePreviousPage}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Previous</span>
          <svg
            className={`h-8 w-8 ${
              currentPage !== 1 ? "text-black" : "text-gray-400"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        {pages.map((p) => (
          <a
            key={p}
            onClick={() => setCurrentPage(p)}
            aria-current="page"
            className={`relative z-10 inline-flex ring-1 ring-inset ring-gray-300 ${
              currentPage === p ? "bg-gray-400 " : "hover:bg-gray-100"
            } items-center px-4 py-2 text-md font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
          >
            {p}
          </a>
        ))}
        <a
          onClick={navigateNextPage}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Next</span>
          <svg
            className={`h-8 w-8 ${
              currentPage !== totalPages ? "text-black" : "text-gray-400"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </nav>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}
