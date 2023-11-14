import React from 'react'

function Login() {
  return (
   <>
    
     <div className='login'>
        <h3 className='giris'><strong>GİRİŞ YAP</strong></h3>
        <form>
            <input type='email' className='form-control mt-3' placeholder='email'></input>
            <input type='password' className='form-control mt-3' placeholder='password'></input> 
            <button type='submit' className='btn btn-primary mt-5' id='girisBtn'>GİRİŞ</button>
        </form>
     </div>
   </>
  )
}

export default Login