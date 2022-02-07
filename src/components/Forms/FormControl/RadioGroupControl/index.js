// import {
// 	FormControl,
// 	FormControlLabel,
// 	FormLabel,
// 	Radio,
// 	RadioGroup,
// } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const RadioGroupControl = ({
  name,
  label,
  value,
  onChange,
  items,
  ...other
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
            {...other}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupControl;

// items templete form parent
// const itemsList = [
// 	{ id: "item1Name", title: "item1Name" },
// 	{ id: "item2Name", title: "item2Name" },
// ];
