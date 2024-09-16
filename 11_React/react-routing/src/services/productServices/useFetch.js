import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init(url) {
      try {
        //useing axios to get the data
        const res = await axios.get(url);
        console.log("res.data", res.data);
        setData(res.data);
        //return the data
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false);
      }
    }
    init(url);
  }, [url]);
  return { data, loading };
}
