import GenderOption from "./pages/GenderOption";
import * as React from "react";
import { red, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    red: {
      main: red[500],
      light: red[100],
      dark: red[700],
      contrastText: "white",
    },
    blue: {
      main: blue[500],
      light: blue[100],
      dark: blue[700],
      contrastText: "white",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        
        <GenderOption />
      </ThemeProvider>
    </>
  );
}

export default App;
