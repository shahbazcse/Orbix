import React from "react";
import { rocketsImg } from "../../assets/rockets";

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

  const sourceImg = rocketsImg.find(({ rname }) => rname === rocket_name);
  return (
    <div className="flex flex-col gap-8 justify-center m-8">
      <img
        className="h-[22rem] w-[46rem] rounded-xl"
        src={sourceImg?.url}
        alt=""
      />
      <div className="flex flex-col gap-4 mx-4 hover:shadow-gray-400 tracking-wide">
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
            Go to wikipedia
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
            {flickr_images?.map((img) => (
              <a key={img} href={img} target="_blank" rel="noreferrer">
                <img
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
