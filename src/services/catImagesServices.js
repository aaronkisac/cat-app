import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const headers = {
  "x-api-key": process.env.REACT_APP_API_KEY,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getCatAllImages = async () => {
  try {
    const response = await axios({
      baseURL,
      url: "images/?limit=100",
      method: "get",
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("Api message:", error);
    return error;
  }
};

export const uploadCatImage = async (data) => {
  try {
    const response = await axios({
      baseURL,
      url: "images/upload",
      method: "post",
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("Api message:", error);
    return error;
  }
};

export const setCatImageFav = async (data) => {
  try {
    const response = await axios({
      baseURL,
      url: "favourites",
      method: "post",
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("Api message:", error);
    return error;
  }
};

export const deleteCatImageFav = async (key) => {
  try {
    const response = await axios({
      baseURL,
      url: `favourites/${key}`,
      method: "DELETE",
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("Api message:", error);
    return error;
  }
};

export const getCatAllFavImages = async () => {
  try {
    const response = await axios({
      baseURL,
      url: "favourites",
      method: "get",
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("Api message:", error);
    return error;
  }
};
export const getCatVotes = async () => {
  try {
    const response = await axios({
      baseURL,
      url: "votes",
      method: "get",
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("Api message:", error);
    return error;
  }
};

export const setCatVote = async (data) => {
  try {
    const response = await axios({
      baseURL,
      url: "votes",
      method: "post",
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("Api message:", error);
    return error;
  }
};
