import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const steps = ["Type a Name", "Select Gender", "Select Age", "Select Symptom"];

export default function MyStepper() {
  const { activeStep } = useSelector((state) => state.identifier);

  return (
    <Box sx={{ width: "100%" ,mt:"2vw",px:"5vw"}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
     
    </Box>
  );
}
