import React from "react";
// import swal from "sweetalert";
import { Input } from "../komponen/input";
// import Button from "./components/Button";
// import Select from "../module/select";
import axios from "axios";
import Button from "../komponen/button";
import { useNavigate, useParams } from "react-router-dom";
// import { data } from "autoprefixer";

function Createuser() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUser] = React.useState({
    kode_penulis: "99999",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
  });

  const handleChange = (e) => {
    setUser((users) => {
      return { ...users, [e.target.name]: e.target.value };
    });
    // console.log("tes");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      setIsLoading(true);
      const response = await axios.put(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=99999`,
        users
      );
      setIsLoading(false);

      return navigate("/Admin/Books");
    } catch (err) {
      console.log(err);

      setIsLoading(false);
      setUser({
        kode_penulis: "99999",
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: "",
        tahun_terbit_buku: 2004,
        sinopsis: "",
      });
    }
  };

  const getDetailUser = async (id) => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=99999`
      );
      const dataUser = response.data.data;
      console.log(dataUser);
      setUser(() => {
        return {
          kode_penulis: "99999",
          judul_buku: dataUser.judul_buku,
          nama_pengarang: dataUser.nama_pengarang,
          nama_penerbit_buku: dataUser.nama_penerbit_buku,
          ketebalan_buku: dataUser.ketebalan_buku,
          tahun_terbit_buku: dataUser.tahun_terbit_buku,
          sinopsis: dataUser.sinopsis,
        };
      });
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailUser(id);
  }, []);
  return (
    <div className="h-[40rem]">
      <p className="text-center font-bold uppercase mt-5">Detail User</p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[25rem]  flex flex-col items-center bg-[#e8e8e8] rounded-xl py-3 shadow-xl"
        >
          <div>
            <Input
              onChange={handleChange}
              value={users.nama_pengarang}
              isError={""}
              type="text"
              disabled
              name="nama_pengarang"
              id="name"
              placeholder="Name"
            />
            <Input
              onChange={handleChange}
              value={users.nama_penerbit_buku}
              type="text"
              disabled
              name="nama_penerbit_buku"
              id="Publisher"
              placeholder="Publisher"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.judul_buku}
              isError={""}
              type="text"
              disabled
              name="judul_buku"
              id="Book Title"
              placeholder="Book Title"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.ketebalan_buku}
              isError={""}
              type="text"
              disabled
              name="ketebalan_buku"
              id="BookThickness"
              placeholder="BookThickness"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.sinopsis}
              isError={""}
              type="text"
              disabled
              name="sinopsis"
              id="Sinopsis"
              placeholder="Sinopsis"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              value={users.tahun_terbit_buku}
              isError={""}
              type="number"
              disabled
              name="tahun_terbit_buku"
              id="tahun_terbit_buku"
              placeholder="Year Published"
            />
            <Input
              onChange={handleChange}
              value={users.kode_penulis}
              isError={""}
              type="number"
              disabled
              name="kode_penulis"
              id="AuthorCode"
              placeholder="AuthorCode"
            />
          </div>

          <div>
            <Button
              className="px-[5rem] py-2 mt-1"
              title={"Back"}
              onClick={() => {
                return navigate("/admin/buku", { replace: true });
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createuser;
