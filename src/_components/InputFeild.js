import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const InputFeild = ({ type, label, varient }) => {
  return <TextField label={label} variant={varient} fullWidth />;
};

export default InputFeild;
