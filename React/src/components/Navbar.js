import React, {useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import { categoryList } from "../services/CategoryService";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";


function Navbar(props) {
  const [categories, setCategories] = useState([]);
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const session = sessionStorage.getItem('jwt')
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    props.handleSearch(searchTerm)
  };

  function handleSignOut(){
    setIsAuthenticated(false)
    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('user')
    props.signOut()
  }
 
  useEffect(() => {
    if(session){
      setIsAuthenticated(true)
    }
      categoryList().then((res) => {
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
                  <li key={index}>
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
            <form class="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Ara"
                aria-label="Search"
                id="search"
                onChange={handleSearchChange}
              />
              <button class="btn btn-outline-success" type="submit" id="search">
                <span style={{ color: "white" }}>Ara</span>
              </button>
            </form>
            {isAuthenticated?<SignedIn SignOut={handleSignOut}/>:<SignedOut/>} 
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
              <div class="offcanvas-body" style={{backgroundColor:"black"}}>
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" style={{color:"white"}} aria-current="page" href="/" id="anasayfa">
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
                      style={{color:"white"}}
                      id="kategoriler"
                    >
                      Kategoriler
                    </a>
                    <ul class="dropdown-menu">
                      {categories.map((item, index) => (
                        <li key={index}>
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
                  {isAuthenticated?<SignedIn SignOut={handleSignOut}/>:<SignedOut/>} 
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
