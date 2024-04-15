import React from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { TypeSetState } from '../../../type';
import { IPost } from '../../../type';
import { useState } from 'react';
import { users } from '../../layout/sidebar/dataUser';
import { KeyboardEvent } from 'react';
interface IAddPost {
  setPost: TypeSetState<IPost[]>;

 }

const AddPost: React.FC<IAddPost> = ({ setPost }) => {
  const [content, setContent] = useState<string>('');

  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setPost((prev) => [
        {
          author: users[0],
          content,
          createdAdd: '5 минут назад',
        },
       ...prev,
      ])
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
          backgroundColor: 'f9f9f9',
          width: '1200px',
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