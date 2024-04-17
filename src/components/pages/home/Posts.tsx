import React from "react";
import { Box } from '@mui/system';
import { Avatar, ImageListItem, ImageList, Link } from "@mui/material";
import { IPosts } from "./Post";

interface IPost {
    posts: IPost[];
}

export const Posts: React.FC<IPosts> = ({ posts }) => {
  return (
    <>
      {posts.map((post, idx) => (
        <Box
          sx={{
            border: '1px solid black',
            borderRadius: '30px',
            padding: 3,
            width: 1000,
            marginTop: 2,
            marginLeft: 10,
          }}
          key={`Post-${idx}`}>
            <div style={{ display: "flex"}}>
            <Box
              sx={{
                position: 'relative',
                marginRight: 2,
                overflow: 'hidden',
                width: 50,
                height: 50,
              }}
            >
              <Avatar
                src={post.author.avatar}
                alt='esli ne vivel to on mraz'
                sx={{
                  width: 48,
                  height: 48,
                }} />
                
              <Box
                sx={{
                  backgroundColor: 'green',
                  border: '2px solid #f1f7fa',
                  width: 12,
                  height: 12,
                  position: 'absolute',
                  bottom: 2,
                  right: 4,
                  borderRadius: '50%',
                }}
                
              ></Box>
            </Box> 
            <div>
              <span style={{
              fontSize: '14',
            }}>{post.author.name}</span>
            <br />
            <span style={{
              fontSize: '14',
              opacity: '0.6',
            }}>{post.createdAdd}</span>
              </div>
            </div>
          <p>
            {post.content}

            {post?.image?.length && (
                <ImageList variant='masonry' cols={3} gap={3}>
                {post.image.map(image =>(
                    <ImageListItem key={image}>
                        <img
                        src={image}
                        alt={''}
                        loading="lazy"
                        />
                    </ImageListItem>
                ))}
                </ImageList>
            )}
          </p>
        </Box>
      ))}
    </>
  );
};