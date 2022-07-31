import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MyStepper from "./MyStepper";
import Layout from "./Layout";

export default function MyCard({ children, title }) {
  return (
    <Card
      sx={{
        p: 4,
      }}
    >
      <CardContent>
        <Typography variant="h3" align="center">
          {title}
        </Typography>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
}
