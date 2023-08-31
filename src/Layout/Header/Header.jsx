import { Badge, Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const Header = () => {
  return (
    <Box
      sx={{
        width: "inherit",
        height: 60,
        display: "flex",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Typography variant="h5">Dashboard</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>
      </Box>
    </Box>
  );
};

export default Header;
