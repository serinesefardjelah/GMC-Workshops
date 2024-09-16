import axios from "axios";

// we want to make a function to call the server to get the products
export default async function getProduct(url) {
  try {
    //useing axios to get the data
    const res = await axios.get(url);
    //return the data
    return res.data;
  } catch (error) {
    console.error("error", error);
  }
}
