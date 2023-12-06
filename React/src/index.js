import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Basket from "./components/Basket";
import ImageAdd from "./adminPanel/ImageAdd";
import ProductManager from "./adminPanel/ProductManager";
import Detail from "./components/Detail";
import Search from "./components/Search";
import Home from "./components/Home";


const router = (
  <BrowserRouter>
  <ToastContainer position='top-center' transition={Flip} autoClose={5000} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/register" element={<Register />} />
      <Route path="/basket" element={<Basket/>} />
      <Route path="/detail/:id" element={<Detail/>} />
      <Route path="/imageAdd/:id" element={<ImageAdd/>} />
      <Route path="/productManager" element={<ProductManager/>}/>
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  router
);
