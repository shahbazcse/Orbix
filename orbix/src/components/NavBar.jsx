import logo from "../assets/logo/logo.png";

export default function NavBar() {
  return (
    <div className="flex sticky top-0 z-10 justify-between items-center gap-12 sm:gap-4 xl:pr-[18rem] font-bold font-mont pl-8 text-white drop-shadow-2xl opacity-[0.85] bg-black border-b-[1px] border-[#eef1f52c] py-4">
      <div className="flex justify-between items-center gap-2 cursor-pointer tracking-[0.2rem] font-serif text-3xl">
        <img className="h-10 w-10" src={logo} alt="Orbix" />
        <p>Orbix</p>
      </div>
      <div className="ml-12 text-2xl font-thin tracking-widest">
        Unveiling Cosmic Wonders
      </div>
      <div className=""></div>
    </div>
  );
}
