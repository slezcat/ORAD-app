import { useState } from "react";
import { openSnack } from "../features/snackbarSlice";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { general, prevPage } from "../features/identifierSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

//age options
const options = [20, 30, 40];

export default function AgeOption() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //get the answer and go to next page
  const handleSubmit = () => {
    if (age === "") {
      return (
        dispatch(openSnack({option:"error", message: "invalid age",}))
      );
    }
    dispatch(general({ age }));
    navigate("/3");
  };
  //go to previous page
  const back = () => {
    dispatch(prevPage());
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
        <Button onClick={back}>Back</Button>
      </FormControl>
    </Box>
  );
}
