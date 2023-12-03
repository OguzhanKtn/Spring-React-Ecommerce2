import React, { useEffect, useState } from 'react'
import { orderDelete, orderListByUser } from '../services/OrderService'
import { decrypt } from '../util'
import { toast } from 'react-toastify'

function Basket() {

  const[orders,setOrders] = useState([])
  const[totalPrice,setTotalPrice] = useState(Number)
  const session = sessionStorage.getItem("user")
  let total = 0
  

  useEffect(() => {  
    if(session){
      const plainText = decrypt(session)
      var user = JSON.parse(plainText)
    }
     orderListByUser(user.uid).then(res=>{
      setOrders(res.data.result)
      res.data.result.map((item)=>{
        total += item.price * item.quantity
      })
      setTotalPrice(total)
    })
  }, [])
  
  const cancelOrder = async (id)=>{
      await orderDelete(id)
      const plainText = decrypt(session);
      var user = JSON.parse(plainText);
      const res = await orderListByUser(user.uid);
      setOrders(res.data.result);
        
      res.data.result.map((item) => {
          total += item.quantity * item.price;
      });
    
      setTotalPrice(total);

      if(orders.length >0){
        toast.success("One product has removed !")
      }else{
        toast.warning("No any product in basket !")
      }
  }

  return (
   <>
      {orders.length > 0 && (
        <div className="container">
          <div className="col-sm-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item,index)=>(
                <tr key={index}>
                  <th scope="row">{item.brand}</th>
                  <td>{item.model}</td>
                  <td>{item.price} $</td>
                  <td>{item.quantity}</td>
                  <td><button className="btn btn-danger btn-sm" onClick={()=> cancelOrder(item.oid)}>Delete</button></td>
                </tr>
              ))}         
            </tbody>
          </table>
          </div>
          <div className="col-sm-6">
            <h4>Total Price : {totalPrice} $</h4>
          </div>
        </div>
      )}
    
   </>
  )
}

export default Basket