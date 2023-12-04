import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productDetail } from '../services/ProductService'
import { orderSave } from '../services/OrderService'
import { toast } from 'react-toastify'
import { imagesById } from '../services/ImageService'
import { decrypt } from '../util'

function Detail() {

const navigate = useNavigate()
const params = useParams()
const id = params.id

const[product,setProduct] = useState(null)
const[image,setImage] = useState([])
const[imgPrd,setImgPrd] = useState("")

useEffect(() => {
 productDetail(id).then(res =>{
    setProduct(res.data.result)
 })
 imagesById(id).then(res=>{
    setImage(res.data.result)
    setImgPrd(res.data.result[0].image)
 })
}, [])


const addBasket = (pid) => {
    const stSession = sessionStorage.getItem('user')
    if(stSession == null){
      navigate("/login")
    }else {
      const plainText = decrypt(stSession)
      var user = JSON.parse(plainText) 
      orderSave(pid,user.uid).then(res =>{
        if(res.data.status==true){
            toast.success("Ürün başarıyla eklendi !")
        }  
      })
    }
  }

const goToBasket = () => {
    const stSession = sessionStorage.getItem('user')
    if(stSession == null){
      navigate("/login")
    }else{
      navigate("/basket")
    }
  }

  return (
    <>
        {product && (
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <h2>{product.brand}</h2>
            <p>Model : {product.model}</p>
            <p>Price : {product.price}$</p>
            <p>Stock : {product.stock}</p>
            <button className="btn btn-danger" onClick={()=> addBasket(product.pid)}>
              <i className="bi bi-cart3"></i> Add Basket
            </button>
            <button className="btn btn-primary" style={{marginLeft:"5px"}} onClick={()=> goToBasket()}>
              <i className="bi bi-cart3"></i> Go to basket
            </button>
          </div>
          <div className="col-sm-6">
            <img src={"data:image/png;base64,"+imgPrd} className="img-fluid img-thumbnail" />
          </div>
        </div>  
      )}
      {image && (
        <div className="row">
          <div className="col-sm-6"></div>
          <div className="col-sm-6">
            <div className="row mt-3">
              {image.map((item, index) => (
                <div
                  className="col-2"
                  key={index}
                  role="button"
                  onClick={() => setImgPrd(item.image)}
                >
                  <img src={"data:image/png;base64,"+item.image} className="img-thumbnail" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail