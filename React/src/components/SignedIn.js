import React from "react";
import { decrypt } from '../util'

function SignedIn() {

    const stSession = sessionStorage.getItem('user')
    if(stSession){
        const plainText = decrypt(stSession)
        var user = JSON.parse(plainText) 
    }
   

    const clearSession = ()=>{
        sessionStorage.removeItem('jwt')
        sessionStorage.removeItem('user')
    }

  return (
    <div className="d-flex">
        <p>Hoşgeldin {user && user.name}</p>
      <button onClick={clearSession} className="btn" to={"/"}>
        <span className="item-text">Çıkış Yap</span>
      </button>
    </div>
  );
}

export default SignedIn;
