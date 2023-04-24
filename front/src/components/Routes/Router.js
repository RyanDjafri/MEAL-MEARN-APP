import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "../../Pages/SignUpPage";
import SignInPage from "../../Pages/SignInPage";
import PageError from "../../Pages/PageError";
import Home from "../../Pages/Home";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<SignUpPage />}></Route>
          <Route path="/login" element={<SignInPage />}></Route>
          <Route path="/*" element={<PageError />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
