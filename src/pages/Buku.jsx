import axios from "axios";
import React from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import Button from "../komponen/button";

const Buku = () => {
  const [users, setUsers] = React.useState([]); //state untuk menyimpan data user dari API
  const [page, setPage] = React.useState(100);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();
  const getUsersHandle = async () => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan?kode=99999`
      );
      console.log("Response =>", response.data);
      setUsers(response.data.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };
  const getUserDelete = async (id) => {
    try {
      const response = await axios.delete(
        ` https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=99999`
      );

      getUsersHandle();
      isLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("User =>", users);
  console.log("page =>", page);

  React.useEffect(() => {
    getUsersHandle();
  }, [page]);
  return (
    <div className="px-3 py-2">
      <h1>Tabel User</h1>
      <button
        onClick={() => {
          return navigate("tambah", { replace: true });
        }}
        className="font-mono font-medium px-4 my-2 "
      >
        Tambah User
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left ">
            <th>No</th>
            <th>Kode Penulis</th>
            <th>Judul Buku</th>
            <th>Nama Pengarang</th>
            <th>Nama Penerbit Buku</th>
            <th>Tahun Penerbit</th>
            <th>Ketebalan Buku</th>
            <th>Sinopsis</th>
            <th>Di Buat</th>
            <th>Di Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="text-left border">
                <td>{index + 1}</td>
                <td>{user.kode_penulis}</td>
                <td>{user.judul_buku}</td>
                <td>{user.nama_pengarang}</td>
                <td>{user.nama_penerbit_buku}</td>
                <td>{user.tahun_terbit_buku}</td>
                <td>{user.ketebalan_buku}</td>
                <td>{user.sinopsis}</td>
                <td>{user.created_at}</td>
                <td>{user.updated_at}</td>
                <div className="flex flex-col mx-2">
                  <Button
                    onClick={() => {
                      return navigate(`/admin/buku/${user.id}/update`, {
                        replace: true,
                      });
                    }}
                    className="text-blue-400 font-mono font-medium px-4 my-1"
                    title={"Edit"}
                  />{" "}
                  <Button
                    onClick={() => {
                      return navigate(`/admin/buku/${user.id}/view`, {
                        replace: true,
                      });
                    }}
                    className="text-green-400 font-mono font-medium px-4 my-1"
                    title={"Detail"}
                  />{" "}
                  <Button
                    className="text-red-400 font-mono font-medium px-4 my-1"
                    onClick={() => {
                      getUserDelete(user.id);
                    }}
                    title={isLoading ? "Deleting" : "Delete"}
                  />{" "}
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Saat ini di page {page}</p>
      <div className="grid grid-cols-7 col-span-2 my-5 gap-5">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <span>Previous</span>
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Buku;
