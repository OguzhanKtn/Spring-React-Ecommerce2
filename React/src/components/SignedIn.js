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
        <div style={{margin:"auto",marginRight:"20px"}}>
        
        <NavLink to={"/basket"} role="button" className="sepet">
        <i className="bi bi-cart3"></i>
              Sepete git
            </NavLink>
        </div> 
       <div style={{margin:"auto"}}>
       <p id="hosgeldin">Hoşgeldin {user && user.name} !</p>
       <button onClick={props.SignOut} className="btn" >
        <span className="item-btn" style={{marginLeft:"15px"}}>Çıkış Yap</span>
      </button>
        </div>        
    </div>
  );
}

export default SignedIn;
