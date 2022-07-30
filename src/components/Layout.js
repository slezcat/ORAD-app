
import Container from "@mui/material/Container";

export default function Layout({ children }) {
  return (
    <>
      <Container maxWidth="sm" sx={{mt:10}}>{children}</Container>
    </>
  );
}
