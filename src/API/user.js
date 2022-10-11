import axios from "./baseUrl";
export async function getAllUser(pageSize) {
  return axios.get(`/users/${pageSize}`);
}
export async function createUser(payload) {
  return axios.post(`/users/create`, payload);
}
export async function detailUser(id) {
  return axios.get(`/users/detail/${id}`);
}
export async function updateUser(id, payload) {
  return axios.put(`/users/update/${id}`, payload);
}
