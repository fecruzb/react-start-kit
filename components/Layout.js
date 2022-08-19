import { Box, styled } from "@mui/material";
import Header from "./Header";
import Page from "./Page";
import Auth from "../modules/auth";
import React from "react";
import Store from "./Store";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const pages = [
  {
    name: "Dashboard",
    href: "/",
  },

  {
    name: "Posts",
    href: "/posts",
  },
  {
    name: "Users",
    href: "/users",
  },
  {
    name: "Albums",
    href: "/albums",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Layout = ({ children }) => {
  const { store } = React.useContext(Store.Context);

  if (!store?.user) {
    return <Auth.Login />;
  }

  return (
    <Box bgcolor="grey.200" minHeight="100vh">
      <Header pages={pages} />
      <Page>{children}</Page>
      <Offset />
    </Box>
  );
};

export default Layout;
