import { styled } from "@mui/material";
import Header from "./Header";
import Page from "./Page";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Posts",
    href: "/posts",
  },
];

const Layout = ({ children }) => (
  <>
    <Header pages={pages} />
    <Page>{children}</Page>
    <Offset />
  </>
);

export default Layout;
