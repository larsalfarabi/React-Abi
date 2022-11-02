import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} className="-z-10">
      <Box
        sx={{
          height: { sx: "auto", md: "94vh" },
          borderRight: "1px solid #3d3d3d",
          pl: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 Youtube Clone
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
