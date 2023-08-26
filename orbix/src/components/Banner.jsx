export default function Banner() {
  return (
    <div className="bg-[#ffffff] flex border-b-[1px] border-[#EEF1F5] xl:px-[26rem] xl:gap-24">
      <div className="flex flex-col gap-6 my-24 ml-12 w-[50%]">
        <h1 className="font-bold text-5xl font-mont">
          Powerful Tagline For Your Product
        </h1>
        <p className="text-slate-500 font-barlow text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          aliquid!{" "}
        </p>
      </div>
      <div className="border-[#EDF0F4] border-t-[6px] border-x-[6px] rounded-t-xl p-12 mx-12 mt-12 w-[50%]"></div>
    </div>
  );
}
