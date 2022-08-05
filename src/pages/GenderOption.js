import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { general, prevPage } from "../features/identifierSlice";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import Typography from "@mui/material/Typography";

export default function ToggleButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gender, setGender] = React.useState("male");

  const handleGender = (event, newGender) => {
    setGender(newGender);
  };
  const handleSubmit = () => {
    dispatch(general({ gender }));
    navigate("/3");
  };
  const handleBack = () => {
    dispatch(prevPage());
    navigate("/1");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center">
            <ToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGender}
              size="large"
            >
              <ToggleButton value="male" color="primary">
                <MaleIcon />
                <Typography>male</Typography>
              </ToggleButton>
              <ToggleButton value="female" color="primary">
                <FemaleIcon />
                <Typography>female</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Button onClick={handleBack} variant="text" color="primary">
              Back
            </Button>
            <Button onClick={handleSubmit} variant="text" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
