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

  }, [])

  useEffect(() => {
    // Fetch images for all products
    Promise.all(products.map((item) => images(item.pid)))
      .then((imageResponses) => {
        // Extract the image data from responses
        const imageList = imageResponses.map((res) => res.data.result);
        setImagesList(imageList);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [products]);

  
  return (
    <>
     <Navbar/>
     <div className="container mt-3">
      <div className="row">
        {products.map((item,index)=>(
          <div className="col-sm-3" key={index}>
          <div className="card">
            <img
              src={imagesList[index]} 
              style={{ height: 200 }}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{item.brand}</h5>
              <p className="card-text">{item.model}</p>
              <p className="card-text">{item.price}$</p>
              <NavLink to={"/detail/" + item.id} className="btn btn-primary">
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
