import axios from "axios";

export const getIdeas = async () => {
  try {
    const response = await axios.get(
      "http://5df0e9859df6fb00142bd4e3.mockapi.io/ideas"
    );
    return response.data;
  } catch (error) {
    console.log("error getting records");
    return [];
  }
};
