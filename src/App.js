import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./component";
import { Home2 } from "./component/page/Home";

export default function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />}>
          <Route path="beranda" exact element={<Home2 />} />
        </Route>
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/Channel/:id" exact element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}
