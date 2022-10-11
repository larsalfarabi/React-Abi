import React from "react";
import Skeleton from "react-loading-skeleton";
import { deleteArticle, getArticle } from "../../API/article";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/button";

export default function Article() {
  const navigate = useNavigate();
  const [listArticle, setListArticle] = React.useState([]);
  const [isFetchArticle, setIsFetchArticle] = React.useState(false);
  const getListArticleHandle = async () => {
    try {
      setIsFetchArticle(true);
      const response = await getArticle();
      console.log(response.data);
      setListArticle(response.data.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchArticle(false);
    }
  };
  console.log(listArticle);

  React.useEffect(() => {
    getListArticleHandle();
  }, []);
  return (
    <div className="border-collapse p-3">
      <Button
        title={"Tambah Artikel"}
        onClick={() => {
          return navigate("/article/createArticle", { replace: true });
        }}
      />
      <table className="table-auto w-full mt-2 ">
        <thead>
          <tr className="text-left border">
            <th>No</th>
            <th>Judul</th>
            <th>Thumbnail</th>
            <th>Article</th>
            <th>Penulis</th>
            <th>id</th>
            <th>Dibuat</th>
            <th>Diupdate</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isFetchArticle ? (
            <tr>
              <td colSpan={9}>
                <Skeleton
                  baseColor="white"
                  highlightColor="grey  "
                  height={80}
                  count={20}
                />
              </td>
            </tr>
          ) : (
            listArticle.map((article, index) => {
              return (
                <tr key={index} className=" border">
                  <td>{index + 1}</td>
                  <td>{article?.judul}</td>
                  <td>
                    <img src={article?.thumbnail} className="w-10 h-10" />
                  </td>
                  <div className="overflow-y-auto h-[50px] w-[10rem]">
                    <td>{article?.artikel}</td>
                  </div>

                  <td>{article?.user?.name}</td>
                  <td>{article?.id}</td>
                  <td>{article?.created_at}</td>
                  <td>{article?.updated_at}</td>
                  <div className="grid grid-rows-3 gap-2">
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/${article?.slug}`);
                      }}
                      className="text-blue-400"
                      title={"detail"}
                    />
                    <Button
                      onClick={() => {
                        return navigate(
                          `/artikel/update/${article?.id}/${article?.slug}`
                        );
                      }}
                      className="text-blue-400"
                      title={"edit"}
                    />
                    <Button
                      onClick={async (e) => {
                        e.preventDefault();
                        console.log("delete jalan");
                        const response = await deleteArticle(article?.id);
                        console.log(response);
                        if (response.data.status === "Fail") {
                          alert("tidak bisa dihapus");
                        } else {
                          alert("bisa dihapus");
                        }
                        getListArticleHandle();
                      }}
                      title={"delete"}
                      className="text-red-400"
                    />
                  </div>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
