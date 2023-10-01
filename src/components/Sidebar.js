import {Box} from "@mui/material";
import theme from "../theme";

const Sidebar = () => {
  return (
    <Box bgcolor={theme.palette.secondary.main} flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }}}>Sidebar</Box>
  )}

export default Sidebar  ;