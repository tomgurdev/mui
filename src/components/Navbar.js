import React from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography} from "@mui/material";
import { Pets } from "@mui/icons-material";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import theme from "../theme";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center", /* Add this line to vertically center items */
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display:  "flex",
  xs: "block",
  sm: "none",
  alignItems: "center", /* Add this line to vertically center items */
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // display: "flex",
  justifyContent: "space-between",
  p: 2,
}));

const Navbar = () => {
  return (
    <AppBar sx={{ position: "sticky" }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>TOM DEV</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <InputBase placeholder={"Search"}></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={2} color={"error"}>
            <MarkunreadIcon sx={{"&:hover": {color: theme.palette.primary.light,"&:active": {color: theme.palette.secondary.light}}}} />
          </Badge>
          <SettingsApplicationsIcon sx={{"&:hover": {
              color: theme.palette.primary.light,"&:active": {color: theme.palette.secondary.light}
            }}}/>
          <Avatar src={"https://www.gagebeasleyshop.com/cdn/shop/articles/iStock-847144522_1200x1200.jpg?v=1656922321"} sx={{ height: 30, width: 30, display: "flex" }} />
        </Icons>
        <UserBox>
          <Typography variant="span">Tom</Typography>
          <Avatar src={"https://www.gagebeasleyshop.com/cdn/shop/articles/iStock-847144522_1200x1200.jpg?v=1656922321"} sx={{ height: 30, width: 30, display: "flex" }} />
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
