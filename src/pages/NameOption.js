import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { general } from "../features/identifierSlice";
import { Button, Grid } from "@mui/material";
import { openSnack } from "../features/snackbarSlice";

const NameOption = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (name === "") {
      return dispatch(
        openSnack({ option: "error", message: "Please enter your name!" })
      );
    }
    dispatch(general({ name }));
    navigate("/2");
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Your name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Button onClick={handleSubmit} variant="text" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NameOption;
