import React from "react";

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
  const placeholderImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwQ_VIDlZJLxfbXdTwEpcgS3DJ9oKz1wYNG8gyz7Xt_axUaNGSB5tEnVhwcjXsVtr7YU&usqp=CAU";
  return (
    <div className="flex gap-8 justify-center m-8">
      <img
        className="h-[32rem] w-[32rem] rounded-xl"
        src={placeholderImg}
        alt=""
      />
      <div className="flex flex-col gap-4 tracking-wide">
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
        <p>
          <span className="font-bold">Missions: </span>
          {}
        </p>
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
