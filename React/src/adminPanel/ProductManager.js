import React, { useEffect, useState } from 'react'
import { categoryList } from '../services/CategoryService'
import { productAdd, productDelete, productList } from '../services/ProductService'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

function ProductManager() {

const[brand,setBrand] = useState('')
const[model,setModel] = useState('')
const[price,setPrice] = useState('')
const[stock,setStock] = useState('')
const [cid, setCid] = useState("");
const[categories,setCategories] = useState([])
const[products,setProducts] = useState([])

useEffect(() => {
  categoryList().then(res=>{
    setCategories(res.data.result)
  }) 
  productList().then(res=>{
    setProducts(res.data.products)
  })
}, [])

const getOption = (event) => {
  const value = event.target.value;
  setCid(value);
};

const sendForm = async(evt)=>{
  evt.preventDefault()
  await productAdd(brand,model,price,stock,cid).then(res=>{
    if(res.status==200){
      toast.success("Ürün eklendi !")
    }else{
      toast.error("Ürün eklenemedi !")
    }
    
  })
}

const deleteProduct = async(pid) => {
  await productDelete(pid).then(res=>{
    if(res.status==200){
      toast.success("Product has deleted !")
    }else{
      toast.error("Cannot deleted !")
    }
  })
  const res = await productList()
  setProducts(res.data.products)
}

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <h4>Product Add</h4>
            <form onSubmit={sendForm}>
            <div className="mb-3">
              <label className="form-label">Brand</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(evt) => setBrand(evt.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Model</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(evt) => setModel(evt.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(evt) => setPrice(evt.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(evt) => setStock(evt.target.value)}
              />
            </div>
            <div className="mb-3">
              <select
                onChange={getOption}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Category</option>
                {categories.map((item) => (
                  <option value={item.cid}>{item.name}</option>
                ))}
              </select>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </div>
          <div className="col-sm-9">
          <h4 className="text-center">Products</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
                <th scope="col">Add Image</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.brand}</td>
                  <td>{item.title}</td>
                  <td>{item.price}$</td>
                  <td>{item.stock}</td>
                  <td><button className="btn btn-danger btn-sm" onClick={()=> deleteProduct(item.pid)}>Delete</button></td>
                  <td><NavLink to={"/updateproduct/"+item.pid} role="button" className="btn btn-warning btn-sm">Update</NavLink></td>
                  <td><NavLink to={"/imageAdd/"+item.pid} role="button" className="btn btn-primary btn-sm">Add image</NavLink></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    
    </>
  )
}

export default ProductManager