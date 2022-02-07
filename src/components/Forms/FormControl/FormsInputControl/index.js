// import { TextField } from "@material-ui/core";
import { TextField } from "@mui/material";
import React from "react";

const FromInputControl = ({
  label,
  name,
  value,
  error = null,
  onChange,
  // isRequired = false,
  isType,
  ...other
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      // required={isRequired}
      type={isType}
      {...(error && { error: true, helperText: error })}
      {...other}
    />
  );
};

export default FromInputControl;
