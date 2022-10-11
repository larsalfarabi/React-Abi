import axios from "./baseUrl2";

export async function loginProses(payload) {
  return axios.post(`/login`, payload);
}


