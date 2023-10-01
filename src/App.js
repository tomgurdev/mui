import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import {Stack} from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"stretch"}>
        <Navbar />
      </Stack>
      <Stack direction={"row"} justifyContent={"center"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </div>
);
}

export default App;
