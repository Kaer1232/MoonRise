import React, { FC, useState } from "react";
import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/system';
import AddPost from "./AddPost";
import { IPost } from "../../../type";
import { Posts } from "./Posts";
import { inithialPost } from "./inithialPost";

const Home: FC = () => {
  const [posts, setPost] = useState<IPost[]>(inithialPost)
  return (
    <Box alignItems={'center'}>
      <AddPost setPost={setPost}/>
      <Posts posts={posts}/>
    </Box>
    
  );
};

export default Home;