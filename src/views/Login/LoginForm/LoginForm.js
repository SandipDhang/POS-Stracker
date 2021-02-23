import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addUser } from "../../../actions/Accounts";

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
    dispatch(addUser(data));
  };
  return (
    <form>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleFormSubmit}>
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  dispatch: PropTypes.func,
};

export default LoginForm;
