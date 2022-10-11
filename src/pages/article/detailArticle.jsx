import React from "react";
import { useParams } from "react-router-dom";
import { detailArticle } from "../../API/article";
import Input from "../../komponen/input";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
const DetailArticle = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [article, setArticle] = React.useState({
    slug: "",
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
    // imagePreview: null,
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
  const handleGetDetailArticle = async () => {
    try {
      const response = await detailArticle(slug);
      const dataUser = response.data.data;
      setArticle((e) => {
        return {
          judul: dataUser.judul,
          slug: dataUser.slug,
          thumbnail: dataUser.thumbnail,
          id: dataUser.id,
          artikel: dataUser.artikel,
          created_at: dataUser.created_at,
        };
      });
    } catch (err) {}
  };
  React.useEffect(() => {
    handleGetDetailArticle();
  }, []);
  return (
    <div>
      <div className="flex flex-col h-screen items-center bg-white p-10 ">
        <div className="p-5 w-full h-full flex flex-col items-center bg-[#e8e8e8] rounded-xl py-3 shadow-xl">
          <h1 className="text-xl my-3 font-bold font-mono">Detail Artikel</h1>
          <div className="w-full h-full flex justify-center place-items-center">
            {" "}
            <img
              src={article.thumbnail}
              alt={article.thumbnail}
              className="w-20"
            />
          </div>
          <div>
            <div className="grid grid-cols-3 mb-5">
              <p className="uppercase font-bold underline">
                Judul: {article.judul}
              </p>
              <p className="uppercase font-bold underline ">
                Slug: {article.slug}
              </p>
              <p className="uppercase font-bold underline ">
                DiBuat: {article.created_at}
              </p>
            </div>{" "}
            <div className="flex flex-row mb-5">
              <p className="uppercase font-bold underline">
                {" "}
                Artikel: {article.artikel}
              </p>
            </div>{" "}
            <div className="grid grid-cols-5  ">
              <Button
                onClick={() => {
                  return navigate("/article", { replace: true });
                }}
                title={"Kembali"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArticle;
