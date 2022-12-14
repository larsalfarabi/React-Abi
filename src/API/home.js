import axios from "./baseUrl";

export async function getProduct(
  kategori,
  keyword,
  hargaTerendah,
  hargaTertinggi
) {
  return axios.get(
    `/produk/list?kategori=${kategori}&page=1&pageSize=100&keyword=${keyword}&hargaTerendah=${hargaTerendah}&hargaTertinggi=${hargaTertinggi}`
  );
}

export async function getDetailProduct(uuid) {
  return axios.get(`/produk/detail/${uuid}`);
}

export async function getKategori() {
  return axios.get(`/kategori`);
}
export async function getKaranjang() {
  return axios.get(`/keranjang`);
}
export async function postKaranjang(payload) {
  return axios.post(`/keranjang/tambah`, payload);
}

export async function hapusKaranjang(id) {
  return axios.delete(`/keranjang/hapus/${id}`);
}

export async function postBeli(payload) {
  return axios.post(`/beli/tambah`, payload);
}

export async function ubahItem(id, jumlah) {
  return axios.put(`/keranjang/ubah-jumlah-item`, id, jumlah);
}
export async function getHistory() {
  return axios.get(`/beli/history`);
}
