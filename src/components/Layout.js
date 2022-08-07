import { Outlet } from "react-router-dom";
import MyCard from "./MyCard";
import MyStepper from "./MyStepper";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Layout({ title }) {
  return (
    <>
      <MyStepper />
      <Container
        maxWidth="sm"
        sx={{
          mt: "4vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MyCard title={title}>
          <Outlet />
        </MyCard>
      </Container>
    </>
  );
}
