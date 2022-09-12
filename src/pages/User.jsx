import axios from "axios";
import React from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = React.useState([]); //state untuk menyimpan data user dari API
  const [page, setPage] = React.useState(100);

  const navigate = useNavigate();
  const getUsersHandle = async () => {
    try {
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`
      );
      console.log("Response =>", response.data);
      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };

  console.log("User =>", users);
  console.log("page =>", page);

  React.useEffect(() => {
    getUsersHandle();
  }, [page]);
  return (
    <div>
      <h1>Tabel User</h1>
      <button
        onClick={() => {
          return navigate("createUser", { replace: true });
        }}
        className="m-2"
      >
        Tambah User
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left border">
            <th>No</th>
            <th>User Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Jenis Kelamin</th>
            <th>Di Buat</th>
            <th>Di Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="text-left border">
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.jenis_kelamin}</td>
                <td>{user.stored_at}</td>
                <td>{user.updated_at}</td>
                <td>Detail</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Saat ini di page {page}</p>
      <div className="flex items-center justify-end m-3">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          className="button_top mr-5"
        >
          <span>Previous</span>
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="button_top"
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default User;
