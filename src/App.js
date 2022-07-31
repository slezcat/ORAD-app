import GenderOption from "./pages/GenderOption";
import { red, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AgeOption from "./pages/AgeOption";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import MyErrorSnackbar from "./components/MySnackbars";
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
  const [isAllowed, setIsAllowed] = useState(true);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          
          <Route path="/" element={<Layout />}>
            
            <Route path="1" element={<GenderOption />} />
            <Route
              path="2"
              element={isAllowed ? <AgeOption /> : <Navigate to="/1" />}
            />
          </Route>
        </Routes>
        <MyErrorSnackbar option="error"/>
      </ThemeProvider>
    </>
  );
}

export default App;
