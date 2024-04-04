import React, { FC } from "react";
import { Button } from "@mui/material";
import Headers from "../../layout/header/Header";
import Sidebar from "../../layout/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";

const Home: FC = () => {
  return (
    <div>
      <div>
        <Routes>
          Home
        <Button variant="contained">Hello world</Button>
        </Routes>
      </div>
    </div>
  );
};

export default Home;