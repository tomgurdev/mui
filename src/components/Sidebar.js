import {Box, List, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AutoStories, Brightness2, Group, Home, Person4, Settings, Storefront} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
      <List
        sx={{ width: '100%', maxWidth: 360,  }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton component={"a"} href={"#homepage"}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
        <ListItemButton component={"a"} href={"#pages"}>
          <ListItemIcon>
            <AutoStories />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton component={"a"} href={"#groups"}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton component={"a"} href={"#marketplace"}>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
        <ListItemButton component={"a"} href={"#friends"}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton component={"a"} href={"#settings"}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton component={"a"} href={"#profile"}>
          <ListItemIcon>
            <Person4 />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton component={"a"} href={"#profile"}>
          <ListItemIcon>
            <Brightness2 />
          </ListItemIcon>
          <Switch defaultChecked={false} />
        </ListItemButton>
      </List>
    </Box>
  )}

export default Sidebar  ;