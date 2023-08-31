import { Box } from "@mui/material";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Box width="100%" overflow="hidden" height="100vh">
      <Box sx={{ display: "flex", width: "inherit", height: "inherit" }}>
        <Sidebar />
        <Box
          sx={{
            width: "inherit",
            height: "100%",
            backgroundColor: "#f2f3f4",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <Box sx={{ width: "100%" }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
