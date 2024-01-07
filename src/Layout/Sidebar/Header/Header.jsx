import { Box, Typography } from "@mui/material";
import logo from "../../../Assets/Logo/logo_image.png";

const Header = () => {
  return (
    <Box
      mt={2}
      sx={{
        width: "inherit",
        // p: 2,
        // pl: 2,
        // pt: 1,
        // pb: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        // gap: 1,
      }}
    >
      <img src={logo} />
      <Box sx={{ display: "flex" }}>
        <Typography color="gray" variant="h6" fontWeight={800}>
          Un
        </Typography>
        <Typography color="orange" variant="h6" fontWeight={800}>
          Ciudad
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
