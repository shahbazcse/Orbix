import logo from "../assets/logo/logo.png";

export default function NavBar() {
  return (
    <div className="flex sticky top-0 z-10 justify-between items-center font-bold font-mont pl-8 pr-12 text-white drop-shadow-2xl opacity-[0.85] bg-black border-b-[1px] border-[#EEF1F5] py-4">
      <div className="flex justify-center items-center gap-2 cursor-pointer tracking-[0.2rem] font-serif text-3xl">
        <img className="h-10 w-10" src={logo} alt="Orbix" />
        <p>Orbix</p>
      </div>
      <div className="text-2xl font-thin tracking-widest">
        Unveiling Cosmic Wonders
      </div>
      <div className="mr-12"></div>
    </div>
  );
}