import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { general, prevPage } from "../features/identifierSlice";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 10) {
      setValue(10);
    } else if (value > 70) {
      setValue(70);
    }
  };

  const handleSubmit = () => {
    dispatch(general({ age : value }));
    navigate("/3");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={10}
            max={70}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 10,
              max: 70,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end" alignItems="center">
            <Button onClick={handleSubmit}>Next</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
