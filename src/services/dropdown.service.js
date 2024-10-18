import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(baseURL);


export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error("Fetch data error", error);
    throw error.response ? error.response.data : new Error("Network error");
  }
};
