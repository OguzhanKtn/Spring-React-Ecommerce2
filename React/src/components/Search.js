import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../services/ImageService";
import { orderSave } from "../services/OrderService";
import { toast } from "react-toastify";
import { decrypt } from "../util";
import { productSearch } from "../services/ProductService";

function Search(props) {
  const [products, setProducts] = useState([]);
  const [imagesList, setImagesList] = useState([]);
  const [userId, setUserId] = useState("");
  const session = sessionStorage.getItem("user");

  useEffect(() => {
    if (session) {
      const plainText = decrypt(session);
      var user = JSON.parse(plainText);
      setUserId(user.uid);
    } else {
      setUserId(null);
    }
  }, []);

  
  useEffect(() => {
    productSearch(props.handleSearch).then(res=>{
      setProducts(res.data.result)
    })
    images().then((res) => {
      setImagesList(res.data.result);
    });
  }, [props.handleSearch]);

  const addBasket = async (id) => {
    if (userId) {
      await orderSave(id, userId).then((res) => {
        if (res.data.status == true) {
          toast.success("Ürün sepete eklendi!");
        }
      });
    } else {
      toast.error("Lütfen giriş yapınız !");
    }
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {products.map((item, index) => (
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
                  <div className="d-flex justify-content-between">
                    <NavLink
                      to={"/detail/" + item.pid}
                      className="btn btn-primary"
                    >
                      Detail
                    </NavLink>
                    <button
                      onClick={() => addBasket(item.pid)}
                      className="btn btn-danger"
                    >
                      <i class="bi bi-cart3"></i>
                      Add basket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
