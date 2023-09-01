export default function Banner() {
  return (
    <div className="bg-black text-white flex items-center xl:h-[32rem] xl:gap-24">
      <div className="flex flex-col gap-6 my-32 ml-12 xl:w-[40%] xl:mx-[12rem]">
        <h1 className="font-bold text-5xl font-mont backdrop-blur-sm leading-snug">
          Defying Gravity, Exploring Infinity
        </h1>
        <p className="text-gray-300 font-barlow text-3xl backdrop-blur-sm leading-snug">
          Fueling the Future with Rockets that Propel Humanity Beyond the Stars.
          <p>Join Us on This Cosmic Journey!</p>
        </p>
      </div>
      <div className="banner-img h-full w-full 3xl:hidden"></div>
    </div>
  );
}
