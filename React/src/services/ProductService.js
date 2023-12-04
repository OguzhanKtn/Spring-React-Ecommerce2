import axios from "axios";

const config = axios.create({
    baseURL:'http://localhost:8090/',
    timeout:15000
})

const jwtToken = sessionStorage.getItem('jwt')

const headers = {
    Authorization :`Bearer ${jwtToken}`,
}

export const productAdd = (brand,model,price,stock,cid)=>{
    const sendObj = {
        brand:brand,
        model:model,
        price:price,
        stock:stock,
        cid:cid
    }
    return config.post('product/save',sendObj,{headers})
}

export const productDelete = (pid)=>{
    return config.post('product/delete/'+pid)
}

export const productUpdate = (pid,model,brand,price,stock)=>{
    const sendObj={
       pid:pid,
       model:model,
       brand:brand,
       price:price,
       stock:stock
    }
    return config.post('product/update',sendObj)
 }

 export const productList = ()=>{
    return config.get('product/productList')
 }

 export const productsByCategory = (id)=>{
    return config.get('product/listByCategory/'+id)
 }

 export const productDetail =(id)=>{
    return config.get('product/detail/'+id)
 }

 export const productSearch = (brand)=>{
    return config.get('product/search?q='+brand+'')
 }