import React from "react";
import { decrypt } from '../util'
import { useNavigate } from "react-router-dom";

function SignedIn(props) {

   const navigate = useNavigate()

    const stSession = sessionStorage.getItem('user')
    if(stSession){
        const plainText = decrypt(stSession)
        var user = JSON.parse(plainText) 
    }
   
  return (
    <div className="d-flex">
        <p>Hoşgeldin {user && user.name}</p>
      <button onClick={props.SignOut} className="btn" >
        <span className="item-text">Çıkış Yap</span>
      </button>
    </div>
  );
}

export default SignedIn;
