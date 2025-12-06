import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({}));

export default function NavAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="transparent" position="static" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
