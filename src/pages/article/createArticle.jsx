import React from "react";
import Input from "../../komponen/input";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createArticle } from "../../API/article";
const CreateArticle = () => {
  const navigate = useNavigate();
  const [article, setArticle] = React.useState({
    judul: "",
    artikel: "",
    thumbnail: "",
    imagePreview: null,
  });
  let [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    setArticle((article) => {
      return {
        ...article,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    console.log(article);

    try {
      setIsLoading(true);
      e.preventDefault();
      const response = await createArticle(article);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Berhasil Membuat Article",
      });
      return navigate("/article", { replace: true });
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white  h-[37rem] ">
      <div className=" w-[25rem]  flex flex-col items-center bg-[#e8e8e8] rounded-xl py-3 shadow-xl">
        <h1 className="text-xl my-3 font-bold font-mono">Tambah Article</h1>
        <p className="text-red-200 italic  px-2 py-1">{errorMessage}</p>
        <form action="" onSubmit={handleSubmit}>
          <Input
            value={article.judul}
            placeholder={"Judul Article"}
            onChange={handleChange}
            name={"judul"}
          />
          <Input
            value={article.artikel}
            placeholder={"Isi Article"}
            onChange={handleChange}
            name={"artikel"}
          />
          <input
            name="thumbnail"
            type={"file"}
            value={article?.file}
            placeholder={"Gambar"}
            onChange={(e) => {
              console.log("event =>", e.target.files[0]);
              let file = e.target.files[0];
              if (file.size >= 100000) {
                return alert("ukuran lebuh dari 100 kb");
              }
              if (
                file.type === "image/jpeg" ||
                file.type === "image/png" ||
                file.type === "application/pdf"
              ) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setArticle((article) => {
                    return {
                      ...article,
                      imagePreview: reader.result,
                      thumbnail: file,
                    };
                  });
                };
                console.log("ok");
              } else {
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                  },
                });

                Toast.fire({
                  icon: "error",
                  title: "file harus image atau pdf",
                });
              }
            }}
          />
          <img
            src={article.imagePreview}
            alt={article.imagePreview}
            className="w-20"
          />

          <div className="grid grid-cols-2 gap-5 mt-2">
            <Button title={isLoading ? "sedang menyimpan" : "simpan"} />
            <Button
              onClick={() => {
                return navigate("/article", { replace: true });
              }}
              title={"Kembali"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateArticle;
