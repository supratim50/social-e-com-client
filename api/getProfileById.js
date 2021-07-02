const axios = require("axios");

const endPoint = "localhost:4000";

export const getProfile = async (userID) => {
  try {
    const user = await axios.get(`${endPoint}/user/${userID}`);
    console.log(userID, user);
    return user;
  } catch (error) {
    return console.error(error);
  }
};
