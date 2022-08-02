import { useSelector } from "react-redux/es/exports";
import { red, blue } from "@mui/material/colors";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/Layout";
import AgeOption from "./pages/AgeOption";
import MySnackbars from "./components/MySnackbars";
import CssBaseline from "@mui/material/CssBaseline";
import GenderOption from "./pages/GenderOption";
import SymtomOption from "./pages/SymtomOption";

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

const pages = [
  {
    path: "1",
    element: <GenderOption />,
  },
  {
    path: "2",
    element: <AgeOption />,
  },
  {
    path: "3",
    element: <SymtomOption />,
  },
  
];

function App() {
  const {activeStep} = useSelector((state) => state.identifier);
  const {option, message} = useSelector(state => state.snackbar);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {pages.map((p, i) => {
              return (
                <Route
                  path={p.path}
                  element={i === activeStep ? p.element : <Navigate to="/1" />}
                  key={i}
                />
              );
            })}
          </Route>
        </Routes>
        <MySnackbars option={option} message={message} />
      </ThemeProvider>
    </>
  );
}

export default App;
