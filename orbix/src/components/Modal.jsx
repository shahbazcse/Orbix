export default function Modal({ setOpenModal }) {
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center"
    >
      <div className="bg-white rounded-lg sm:mx-[16rem] lg:h-[24rem] lg:mx-[36rem]">
        <div className="bg-black text-white text-right px-4 py-2 rounded-t-lg">
          <button className="px-3 py-1 text-sm rounded-full border border-slate-500 hover:bg-slate-700">
            X
          </button>
        </div>
        <div className="p-4">
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
