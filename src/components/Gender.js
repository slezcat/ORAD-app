import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { general } from "../features/identifierSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Gender() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gender, setGender] = useState("male");

  const options = ["male", "female"];

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = () => {
    dispatch(general({ gender }));
    navigate("/2")
  };

  return (
    <>
      <FormControl required>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={gender}
          onChange={handleChange}
        >
          {options.map((i) => (
            <FormControlLabel value={i} control={<Radio />} label={i} />
          ))}
        </RadioGroup>
        <Button onClick={handleSubmit}>Next</Button>
      </FormControl>
    </>
  );
}

export default Gender;
