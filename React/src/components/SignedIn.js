import React from "react";
import { decrypt } from '../util'
import { NavLink } from "react-router-dom";

function SignedIn(props) {

    const stSession = sessionStorage.getItem('user')
    if(stSession){
        const plainText = decrypt(stSession)
        var user = JSON.parse(plainText) 
    }
   
  return (
    <div className="d-flex">
        <p id="hosgeldin">Hoşgeldin {user && user.name} !</p>
        <NavLink to={"/basket"} role="button" className="anasayfa">
              Sepete git
            </NavLink>
      <button onClick={props.SignOut} className="btn" >
        <span className="item-btn">Çıkış Yap</span>
      </button>
    </div>
  );
}

export default SignedIn;
