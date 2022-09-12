import React from "react";

const CreateUser = () => {
  return (
    <div>
      <h1>Tambah User</h1>
      <form action="" className="flex flex-col ">
        <input type="text" placeholder="Username" className="input mx-5 my-3"></input>
        <input type="text" placeholder="Name" className="input mx-5 my-3"></input>
        <select type="" placeholder="Jenis Kelamin" className="input mx-5 my-3 text-gray-400">
          <option value="none">Pilih Kelamin</option>
          <option value="male">Laki-Laki</option>
          <option value="female">Perempuan</option>
        </select>
        <input type="email" placeholder="Email" className="input mx-5 my-3"></input>
        <input type="Password" placeholder="Password" className="input mx-5 my-3"></input>
        <input type="Password" placeholder="Confirm Password" className="input mx-5 my-3"></input>
      </form>
    </div>
  );
};

export default CreateUser;
