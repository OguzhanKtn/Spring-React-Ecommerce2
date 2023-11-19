import axios from "axios";

const config = axios.create({
    baseURL:'http://localhost:8090/',
    timeout:15000
})

export const orderSave = (pid,uid)=>{
    const sendObj = {
        pid:pid,
        uid:uid
    }
    return config.post('order/save',sendObj)
}

export const orderDelete =(id)=>{
    return config.post('order/delete/'+id)
}

export const orderList = ()=>{
    return config.get('order/listAll')
}

export const orderListByUser = (id)=>{
    return config.get('order/listByUser/'+id)
}