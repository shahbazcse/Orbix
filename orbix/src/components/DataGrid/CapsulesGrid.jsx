import { useState } from "react";
import { capsulesImg } from "../../assets/capsules";

export default function CapsulesGrid({ capsules, setModalData, setOpenModal }) {
  const gridPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(capsules.length / gridPerPage);
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

  const handleOpenModal = (capsule_serial) => {
    setOpenModal(true);
    setModalData({
      type: "capsule",
      capsule_serial: capsule_serial,
      rocket_id: "",
    });
  };

  const randomNumber = () =>
    Math.floor(Math.random() * (capsulesImg.length - 1 - 0) + 0);

  return (
    <>
      <div className="flex flex-wrap gap-8 px-12 justify-center items-center mx-12 mb-4">
        {capsules.slice(firstIndex, lastIndex).map(({ capsule_serial, capsule_id }) => (
          <div
            key={capsule_serial}
            onClick={() => handleOpenModal(capsule_serial)}
            style={{ backgroundImage: `url('${capsulesImg[randomNumber()]}')` }}
            className="flex flex-col opacity-[0.85] transition delay-100 duration-300 hover:opacity-[1] justify-end bg-cover bg-center shadow-md hover:shadow-lg hover:shadow-gray-400 rounded-md h-[16rem] w-[16rem] cursor-pointer"
          >
            <div className="h-10 backdrop-blur-md px-3 rounded-b-md">
              <p class="text-3xl font-bold tracking-wider leading-tight text-white">
                {capsule_serial} - {capsule_id.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
      <nav
        className="cursor-pointer isolate inline-flex -space-x-px rounded-md shadow-sm my-6"
        aria-label="Pagination"
      >
        <div
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
        </div>
        {pages.map((p) => (
          <div
            key={p}
            onClick={() => setCurrentPage(p)}
            aria-current="page"
            className={`relative z-10 inline-flex ring-1 ring-inset ring-gray-300 ${
              currentPage === p ? "bg-gray-400 " : "hover:bg-gray-100"
            } items-center px-4 py-2 text-md font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
          >
            {p}
          </div>
        ))}
        <div
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
        </div>
      </nav>
    </>
  );
}
