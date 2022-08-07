import { Outlet } from "react-router-dom";
import MyCard from "./MyCard";
import MyStepper from "./MyStepper";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Layout({ title }) {
  return (
    <>
    <Typography variant="subtitle1" sx={{ m: 1 }} color="primary">slezcat &copy; 2022</Typography>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <MyStepper />
        <MyCard title={title}>
          <Outlet />
        </MyCard>
      </Container>
      
    </>
  );  
}
