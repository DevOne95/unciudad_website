import { useState, useEffect } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CalendarComponent = () => {
  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function initilizeComponent() {
    const currentDate = new Date();

    const currentMonth = currentDate.toLocaleString("default", {
      day: "numeric",
      month: "short",
    });

    const splitCurrentMonth = currentMonth.split(" ");

    setDay(daysOfWeek[currentDate.getDay()]);
    setMonth(`${splitCurrentMonth[1]} ${splitCurrentMonth[0]}`);
    setYear(currentDate.getFullYear());
  }

  useEffect(() => {
    initilizeComponent();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 3,
        pb: 0,
        gap: 5,
        borderColor: "gray.300",
      }}
    >
      <Divider />
      <Box color="gray">
        <Typography fontSize={14}>{day}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color={"gray"} variant="h4">
            {month}
          </Typography>
          <IconButton
            rounded={25}
            color={"gray"}
            bg="transparent"
            onClick={() => navigate("/calendar")}
          >
            <IoArrowForwardOutline size={24} />
          </IconButton>
        </Box>
        <Typography color="gray" fontSize={14}>
          {year}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default CalendarComponent;
