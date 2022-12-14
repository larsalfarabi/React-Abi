import axios from "axios";
import Cookies from "js-cookie";

const clientLogin = axios.create({
  baseURL: "https://sainuu.xyz",

  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${Cookies.get("myapps_token")}`,
  },
});

clientLogin.interceptors.response.use(
  (response) => {
    console.log("Client Response =>", response);
    return response;
  },

  (error) => {
    console.log("err", error);
    if (401 === error.response.status) {
      Cookies.remove("myapps_token");

      clearToken();
      localStorage.clear();
      window.location.replace("/login");
    } else {
      return Promise.reject(error);
    }
  }
);
export const syncToken = () => {
  clientLogin.defaults.headers["Authorization"] = `Bearer ${Cookies.get(
    "myapps_token"
  )}`;
};
export const clearToken = () => {
  delete clientLogin.defaults.headers["Authorization"];
};
export default clientLogin;
