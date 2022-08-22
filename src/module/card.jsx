import React from "react";

export default function Card({ data, setData }) {
  console.log("data adalah", data);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });

    console.log(filter);
    setData(() => {
      return filter;
    });

    console.log("button delete klik");
  };
  return (
    <React.Fragment>
      <div className="flex flex-row flex-wrap">
        {data?.map((item, i) => {
          return (
            <div className="submit">
              <p>{item.judul}</p>
              <p className="mb-28">{item.catatan}</p>
              <p>{item.id}</p>
              <button className="delete" value={item?.id} onClick={handleDelete}>
                Hapus
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
