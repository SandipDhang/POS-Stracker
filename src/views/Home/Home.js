/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { getAllStocks } from "../../actions";
import { useDispatch } from "react-redux";

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
      <h1>This is from React</h1>
    </React.Fragment>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func,
};

export default Home;
