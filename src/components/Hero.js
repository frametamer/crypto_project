/* eslint-disable @next/next/no-img-element */
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heroTitle: {
    color: "#4A148C",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: "28px",
    textShadow: "2px 2px 4px rgba(156, 39, 176, 0.3)",
  },
  heroSubTitle: {
    color: "#6A1B9A",
    fontSize: "0.875rem",
    fontWeight: "bold",
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.heroTitle}
      >
        {"File Security Tool"}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        className={classes.heroSubTitle}
        style={{ marginTop: 10 }}
      >
        {"Project by Students"}
      </Typography>
    </Container>
  );
}
