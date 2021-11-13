const axios = require("axios");

const ENDPOINT = "http://localhost:4000";

export const getPostsbyEmail = async (email) => {
  // FETCH DATA
  const posts = await axios.get(`${ENDPOINT}/post/${email}`);
  console.log(posts);
};
