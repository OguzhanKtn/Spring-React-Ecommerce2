import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  router
);
