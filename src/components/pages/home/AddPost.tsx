import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { TypeSetState } from '../../../type';
import { IPost } from '../../../type';
import { useState } from 'react';
import { users } from '../../layout/sidebar/dataUser';
import { KeyboardEvent } from 'react';
import { useAuth } from '../../providers/useAuth';
import { addDoc, collection } from 'firebase/firestore';


const AddPost: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const {user, db} = useAuth();

   /* calculateTimeAgo = (createdAt: string): string => {
    const createdTime = new Date(createdAt);
    const now = new Date();
    const diff = now.getTime() - createdTime.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} дней назад`;
    } else if (hours > 0) {
      return `${hours} часов назад`;
    } else if (minutes > 0) {
      return `${minutes} минут назад`;
    } else {
      return `${seconds} секунд назад`;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);*/
  
  const formatDateTime = (dateTime: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
  
    return new Intl.DateTimeFormat('ru-RU', options).format(dateTime);
  };
  const addPostHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && user) {
      try {
        const newPost = {
          author: user,
          content,
          createdAt: formatDateTime(currentDateTime),
        };

        await addDoc(collection(db, 'posts'), newPost);
      } catch (error) {
        console.error('Error adding document:', error);
      }

      setContent('');
    }
  };
  return (
    <TextField
      label='Расскажи что у тебя нового'
      variant='outlined'
      InputProps={{
        sx: {
          border: 'none',
          borderRadius: '25px',
          backgroundColor: 'white',
          width: '1300px',
        },
      }}
      sx={{
        width: '100%',
      }}
      margin={'normal'}
      onKeyPress={addPostHandler}
      onChange={(e) => setContent(e.target.value)}
      value={content}
    />
  );
};

export default AddPost;

function setPosts(arg0: (prevPosts: any) => any[]) {
  throw new Error('Function not implemented.');
}
