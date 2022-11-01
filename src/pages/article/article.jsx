import React from "react";
import Skeleton from "react-loading-skeleton";
import { deleteArticle, getArticle } from "../../API/article";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/button";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/action/countAction";

export default function Article() {
  const navigate = useNavigate();
  const [listArticle, setListArticle] = React.useState([]);
  const [isFetchArticle, setIsFetchArticle] = React.useState(false);
  const [page, setPage] = React.useState(100);
  const store = useSelector((state) => state);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

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
      <div className="grid grid-cols-7 gap-5 ">
        <Button
          title={"Tambah Artikel"}
          onClick={() => {
            return navigate("/article/createArticle", { replace: true });
          }}
        />
        <div className="flex flex-col">
          status: {count.status}
          value: {count.value}
        </div>

        <Button
          onClick={() => {
            dispatch(decrement());
          }}
          title={"Previous"}
        />

        <Button
          onClick={() => {
            dispatch(increment());
          }}
          title={"Next"}
        />

        <Button
          title={"green"}
          color="green"
          onClick={() => {
            dispatch({ type: "change", color: "#32a862" });
          }}
        />

        <Button
          title={"yellow"}
          color="yellow"
          onClick={() => {
            dispatch({ type: "change", color: "#e9f542" });
          }}
        />
        <Button
          title={"kembali"}
          color="#"
          onClick={() => {
            dispatch({ type: "return" });
          }}
        />
      </div>
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
                      className="button2"
                      title={"detail"}
                      color="blue"
                    />
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/update/${article?.slug}`);
                      }}
                      className="button2"
                      title={"edit"}
                      color="blue"
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
                      color="red"
                      className="text-red-400 button2"
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
