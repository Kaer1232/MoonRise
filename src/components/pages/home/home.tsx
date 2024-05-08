import React, { FC, useState } from "react";
import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/system';
import AddPost from "./AddPost";
import { IPost } from "../../../type";
import { Posts } from "./Posts";
import { inithialPost } from "./inithialPost";
import { useAuth } from "../../providers/useAuth";
import Auth from "../auth/auth";

const Home: FC = () => {
  const {db,user} = useAuth()
  return (
  
    <Box alignItems={'center'}>
      {user ? (
        <>
        <AddPost/>
      <Posts/>
        </>
      ):
    (<Auth/>)}
    </Box>
    
  );
};

export default Home;