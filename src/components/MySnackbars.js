import { forwardRef } from "react";
import { closeSnack } from "../features/snackbarSlice";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MySnackbars({ option, message }) {
  const dispatch = useDispatch();
  const { isSnackOpen } = useSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeSnack());
  };

  const options = (option) => {
    switch (option) {
      case "success":
        return {
          severity: "success",
          message,
        };
      case "warning":
        return {
          severity: "warning",
          message,
        };
      case "error":
        return {
          severity: "error",
          message,
        };
      default:
        break;
    }
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isSnackOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={options(option).severity}
          sx={{ width: "100%" }}
        >
          {options(option).message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
