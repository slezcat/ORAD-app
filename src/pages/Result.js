import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import identifierSlice from "../features/identifierSlice";

const Result = () => {
  const { knownSymptom, generalInformation } = useSelector(
    (state) => state.identifier
  );

  const generateBinary = (optLength, list) => {
    let tempArr = new Array(optLength).fill("0");
    for (let i = 0; i < list.length; i++) {
      tempArr[tempArr.length - 1 - list[i]] = "1";
    }
    return "" + parseInt(tempArr.join(""), 2);
  };

  const jaw1 = () => {
    const j = knownSymptom;
    let key = "";
    for (let i = 0; i < j.length; i++) {
      if (Array.isArray(j[i].b)) {
        key += (i === 0 ? "" : "-") + generateBinary(j[i].a.length, j[i].b);
      } else {
        key += (i === 0 ? "" : "-") + j[i].b;
      }
    }
    const [f, ...rest] = key;
    const key1 = `${f}-0-0-0-0-0-1-0-0`;
    const key2 = `${
      f === "2" || f === "3" || f === "5" ? f : "0"
    }-0-0-0-0-0-1-0-0`;
    
    const DIAGNOSE = {
      [key1]: "predidintitis",
      [key2]: "gatau",
    };
    return DIAGNOSE[key];
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
