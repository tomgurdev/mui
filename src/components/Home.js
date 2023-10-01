import {Stack} from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Add from "./Add";

const Home = () => {
    return (
        <>
          <Stack direction={"row"} justifyContent={"stretch"}>
            <Navbar />
          </Stack>
          <Stack direction={"row"} justifyContent={"center"}>
            <Sidebar />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </>
    )
}

export default Home