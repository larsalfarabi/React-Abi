import axios from "axios";
import Cookies from "js-cookie";

const clientLogin = axios.create({
  baseURL: "https://api-react-2.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${Cookies.get("myapps_token")}`,
  },
});

export default clientLogin;
