import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { categoryList } from "../services/CategoryService";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    await categoryList().then((res) => {
      setCategories(res.data.result);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="navbar" id="firstNavbar">
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <NavLink to={"/"} role="button" className="anasayfa">
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
                {categories.map((item, index) => (
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={"/category/" + item.cid}
                    >
                      <span className="item-text" key={index}>
                        {item.name}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Ara"
                aria-label="Search"
                id="search"
              />
              <button class="btn btn-outline-success" type="submit" id="search">
                <span style={{ color: "white" }}>Ara</span>
              </button>
            </form>
            <SignedIn/>
           <SignedOut/>
          </div>
        </div>
        <nav class="navbar bg-body-tertiary fixed-top" id="secondNavbar">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Anasayfa
                    </a>
                  </li>
                  <li class="nav-item dropdown3">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Kategoriler
                    </a>
                    <ul class="dropdown-menu">
                      {categories.map((item, index) => (
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to={"/category/" + item.cid}
                          >
                            <span className="item-text" key={index}>
                              {item.name}
                            </span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li class="nav-item dropdown3">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      GİRİŞ YAP
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" to={"/login"}>
                          <span className="item-text">Oturum aç</span>
                        </NavLink>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to={"/register"}>
                          <span className="item-text">Kayıt ol</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex mt-3" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Ara"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Ara
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
