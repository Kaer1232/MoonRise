import React, { SetStateAction, useEffect, useState } from "react";
import { Box } from '@mui/system';
import { Avatar, ImageListItem, ImageList, Link } from "@mui/material";
import { useAuth } from "../../providers/useAuth";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { IPost } from "../../../type";
import { inithialPost } from "./inithialPost";


export const Posts: React.FC = () => {
  const { db } = useAuth();
  const [postss, setPost] = useState<IPost[]>(inithialPost);
  const [posts, setPosts] = useState<IPost[]>([]);




 useEffect(() => {
    const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const newPosts: IPost[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          author: data.author,
          content: data.content,
          createdAdd: data.createdAt,
        };
      });
      setPosts(newPosts);
    });

    return () => unsub();
  }, [db]);
      

  return (
    <>
      {posts.map((post, idx) => (
        <Box
          sx={{
            border: '1px solid gray',
            borderRadius: '30px',
            backgroundColor: 'white',
            padding: 3,
            width: 1000,
            marginTop: 2,
            marginLeft: 20,
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
            <span style={{color:'white'}}>пасхалОЧКА</span>
            <br />
            {post.content}

            {post?.image?.length && (
                <ImageList variant='masonry' cols={1} gap={1}>
                {post.image.map(image =>(
                    <ImageListItem  style={{ marginTop: '20px' }} key={image}>
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
      {postss.map((post, idx) => (
        <Box
          sx={{
            border: '1px solid gray',
            borderRadius: '30px',
            backgroundColor: 'white',
            padding: 3,
            width: 1000,
            marginTop: 2,
            marginLeft: 20,
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
            <span style={{color:'white'}}>пасхалОЧКА</span>
            <br />
            {post.content}

            {post?.image?.length && (
                <ImageList variant='masonry' cols={1} gap={1}>
                {post.image.map(image =>(
                    <ImageListItem  style={{ marginTop: '20px' }} key={image}>
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
  )
}