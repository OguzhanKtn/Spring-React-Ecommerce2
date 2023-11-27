import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { productList } from "../services/ProductService";
import { NavLink } from "react-router-dom";
import { images } from "../services/ImageService";

function Home() {

  const[products,setProducts] = useState([])
  const[imagesList,setImagesList] = useState([])

  useEffect( () => {
   productList().then(res=>{
    setProducts(res.data.products)
   })

   images().then(res=>{
    setImagesList(res.data.result)
   })

  }, [])


  return (
    <>
     <Navbar/>
     <div className="container mt-3">
      <div className="row">
        {products.map((item,index)=>(
          <div className="col-sm-3" key={index}>
          <div className="card">
            <img
             src={
              "data:image/png;base64," +
              imagesList.find((i) => item.pid === i.pid)?.image
            }
              style={{ height: 200 }}
              className="card-img-top"
              alt={`Product ${item.pid}`}
            />
            <div className="card-body">
              <h5 className="card-title">{item.brand}</h5>
              <p className="card-text">{item.model}</p>
              <p className="card-text">{item.price}$</p>
              <NavLink to={"/detail/" + item.pid} className="btn btn-primary">
                Detail
              </NavLink>
            </div>
          </div>
          </div>
        ))}
      </div>
     </div>
    </>
  );
}

export default Home;
