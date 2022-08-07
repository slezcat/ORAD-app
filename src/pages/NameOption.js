import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { general } from "../features/identifierSlice";
import { Button, Grid } from "@mui/material";
import { openSnack } from "../features/snackbarSlice";
import { useSelector } from "react-redux";
import { red } from "@mui/material";

const NameOption = () => {
  const { generalInformation } = useSelector((state) => state.identifier);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setName(generalInformation.name);
    setLastName(generalInformation.lastName);
  }, [generalInformation]);

  const generalIsTrue = generalInformation.name?.length < 1;
  const nameIsTrue = name?.length < 1;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    try {
      if ((name).includes(" ") || (lastName).includes(" ")) {
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
        dispatch(general({ name, lastName }));
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
        <Typography variant="subtitle2" color={"#f50057"} sx={{ mb: 1 }}>
          Required*
        </Typography>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="First name"
          variant="outlined"
          placeholder="E.g. slez"
          value={name || ""}
          sx={{ mb: 2 }}
          onChange={(e) => setName(e.target.value)}
        />
        <Typography variant="subtitle2" color={"#2196f3"} sx={{ mb: 1 }}>
          Optional*
        </Typography>

        <TextField
          fullWidth
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          placeholder="E.g. cat"
          value={lastName || ''}
          onChange={(e) => setLastName(e.target.value)}
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
