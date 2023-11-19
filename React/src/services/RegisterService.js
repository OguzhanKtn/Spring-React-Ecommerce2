import axios from "axios";

const config = axios.create({
    baseURL:'http://localhost:8090/',
    timeout:15000
})

export const register =(name,surname,email,password) => {
    const sendObj ={
        name:name,
        surname:surname,
        email:email,
        password:password
    }

    return config.post('user/register',sendObj)
}