import { useState, useEffect } from "react";
import axios from "axios";

function useJuz(id = 1) {
  const [alquran, setAlquran] = useState([]);
  const [juz, setJuz] = useState(id);
  const getAlquran = async (juz) => {
    try {
      const response = await axios.get(
        `http://api.alquran.cloud/v1/juz/${juz}/en.asad`
      );
      console.log("res", response);
      setAlquran(response.data?.data?.surahs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlquran(juz);
  }, [juz]);

  return { juz, setJuz, alquran };
}

export default useJuz;
