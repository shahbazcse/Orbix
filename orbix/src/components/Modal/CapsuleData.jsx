import React from "react";
import { capsulesImg } from "../../assets/capsules";

function CapsuleData({ data }) {
  const {
    capsule_id,
    capsule_serial,
    details,
    landings,
    missions,
    original_launch,
    reuse_count,
    status,
    type,
  } = data;

  const imgSource = capsulesImg.find(({ rid }) => rid === capsule_serial);

  return (
    <div className="flex flex-col gap-8 justify-center items-center m-8">
      <img className="h-[16rem] w-[32rem] rounded-xl" src={imgSource?.url} alt="" />
      <div className="flex flex-col gap-4 mx-4 tracking-wide">
        <p>
          <span className="font-bold">Capsule Id: </span>
          {capsule_id}
        </p>
        <p>
          <span className="font-bold">Capsule Serial No.: </span>
          {capsule_serial}
        </p>
        <p>
          <span className="font-bold">Details: </span>
          {details}
        </p>
        <p>
          <span className="font-bold">Landings: </span>
          {landings}
        </p>
        <div className="flex gap-2">
          <p className="font-bold">Missions: </p>
          <div className="flex flex-col gap-2">
            {missions?.map(({ name, flight }, index) => (
              <div
                key={index}
                className="flex flex-col border px-4 rounded-md text-[14px] hover:bg-gray-100"
              >
                <p>
                  <span className="font-bold">Mission Name:</span> {name}
                </p>
                <p>
                  <span className="font-bold">Flight:</span> {flight}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p>
          <span className="font-bold">Original Launch: </span>
          {original_launch}
        </p>
        <p>
          <span className="font-bold">Reuse Count: </span>
          {reuse_count}
        </p>
        <p>
          <span className="font-bold">Status: </span>
          {status}
        </p>
        <p>
          <span className="font-bold">Type: </span>
          {type}
        </p>
      </div>
    </div>
  );
}

export default CapsuleData;
