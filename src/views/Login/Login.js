import React from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputFeild from "../../_components/InputFeild";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "block",
    flexWrap: "wrap",
    width: "50%",
  },
  container: {
    backgroundColor: "#424242",
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet>
        <title>Login to your acoount | STracker</title>
      </Helmet>
      <div className={classes.root}>
        <Paper className={classes.container}>
          <InputFeild label="Username" fullWidth varient="outlined" />
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default Login;
