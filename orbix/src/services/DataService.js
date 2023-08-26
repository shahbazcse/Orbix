const getAllCapsules = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/capsules");
  const result = await response.json();
  return result;
};

const getOneCapsule = async (capsule_serial) => {
  const response = await fetch(
    `https://api.spacexdata.com/v3/capsules/${capsule_serial}`
  );
  const result = await response.json();
  return result;
};

const getAllRockets = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/rockets");
  const result = await response.json();
  return result;
};

const getOneRocket = async (rocket_id) => {
  const response = await fetch(
    `https://api.spacexdata.com/v3/rockets/${rocket_id}`
  );
  const result = await response.json();
  return result;
};

export { getAllCapsules, getAllRockets, getOneCapsule, getOneRocket };
