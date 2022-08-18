import { styled } from "@mui/material";
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
];

const Layout = ({ children }) => {
  const [user, setUser] = React.useState(null);

  if (!user) {
    return <Auth.Login setUser={setUser} />;
  }

  return (
    <>
      <Header pages={pages} setUser={setUser} />
      <Page>{children}</Page>
      <Offset />
    </>
  );
};

export default Layout;
