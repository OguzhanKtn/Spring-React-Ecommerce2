import axios from "axios";

const config = axios.create({
    baseURL:'http://localhost:8090/',
    timeout:15000
})

const jwtToken = sessionStorage.getItem('jwt')

const headers = {
    Authorization :`Bearer ${jwtToken}`,
}
export const orderSave = (pid,uid)=>{
    const sendObj = {
        pid:pid,
        uid:uid
    }
    return config.post('order/save',sendObj,{headers})
}

export const orderDelete =(id)=>{
    return config.delete('order/delete/'+id,{headers})
}

export const orderList = ()=>{
    return config.get('order/listAll')
}

export const orderListByUser = (id)=>{
    return config.get('order/listByUser/'+id,{headers})
}