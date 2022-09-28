import React from "react";
import { Input, TextArea } from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import swal from "sweetalert";

const UpdateBuku = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isReset, setIsReset] = React.useState(false);
  const [error, setError] = React.useState({});
  const [errorSin, setErrorSin] = React.useState("");
  const [user, setUser] = React.useState({
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
    kode_penulis: "99999",
  });
  const handleBlur = (e) => {
    if (user.sinopsis.length < 10) {
      setErrorSin("Sinopsis harus lebih dari 30 kata");
    }
    console.log("blur");
    if (e.target.value === "") {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: true,
        };
      });
    } else {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: false,
        };
      });
    }
  };

  const handleChange = (e) => {
    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
    handleBlur(e);
    setErrorSin("");
  };

  React.useEffect(() => {
    getDetailUser(id);
  }, []);

  const getResetUser = async (id) => {
    try {
      setIsReset(true);
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=99999`
      );
      const dataUser = response.data.data;
      console.log(dataUser);
      setIsReset(false);
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
  const getDetailUser = async () => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=99999`
      );
      console.log("response =>", response.data);
      const dataUser = response.data.data;
      setUser(() => {
        return {
          judul_buku: dataUser.judul_buku,
          nama_pengarang: dataUser.nama_pengarang,
          nama_penerbit_buku: dataUser.nama_penerbit_buku,
          tahun_terbit_buku: dataUser.tahun_terbit_buku,
          ketebalan_buku: dataUser.ketebalan_buku,
          sinopsis: dataUser.sinopsis,
        };
      });
    } catch (err) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (
      user.judul_buku === "" ||
      user.ketebalan_buku === "" ||
      user.kode_penulis === "" ||
      user.nama_penerbit_buku === "" ||
      user.nama_pengarang === "" ||
      user.sinopsis === "" ||
      user.sinopsis.length < 10 ||
      user.tahun_terbit_buku < 2020 ||
      user.tahun_terbit_buku > 2022
    ) {
      if (user.judul_buku === "") {
        setError((error) => {
          return {
            ...error,
            judul_buku: true,
          };
        });
      }
      if (user.ketebalan_buku === "") {
        setError((error) => {
          return {
            ...error,
            ketebalan_buku: true,
          };
        });
      }
      if (user.kode_penulis === "") {
        setError((error) => {
          return {
            ...error,
            kode_penulis: true,
          };
        });
      }
      if (user.nama_penerbit_buku === "") {
        setError((error) => {
          return {
            ...error,
            nama_penerbit_buku: true,
          };
        });
      }
      if (user.nama_pengarang === "") {
        setError((error) => {
          return {
            ...error,
            nama_pengarang: true,
          };
        });
      }
      if (user.sinopsis === "") {
        setError((error) => {
          return {
            ...error,
            sinopsis: true,
          };
        });
      }
      if (user.sinopsis.length < 10) {
        setErrorSin("Sinopsis harus lebih dari 30 kata");
        setError((error) => {
          return {
            ...error,
            sinopsis: true,
          };
        });
      } else {
        setErrorSin("");
      }
      if (user.tahun_terbit_buku < 2020 || user.tahun_terbit_buku > 2022) {
        setError((error) => {
          return {
            ...error,
            tahun_terbit_buku: true,
          };
        });
      }
      if (e.target.name === "") {
        // swal("Form ada yang belum diisi", "You clicked the button!", "error");
      }

      return;
    }
    try {
      //   kondisi ketika berhasil
      setIsLoading(true);
      const response = await axios.put(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=99999`,
        user
      );
      setIsLoading(false);
      // swal("Berhasil Memperbarui", "You clicked the button!", "success");
      return navigate("/admin/buku", { replace: true });
    } catch (err) {
      //kondisi ketika error
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-white  h-[40rem] ">
      <div className=" w-[25rem]  flex flex-col items-center bg-[#e8e8e8] rounded-xl py-3 shadow-xl">
        <h1 className="text-xl my-3 font-bold font-mono">Update User {id}</h1>
        <form action="" onSubmit={handleSubmit}>
          <Input
            textError={"wajib diisi"}
            isError={error.judul_buku}
            value={user.judul_buku}
            placeHolder={"Judul Buku"}
            onChange={handleChange}
            name={"judul_buku"}
            onBlur={handleBlur}
          />
          <Input
            textError={"wajib diisi"}
            isError={error.nama_pengarang}
            value={user.nama_pengarang}
            placeHolder={"Nama Pengarang"}
            onChange={handleChange}
            name={"nama_pengarang"}
            onBlur={handleBlur}
          />
          <Input
            textError={"wajib diisi"}
            isError={error.nama_penerbit_buku}
            value={user.nama_penerbit_buku}
            placeHolder={"Nama Penerbit Buku"}
            onChange={handleChange}
            name={"nama_penerbit_buku"}
            onBlur={handleBlur}
          />
          <Input
            textError={"wajib diisi"}
            isError={error.tahun_terbit_buku}
            value={user.tahun_terbit_buku}
            placeHolder={"Tahun Penerbit"}
            onChange={handleChange}
            name={"tahun_terbit_buku"}
            onBlur={handleBlur}
            type="number"
          ></Input>
          <Input
            textError={"wajib diisi"}
            isError={error.kode_penulis}
            value={user.kode_penulis}
            placeHolder={"Kode penulis"}
            onChange={handleChange}
            name={"kode_penulis"}
            onBlur={handleBlur}
            type="number"
          />
          <TextArea
            textError={"wajib diisi"}
            isError={error.sinopsis}
            value={user.sinopsis}
            placeHolder={"Sinopsis"}
            onChange={handleChange}
            name={"sinopsis"}
            onBlur={handleBlur}
          />
          <p className="text-red-500 font-bold text-sm italic ml-5 ">
            {errorSin}
          </p>

          <div className="grid grid-cols-2 gap-5">
            <Button title={isLoading ? "Sedang Perbarui" : "Perbarui"} />

            <Button
              onClick={() => {
                return navigate("/admin/buku", { replace: true });
              }}
              title={"Kembali"}
            />
          </div>
        </form>
        <div className="grid grid-cols-1   gap-3">
          <Button
            className="col-span-1 px-[5rem] mt-2 py-2"
            onClick={(e) => {
              e.preventDefault();
              getResetUser(id);
            }}
            title={isReset ? "Reseting" : "Reset"}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateBuku;
