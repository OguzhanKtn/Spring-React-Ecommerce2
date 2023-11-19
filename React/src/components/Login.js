import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/LoginService'
import { encrypt } from '../util'
import { toast } from "react-toastify";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const sendForm = async(evt)=>{
    evt.preventDefault()
     try {
      await login(email,password).then(res=>{
      sessionStorage.setItem('jwt',res.data.jwt)
      const stData = JSON.stringify(res.data.result)
      const cipherText = encrypt(stData)
      sessionStorage.setItem('user',cipherText)
      navigate('/')  
    })
     } catch (error) {
      toast.error('Invalid username or password. Please try again.')
     }      
  }
  

  return (
   <> 
     <div className='login'>
        <h3 className='giris'><strong>GİRİŞ YAP</strong></h3>
        <form onSubmit={sendForm}>
            <input required type='email' className='form-control mt-3' placeholder='email' onChange={(evt)=>setEmail(evt.target.value)}></input>
            <input required type='password' className='form-control mt-3' placeholder='password' onChange={(evt)=>setPassword(evt.target.value)}></input> 
            <button type='submit' className='btn btn-primary mt-5' id='girisBtn'>GİRİŞ</button>
        </form>
     </div>
   </>
  )
}

export default Login