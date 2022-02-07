// import { makeStyles } from "@material-ui/core";
// import { makeStyles } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

export const useForm = (initialValues, validateOnChange = false, validate) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(`name`, name);
    // console.log(`value`, value);
    // console.log(name, value);

    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = (e) => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, setValues, errors, setErrors, handleInputChange, resetForm };
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiFormControl-root": {
//       width: "100%",
//       margin: theme.spacing(1),
//     },
//   },
// }));

export const Form = ({ children, ...other }) => {
  // const classes = useStyles();
  return (
    <form
      // className={classes.root}
      autoComplete="off"
      {...other}
    >
      {children}
    </form>
  );
};
