import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const Result = () => {
  const { knownSymptom, generalInformation } = useSelector(
    (state) => state.identifier
  );
  const jaw1 = () => {
    const j = knownSymptom;
    if (
      j[0].b[0] === j[0].a[0] &&
      j[1].b === j[1].a[0] &&
      j[2].b === j[2].a[0] &&
      j[3].b === j[3].a[0] &&
      j[4].b === j[4].a[0] &&
      j[5].b === j[5].a[0] &&
      j[6].b[0] === j[6].a[0] &&
      j[7].b === j[7].a[0] &&
      j[8].b === j[8].a[0]
    ) {
      return "Pulpitis irreversible symptomatic with periodontitis Apicalis Symptomatic";
    } else if (
      j[0].b[0] === (j[0].a[0] || j[0].a[1] || j[0].a[2]) &&
      j[1].b === j[1].a[1] &&
      j[2].b === j[2].a[1] &&
      j[3].b === j[3].a[4] &&
      j[4].b === j[4].a[1] &&
      j[5].b === j[5].a[1] &&
      j[6].b[0] === (j[6].a[0] || j[6].a[1]) &&
      j[7].b === j[7].a[0] &&
      j[8].b === j[8].a[0]
    ) {
      return "Periodontitis";
    } else {
      return "sorry, no combination can be found!";
    }
  };

  return (
    <Box>
      <Typography variant="h6">
        Name : {generalInformation.name}
        <br />
        Gender : {generalInformation.gender}
        <br />
        Age : {generalInformation.age}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Most Likely Lesions :</Typography>
        {jaw1()}
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
