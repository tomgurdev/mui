import {Box, List, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AutoStories, Brightness2, Group, Home, Person4, Settings, Storefront} from "@mui/icons-material";
import theme from "../theme";

const Sidebar = () => {
  return (
      <Box flex={1} p={2} mt={5} sx={{
      display: {xs: "none",
                sm: "block"},
      mr:2}}>
      <Box position="fixed">
        <List
          sx={{width: '100%', maxWidth: 360,}}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton component={"a"} href={"#home"}>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#pages"}>
            <ListItemIcon>
              <AutoStories/>
            </ListItemIcon>
            <ListItemText primary="Pages"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#groups"}>
            <ListItemIcon>
              <Group/>
            </ListItemIcon>
            <ListItemText primary="Groups"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#marketplace"}>
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="Market"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#friends"}>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Friends"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#settings"}>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#profile"}>
            <ListItemIcon>
              <Person4/>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItemButton>
          <ListItemButton component={"a"} href={"#profile"}>
            <ListItemIcon>
              <Brightness2/>
            </ListItemIcon>
            <Switch defaultChecked={false} sx={{color: theme.palette.primary.main}}/>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar;