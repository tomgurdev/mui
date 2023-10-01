import React from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {Pets} from "@mui/icons-material";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import theme from "../theme";


const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center", /* Add this line to vertically center items */
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}));
const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  xs: "block",
  sm: "none",
  alignItems: "center", /* Add this line to vertically center items */
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}));

const StyledToolbar = styled(Toolbar)(({theme}) => ({
  // display: "flex",
  justifyContent: "space-between",
  p: 2,
}));

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <AppBar>
        <StyledToolbar>
          <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>פרצוף תחת</Typography>
          <Pets sx={{display: {xs: "block", sm: "none"}}}/>
          <Search sx={{display: {xs: "none", sm: "block"}}}>
            <InputBase placeholder={"Search"} id={"search"}></InputBase>
          </Search>
          <Icons>
            <Badge badgeContent={2} color={"error"}>
              <MarkunreadIcon sx={{
                "&:hover": {
                  color: theme.palette.primary.light,
                  "&:active": {color: theme.palette.secondary.light}
                }
              }}/>
            </Badge>
            <SettingsApplicationsIcon sx={{
              "&:hover": {
                color: theme.palette.primary.light, "&:active": {color: theme.palette.secondary.light}
              }
            }}/>
            <Avatar onClick={e => setMenuOpen(true)}
                    src={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png"}
                    sx={{height: 30, width: 30, display: "flex"}}/>
          </Icons>
          <UserBox onClick={e => setMenuOpen(true)}>
            <Typography variant="span">Tom</Typography>
            <Avatar
              src={"https://www.gagebeasleyshop.com/cdn/shop/articles/iStock-847144522_1200x1200.jpg?v=1656922321"}
              sx={{height: 30, width: 30, display: "flex"}}/>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={menuOpen}
          onClose={e => setMenuOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
    ;
}

export default Navbar;
