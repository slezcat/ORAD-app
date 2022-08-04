import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function MyCard({ children, title }) {
  return (
    <Card
      sx={{
        p: 4,
      }}
    >
      <CardContent>
        <Typography variant="h4" align="center">
          {title}
        </Typography>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
}
