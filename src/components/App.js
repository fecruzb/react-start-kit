const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
import { AppBar, Toolbar } from "@mui/material";

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>{children}</Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}
