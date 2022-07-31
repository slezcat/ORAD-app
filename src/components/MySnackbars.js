import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MyErrorSnackbar({option}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const options = (option) => {
    switch (option) {
      case "success":
        return  {
          severity : "success",
          message : "This is a success message!",
        }
        case "warning":
        return  {
          severity : "warning",
           message : "This is a success message!",
        }
        case "error":
        return  {
          severity : "error",
           message : "This is a error message!",
        }
      default:
        break;
    }
  }

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity={options(option).severity} sx={{ width: "100%" }}>
          {options(option).message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
