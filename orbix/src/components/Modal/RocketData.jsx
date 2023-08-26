import React from "react";

function RocketData({ data }) {
  const {
    rocket_id,
    rocket_name,
    rocket_type,
    stages,
    success_rate_pct,
    active,
    boosters,
    company,
    cost_per_launch,
    country,
    description,
    diameter,
    first_flight,
    flickr_images,
    height,
    landing_legs,
    mass,
    payload_weights,
    wikipedia,
  } = data;
  const placeholderImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwQ_VIDlZJLxfbXdTwEpcgS3DJ9oKz1wYNG8gyz7Xt_axUaNGSB5tEnVhwcjXsVtr7YU&usqp=CAU";
  return (
    <div className="flex gap-8 justify-center m-8">
      <img
        className="h-[24rem] w-[14rem] rounded-xl"
        src={placeholderImg}
        alt=""
      />
      <div className="flex flex-col gap-4 tracking-wide">
        <p>
          <span className="font-bold">Rocket Id: </span>
          {rocket_id}
        </p>
        <p>
          <span className="font-bold">Rocket Name: </span>
          {rocket_name}
        </p>
        <p>
          <span className="font-bold">Rocket Type: </span>
          {rocket_type}
        </p>
        <p>
          <span className="font-bold">Description: </span>
          {description}
        </p>
        <p>
          <span className="font-bold">Success Rate %: </span>
          {success_rate_pct}
        </p>
        <p>
          <span className="font-bold">Boosters: </span>
          {boosters}
        </p>
        <p>
          <span className="font-bold">Active: </span>
          {active ? "Yes" : "No"}
        </p>
        <p>
          <span className="font-bold">Company: </span>
          {company}
        </p>
        <p>
          <span className="font-bold">Cost Per Launch: </span>
          {cost_per_launch}
        </p>
        <p>
          <span className="font-bold">Country: </span>
          {country}
        </p>
        <p>
          <span className="font-bold">Stages: </span>
          {stages}
        </p>
        <p>
          <span className="font-bold">Diameter: </span>
          {diameter?.feet} Feet
        </p>
        <p>
          <span className="font-bold">Height: </span>
          {height?.feet} Feet
        </p>
        <p>
          <span className="font-bold">Mass: </span>
          {mass?.kg} Kg
        </p>
        <p>
          <span className="font-bold">First Flight: </span>
          {first_flight}
        </p>
        <p>
          <span className="font-bold">Landing Legs: </span>
          {landing_legs?.number}
        </p>
        <p className="flex gap-2">
          <span className="font-bold">Wiki: </span>
          <a
            className="text-blue-600 hover:underline"
            href={wikipedia}
            target="_black"
          >
            {wikipedia}
          </a>
        </p>
        <div className="flex gap-2">
          <p className="font-bold">Payload Weight: </p>
          <div className="flex flex-col gap-2">
            {payload_weights?.map(({ id, name, kg }) => (
              <div
                key={id}
                className="flex flex-col border px-4 rounded-md text-[14px] hover:bg-gray-100"
              >
                <p>
                  <span className="font-bold">Payload Name:</span> {name}
                </p>
                <p>
                  <span className="font-bold">Weight:</span> {kg} Kg
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col">
            <p className="font-bold">Rocket Images: </p>
            <p className="text-sm">Click to enlarge</p>
          </div>
          <div className="flex flex-col gap-6">
            {flickr_images?.map((img, index) => (
              <a href={img} target="_blank">
                <img
                  key={index}
                  src={img}
                  alt="Sample"
                  className="flex flex-col h-40 w-[13rem] hover:shadow-xl hover:shadow-gray-400 border-white hover:shadow-full rounded-md text-[14px] hover:bg-gray-100 cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RocketData;
