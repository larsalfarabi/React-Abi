import axios from "./baseUrl2";

export async function getArticle() {
  return axios.get(`/artikel`);
}

export async function createArticle(payload) {
  console.log("payload akan di kirim", payload);

  const formData = new FormData();
  formData.append("judul", payload.judul);
  formData.append("artikel", payload.artikel);
  formData.append("thumbnail", payload.thumbnail);

  axios.post("/artikel", formData);
}

export async function detailArticle(value) {
  return axios.get(`artikel/${value}`);
}

export async function deleteArticle(id) {
  return axios.post(`artikel/delete/${id}`);
}

export async function updateArticle(id, payload) {
  const formData = new FormData();
  formData.append("judul", payload.judul);
  formData.append("artikel", payload.artikel);
  formData.append("thumbnail", payload.thumbnail);
  formData.append("imagePreview", payload.imagePreview);
  return axios.post(`artikel/update/${id}`, formData);
}