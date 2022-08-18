import { AppBar, Toolbar, Container, styled } from "@mui/material";
import Header from "./Header";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Layout = ({ children }) => (
  <>
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Header />
        </Toolbar>
      </Container>
    </AppBar>
    <Container>{children}</Container>
    <Offset />
  </>
);

export default Layout;
