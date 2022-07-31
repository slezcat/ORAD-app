import Container from "@mui/material/Container";
import MyCard from "./MyCard";
import MyStepper from "./MyStepper";
import { Outlet } from "react-router-dom";
import MyErrorSnackbar from "./MySnackbars";
export default function Layout({children}) {
  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <MyStepper />
        <MyCard>
          <Outlet />
        </MyCard>
      </Container>
    </>
  );
}
