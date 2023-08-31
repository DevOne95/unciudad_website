import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import useUserHooks from "../../Hooks/UserHooks";
import useThemeHooks from "../../Hooks/ThemeHooks";
import Header from "./Header/Header";
import CalendarComponent from "./CalendarComponent/CalendarComponent";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useUserHooks();
  const { getRoutes } = useThemeHooks();

  return (
    <Box sx={{ width: "16rem", h: "100%", backgroundColor: "white" }}>
      <Header />
      <CalendarComponent />
      <List sx={{ marginTop: 1 }}>
        {getRoutes(user.role).map((value) => (
          <ListItem
            key={value.id}
            sx={{
              cursor: "pointer",
              paddingLeft: 3,
              "&:hover #list-item-child": {
                color: "orange",
                transform: "scale(1.1, 1.1)",
              },
            }}
            onClick={() => navigate(value.path)}
          >
            <ListItemIcon id="list-item-child">{value.icon}</ListItemIcon>
            <ListItemText id="list-item-child">{value.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
