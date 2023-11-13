import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="navbar" id="firstNavbar">
          <div className="d-flex" style={{justifyContent: "space-between"}}>
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
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
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
                        <a class="dropdown-item" href="#">
                          Oturum aç
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Kayıt ol
                        </a>
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

export default Home;
