import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { general, prevPage } from "../features/identifierSlice";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function ToggleButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gender, setGender] = React.useState("male");

  const handleGender = (event, newGender) => {
    setGender(newGender);
  };
  //get the answer and go to next page
  const handleSubmit = () => {
    dispatch(general({ gender }));
    navigate("/2");
  };
  //go to previous page
  // const back = () => {
  //   dispatch(prevPage());
  // };

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
          <Grid container justifyContent="flex-end" alignItems="center">
            <Button onClick={handleSubmit}>Next</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
