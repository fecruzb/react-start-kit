import { Box, styled } from "@mui/material";
import Header from "./Header";
import Page from "./Page";
import Auth from "../modules/auth";
import React from "react";

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
  {
    name: "Users",
    href: "/users",
  },
  {
    name: "Albums",
    href: "/albums",
  },
];

const Layout = ({ children }) => {
  const [user, setUser] = React.useState({
    id: 1,
    name: "Felipe",
    email: "dev@fcbueno.com",
  });

  if (!user) {
    return <Auth.Login setUser={setUser} />;
  }

  return (
    <Box bgcolor="grey.200" minHeight="100vh">
      <Header pages={pages} setUser={setUser} />
      <Page>{children}</Page>
      <Offset />
    </Box>
  );
};

export default Layout;
