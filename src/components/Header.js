import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Posts",
    href: "/posts",
  },
];

const Header = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={handleCloseNavMenu}>
              <Link href={page.href}>
                <Typography textAlign="center">{page.name}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Link href={page.href} key={page.name}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.name}
            </Button>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default Header;
