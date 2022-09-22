import React from "react";

export default function Card({ data, setData }) {
  console.log("data adalah", data);

  const handleDelete = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    let filter = data.filter((item) => {

      return item.id !== parseFloat(e.target.value);
    });

    console.log(filter);
    setData(()=>{
      return(filter)
    })

    console.log('button delete klik');
  }
  return (
    <React.Fragment>
      <div> 
        {data?.map((item, i) => {
          return (
            <div className="submit" >
              <p>id : {item.id}</p>
              <p>Username: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Password: {item.password}</p>
              <p>konfirmasi Password: {item.confirmPassword}</p>
              <button value={item?.id} onClick={handleDelete}>Hapus</button>
            </div>
          );
        })}
        
      </div>
    </React.Fragment>
  );
}
