import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

import { fetchUser } from "../../../actions/Accounts";

const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
    dispatch(fetchUser(data));
  };
  return (
    <form className="form">
      <div className="input_feild">
        <i className="fas fa-at"></i>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input_feild">
        <i className="fas fa-key"></i>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleFormSubmit} className="login_btn">
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  dispatch: PropTypes.func,
};

export default LoginForm;
