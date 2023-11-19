import axios from "axios";

const config = axios.create({
    baseURL:'http://localhost:8090/',
    timeout:15000
})

export const imageSave = (image,id)=>{
    const sendObj ={
        image:image,
        id:id
    }
 return config.post('image/save',sendObj)
}

export const imageDelete =(id)=>{
    return config.post('image/delete/'+id)
}

export const images = (id)=>{
    return config.get('image/images/'+id)
}