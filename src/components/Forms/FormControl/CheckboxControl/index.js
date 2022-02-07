// import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import React from "react";

const convertToDefaultEventParameter = (name, value) => ({
  target: {
    name,
    value,
  },
});

const CheckboxControl = ({ name, label, value, onChange, ...other }) => {
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            color="primary"
            checked={value}
            onChange={
              (e) =>
                onChange(convertToDefaultEventParameter(name, e.target.checked))
              // console.log()
            }
            {...other}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default CheckboxControl;
