import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { identifier } from "../features/identifierSlice";
import { Box } from "@mui/system";

const Result = () => {
  const { knownSymptom, generalInformation } = useSelector((state) => state.identifier);
  // const j = knownSymptom;
  // console.log(j[1].a[1])
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
      j[0].b[0] === (j[0].a[0] || j[0].a[1] || j[0].a[2])&&
      j[1].b === j[1].a[1] &&
      j[2].b === j[2].a[1] &&
      j[3].b === j[3].a[4] &&
      j[4].b === j[4].a[1] &&
      j[5].b === j[5].a[1] &&
      j[6].b[0] === (j[6].a[0] || j[6].a[1])&&
      j[7].b === j[7].a[0] &&
      j[8].b === j[8].a[0]
    ) {
      return "Periodontitis";
    }else{
      return "sorry, no combination can be found!";
    }
  };

  //   for (let [index, item] of knownSymptom.entries()) {
  //     console.log(item)

  //     if (
  //       item.b === item.a[0]
  //     ) {
  //       return "Pulpitis irreversible symptomatic with periodontitis Apicalis Symptomatic";
  //     }
  //   }
  // };

  console.log(jaw1());
  return (
    <Box>
      <Typography variant="h6">
        Gender : {generalInformation.gender}
        <br />
        Age : {generalInformation.age}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mt:2}}>
      {jaw1()}
      </Typography>
      
      {/* {knownSymptom.map((e) => {
        return <div>{e.b}</div>;
      })} */}
    </Box>
  );
};

export default Result;
