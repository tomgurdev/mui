import {Box} from "@mui/material";
import theme from "../theme";

const Rightbar = () => {
  return (
    <Box bgcolor={theme.palette.secondary.light} flex={2} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
      Rightbar
    </Box>
  );
}
export default Rightbar;