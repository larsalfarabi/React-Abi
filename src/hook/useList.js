import { useEffect, useState } from "react";
import axios from "axios";
function useList() {
  const [alquran, setAlquran] = useState([]);
  const getAlquran = async () => {
    try {
      const response = await axios.get(
        "http://api.alquran.cloud/v1/quran/en.asad"
      );
      console.log("response =>", response);
      setAlquran(response.data);
    } catch (err) {
      console.log("Error =>", err);
    }
  };
  useEffect(() => {
    getAlquran();
  }, []);

  return { alquran };
}
export default useList;
