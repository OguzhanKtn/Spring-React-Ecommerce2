import axios from "axios";

const config = axios.create({
    baseURL:'http://localhost:8090/',
    timeout:15000
})

export const categorySave = (name)=>{
   const sendObj = {
    name:name
   }
   return config.post('category/save',sendObj)
}

export const categoryDelete = (id)=>{
    return config.post('category/delete/'+id)
}

export const categoryList = ()=>{
    return config.get('category/list')
}