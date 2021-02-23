/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { getAllStocks } from "../../actions/Products";
import { useDispatch } from "react-redux";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllStocks());
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Home - STracker | Track you stocks</title>
      </Helmet>
      <h1 className="myHead">
        This is from React{" "}
        <span>
          <Link to="/login" style={{ color: "#000" }}>
            Login
          </Link>
        </span>
      </h1>
    </React.Fragment>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func,
};

export default Home;
