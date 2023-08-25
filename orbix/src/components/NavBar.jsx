export default function NavBar() {
  return (
    <div className="flex sticky top-0 z-10 justify-between items-center font-bold font-mono pl-8 pr-12 text-white drop-shadow-2xl opacity-[0.85] bg-black border-b-[1px] border-[#EEF1F5] py-4">
      <div className="cursor-pointer tracking-[0.2rem] font-serif text-3xl">
        Orbix
      </div>
      <div className="cursor-pointer tracking-[0.1rem]">Menu</div>
    </div>
  );
}
