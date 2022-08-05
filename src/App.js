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
import Result from "./pages/Result";
import NameOption from "./pages/NameOption";

const theme = createTheme({
  palette: {
    mode: "dark",
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
    title: "Enter your name",
    path: "1",
    element: <NameOption />,
  },
  {
    title: "What is your Gender?",
    path: "2",
    element: <GenderOption />,
  },
  {
    title: "What is your Age?",
    path: "3",
    element: <AgeOption />,
  },
  {
    title: "What is your Symptom?",
    path: "4",
    element: <SymtomOption />,
  },

  {
    title: "Differential Diagnosis",
    path: "5",
    element: <Result />,
  },
];

function App() {
  const { activeStep } = useSelector((state) => state.identifier);
  const { option, message } = useSelector((state) => state.snackbar);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />
          {pages.map((p, i) => {
            return (
              <Route element={<Layout title={p.title} />} key={i}>
                <Route
                  path={p.path}
                  element={i === activeStep ? p.element : <Navigate to="/1" />}
                />
              </Route>
            );
          })}
        </Routes>
        <MySnackbars option={option} message={message} />
      </ThemeProvider>
    </>
  );
}

export default App;
