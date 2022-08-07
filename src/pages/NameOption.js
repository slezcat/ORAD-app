import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { general } from "../features/identifierSlice";
import { Button, Grid } from "@mui/material";
import { openSnack } from "../features/snackbarSlice";
import { useSelector } from "react-redux";

const NameOption = () => {
  const { generalInformation } = useSelector((state) => state.identifier);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(generalInformation.name);
  }, [generalInformation]);

  const generalIsTrue = generalInformation.name?.length < 1;
  const nameIsTrue = name?.length < 1;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    try {
      if (name.includes(" ")) {
        return dispatch(
          openSnack({
            option: "error",
            message: "Please remove any whitespaces!",
          })
        );
      } else if (generalIsTrue || nameIsTrue) {
        return dispatch(
          openSnack({
            option: "error",
            message: "Please provide with a name",
          })
        );
      } else {
        dispatch(general({ name }));
        navigate("/2");
      }
    } catch {
      return dispatch(
        openSnack({
          option: "error",
          message: "Please provide with a name",
        })
      );
    }
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
          placeholder="E.g. slezcat"
          value={name || ""}
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
