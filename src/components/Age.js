import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux/es/exports";
import Button from "@mui/material/Button";
import { general } from "../features/identifierSlice";
import Alert from "@mui/material/Alert";

export default function BasicSelect() {
  const dispatch = useDispatch();
  const [age, setAge] = useState("");

  const options = [20, 30, 40];

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = () => {
    console.log(age)
    if (age === "") {
      return (
        <Alert severity="success" color="info">
          This is a success alert — check it out!
        </Alert>
      );
    }
    dispatch(general({ age }));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          defaultValue=""
          onChange={handleChange}
        >
          {options.map((option, i) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
        <Button onClick={handleSubmit}> Next </Button>
      </FormControl>
    </Box>
  );
}
