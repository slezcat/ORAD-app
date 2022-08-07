import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { obtainKey } from "../obtainKey";

const Result = () => {
  const { knownSymptom, generalInformation } = useSelector(
    (state) => state.identifier
  );

  return (
    <Box>
      <Typography variant="h6">
        Name :{generalInformation.name + "."}
        {generalInformation?.lastName === undefined
          ? ""
          : " " + generalInformation.lastName}
        <br />
        Gender : {generalInformation.gender}
        <br />
        Age : {generalInformation.age}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Most Likely Lesions :</Typography>
        {obtainKey(knownSymptom)}
      </Typography>
      <Button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Result;
