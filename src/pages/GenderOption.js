import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { general, prevPage } from "../features/identifierSlice";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

//gender options
const options = ["male", "female"];

export default function GenderOption() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gender, setGender] = useState("male");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  //get the answer and go to next page
  const handleSubmit = () => {
    dispatch(general({ gender }));
    navigate("/2");
  };
  //go to previous page
  const back = () => {
    dispatch(prevPage());
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
        <Button onClick={back}>Back</Button>
      </FormControl>
    </>
  );
}
