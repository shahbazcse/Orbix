export default function Banner() {
  return (
    <div className="flex border-b-[1px] font-sans border-[#EEF1F5] xl:px-[42vh] xl:gap-24">
      <div className="flex flex-col gap-6 my-24 ml-12 w-[50%]">
        <h1 className="font-bold text-4xl">
          Powerful Tagline For Your Product
        </h1>
        <p className="text-slate-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          aliquid!{" "}
        </p>
      </div>
      <div className="border-[#EDF0F4] border-t-[6px] border-x-[6px] rounded-t-xl p-12 mx-12 mt-12 w-[50%]"></div>
    </div>
  );
}
