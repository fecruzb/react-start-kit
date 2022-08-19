import React from "react";
import { Box, styled } from "@mui/material";

import Header from "./Header";
import Page from "./Page";
import Store from "./Store";

import Auth from "@/auth";

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
