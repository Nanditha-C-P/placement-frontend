// import { Button, makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const ButtonControl = ({ text, size, color, variant, onClick, ...other }) => {
  const classes = useStyles();
  return (
    <Button
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root }}
    >
      {text}
    </Button>
  );
};

export default ButtonControl;
