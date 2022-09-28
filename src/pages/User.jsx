import axios from "axios";
import React from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import Button from "../komponen/button";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";

const User = () => {
  const [users, setUsers] = React.useState([]); //state untuk menyimpan data user dari API
  const [page, setPage] = React.useState(100);
  const [isFetchUser, setIsFetchUser] = React.useState(false);
  const navigate = useNavigate();
  const getUsersHandle = async () => {
    try {
      setIsFetchUser(true);
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`
      );
      console.log("Response =>", response.data);
      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {
    } finally {
      setIsFetchUser(false);
    }
  };
  const deleteUser = (id) => {
    console.log("button delete berjalan", id);
    Swal.fire({
      title: "本気ですか？",
      text: "これを元に戻すことはできません",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Izinkan, saya menghapus",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id}`
          );
          Swal.fire(
            "削除された",
            "あなたのファイルは削除されました",
            "success"
          );
          getUsersHandle();
        } catch (err) {
          Swal.fire("gagal", "user tidak ditemukan", "success");
        }
      }
    });
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
          return navigate("createUser", { replace: true });
        }}
        className="font-mono font-medium px-4 my-2 "
      >
        Tambah User
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left ">
            <th>No</th>
            <th>User Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Jenis Kelamin</th>
            <th>Di Buat</th>
            <th>Di Update</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isFetchUser ? (
            <tr>
              <td >
                <Skeleton width={1000} duration={1.5} count={5} />
              </td>
            </tr>
          ) : (
            users.map((user, index) => {
              return (
                <tr key={index} className="text-left border">
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.jenis_kelamin}</td>
                  <td>{user.stored_at}</td>
                  <td>{user.updated_at}</td>
                  <div className="flex flex-col mx-2">
                    <Button
                      onClick={() => {
                        return navigate(`/user/update/${user.id}`, {
                          replace: true,
                        });
                      }}
                      className="text-blue-400 font-mono font-medium px-4 my-1"
                      title={"Edit"}
                    />{" "}
                    <Button
                      className="text-red-400 font-mono font-medium px-4 my-1"
                      title={"Delete"}
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    />{" "}
                  </div>
                </tr>
              );
            })
          )}
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

export default User;
