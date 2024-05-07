import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { Box } from '@mui/system';
import { Avatar, ImageListItem, ImageList, Link, Button, TextField } from "@mui/material";
import { useAuth } from "../../providers/useAuth";
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { IPost } from "../../../type";
import { inithialPost } from "./inithialPost";
import * as Icons from "@mui/icons-material"

export const Posts: React.FC = () => {
  const { db, user } = useAuth();
  const [postss, setPost] = useState<IPost[]>(inithialPost);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [editingPostId, setEditingPostId] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  let isRedacted: boolean = false;


 useEffect(() => {
    const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const newPosts: IPost[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          author: data.author,
          content: data.content,
          createdAdd: data.createdAt, 
          likes: data.likes || 0
        };
      });
      setPosts(newPosts);
    });

    return () => unsub();
  }, [db, ]);
  const handleLike = async (postId: string) => {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, {
    });
  };
  //Кнопка лайка
  /*<Button variant="outlined" onClick={() => handleLike(post.id)}>Like</Button>
  */
// Удаление
  const handleDelete = async (postId: string) => {
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);
    setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
  };
  // Обновление
  const handleEdit = async (postId: string, newContent: string) => {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, { content: newContent });
    setEditingPostId('');
    setNewContent('');
};

  return (
    <>
      {posts.map((post, idx) => (
        <Box
          sx={{
            border: '1px solid gray',
            borderRadius: '30px',
            backgroundColor: 'white',
            padding: 3,
            width: '172%',
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
            <Button sx={{
                borderRadius: '40%',
                marginLeft: '70px',
                marginBottom: '100px',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingLeft: '10px',
              }}
              variant="text"
              >
            </Button>
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
            { post.author.id === user?.id && (
            <><Button onClick={() => handleDelete(post.id)}>Удалить</Button><div key={`Post-${idx}`}>
                {editingPostId === post.id ? (
                  <div>
                    <TextField value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                    <Button onClick={() => handleEdit(post.id, newContent)}>Сохранить изменения</Button>
                  </div>
                ) : (
                  <div>
                    <Button onClick={() => setEditingPostId(post.id)}>Редактировать</Button>
                  </div>
                )}
              </div></>
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