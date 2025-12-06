import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "auto",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
}
