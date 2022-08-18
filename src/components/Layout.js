import { AppBar, Box, Container, styled, Toolbar } from "@mui/material";
import Header from "./Header";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Layout = ({ children }) => (
  <Box>
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Header />
        </Toolbar>
      </Container>
    </AppBar>
    <Container>
      <Box my={2}>{children}</Box>
    </Container>
    <Offset />
  </Box>
);

export default Layout;
