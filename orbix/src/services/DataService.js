const getAllCapsules = async () => {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/capsules");
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

const getOneCapsule = async (capsule_serial) => {
  try {
    const response = await fetch(
      `https://api.spacexdata.com/v3/capsules/${capsule_serial}`
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

const getAllRockets = async () => {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/rockets");
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

const getOneRocket = async (rocket_id) => {
  try {
    const response = await fetch(
      `https://api.spacexdata.com/v3/rockets/${rocket_id}`
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export { getAllCapsules, getAllRockets, getOneCapsule, getOneRocket };
