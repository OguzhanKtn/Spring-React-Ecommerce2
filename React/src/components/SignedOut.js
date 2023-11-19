import React from 'react'
import { NavLink } from "react-router-dom";

function SignedOut() {
  return (
    <div className="d-flex">
              <i
                class="bi bi-box-arrow-right"
                style={{
                  alignItems: "center",
                  display: "flex",
                  fontSize: "x-large",
                  color: "yellow",
                }}
              ></i>
              <div class="dropdown2">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="kategori-text">GİRİŞ YAP</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to={"/login"}>
                      <span className="item-text">Oturum aç</span>
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to={"/register"}>
                      <span className="item-text">Kayıt ol</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
  )
}

export default SignedOut