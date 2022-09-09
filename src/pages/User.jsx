import axios from "axios";
import React from "react";

const User = () => {
  const [users, setUsers] = React.useState([]); //state untuk menyimpan data user dari API
  const [page, setPage] = React.useState(1);

  const getUsersHandle = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}`
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
      <table className="table-auto">
        <thead>
          <tr className="text-left border">
            <th>No</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="text-left border">
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img
                    className="rounded-full h-12 w-12"
                    src={user.avatar}
                    alt={user.avatar}
                  />
                </td>
                <td>Detail</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Saat ini di page {page}</p>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default User;
