import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="d-flex">
            <NavLink to={"/"} role="button" className="btne">
              Anasayfa
            </NavLink>
            <div class="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="kategori-text">Kategoriler</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to={"/action"}>
                    <span className="item-text">Action</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/another"}>
                    <span className="item-text">Another action</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/sth"}>
                    <span className="item-text">Something else here</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Ara"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
             <span style={{color:"white"}}>Ara</span> 
            </button>
          </form>
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
        </div>
      </div>
    </>
  );
}

export default Home;
