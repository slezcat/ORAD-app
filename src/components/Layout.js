import { Outlet } from "react-router-dom";
import MyCard from "./MyCard";
import MyStepper from "./MyStepper";
import Container from "@mui/material/Container";

export default function Layout({ title }) {
  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <MyStepper />
        <MyCard title={title}>
          <Outlet />
        </MyCard>
      </Container>
    </>
  );
}
