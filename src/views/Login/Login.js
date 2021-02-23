import React from "react";
import { Helmet } from "react-helmet";

import LoginForm from "./LoginForm/LoginForm";

import "./Login.css";
import BrandImg from "../../assets/logo.png";

const ImgUrl =
  "https://images.unsplash.com/photo-1602016753527-3b369b88af5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const Login = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Login to your acoount | STracker</title>
      </Helmet>
      <div className="login_container">
        <div className="image_holder">
          <img src={ImgUrl} alt="hero banner" />
          <div className="image_overlay"></div>
        </div>
        <div className="form_holder">
          <div className="brand_logo">
            <img src={BrandImg} alt="brand_logo" />
          </div>
          <div className="form_contaner">
            <LoginForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
