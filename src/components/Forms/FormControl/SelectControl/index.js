import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import React from "react";

const SelectControl = ({
  name,
  label,
  error = null,
  value,
  onChange,
  options,
}) => {
  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          // console.log(option),
          // console.log(option.id),
          // console.log(option.unitTitle),
          <MenuItem key={option.id} value={option.unitTitle}>
            {option.unitTitle}
          </MenuItem>
        ))}
      </Select>
      {/* <NativeSelect label={label} name={name} value={value} onChange={onChange}>
				<optgroup label={label}>
					{options.map((option) => (
						<option key={option.id} value={option.title}>
							{option.title}
						</option>
					))}
				</optgroup>
			</NativeSelect> */}

      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectControl;
