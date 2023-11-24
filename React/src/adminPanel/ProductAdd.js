import React, { useEffect, useState } from 'react'
import { categoryList } from '../services/CategoryService'

function ProductAdd() {

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


}, [])

const getOption = (event) => {
  const value = event.target.value;
  setCid(value);
};


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <form>
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
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default ProductAdd