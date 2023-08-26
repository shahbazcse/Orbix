export default function Modal({ setOpenModal }) {
  const closeModal = (e) => {
    e.target.id === "blur-area" && setOpenModal(false);
  };
  return (
    <div
      id="blur-area"
      onClick={(e) => closeModal(e)}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center font-barlow font-thin"
    >
      <div className="bg-white rounded-lg sm:mx-[16rem] lg:h-[24rem] lg:mx-[36rem]">
        <div className="flex justify-end cursor-pointer border-b border-gray-400 text-white text-right px-4 py-2 rounded-t-lg">
          <div
            onClick={() => setOpenModal(false)}
            className="border-2 p-1 border-gray-300 rounded-full hover:bg-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </div>
        </div>
        <div className="px-4 pb-4 pt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
          aspernatur deserunt, nobis minus id maxime soluta, incidunt, error
          ducimus eos iure delectus alias voluptates explicabo asperiores fuga
          voluptatibus vitae unde animi omnis laboriosam ipsum natus laborum
          cumque! Dolorum impedit aliquam optio nobis, obcaecati sit cumque non
          quas quisquam aspernatur explicabo deleniti tempore autem reiciendis
          possimus delectus, quam, adipisci corrupti qui. Natus dolores cumque
          facilis neque vel ab, labore blanditiis voluptatem ipsa rem nihil
          optio est ut quis rerum, error eos quas exercitationem expedita culpa!
          Possimus, aliquam dolorem nostrum, perspiciatis quod nisi corrupti
          voluptas tempore placeat modi provident nihil sit commodi.
        </div>
      </div>
    </div>
  );
}
