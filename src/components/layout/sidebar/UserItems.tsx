import React from 'react';
import { Box } from '@mui/system';
import { Link, useActionData, useResolvedPath } from 'react-router-dom';
import { Avatar, Card, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuItems from './Menu/MenuItems';
import { IUser } from '../../../type';


const UserItem: React.FC = () => {

 const user:IUser[] = [
    {
        id: 'w6efg46aw5',
        avatar: 'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
        name: 'Валерий Алексеев',
        inNetwork: false,
    }
]
  return (
    
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Card
          variant='outlined'
          sx={{
            padding: '2',
            backgroundColor: '#f1f7fa',
            border: 'none',
            borderRadius: '10px',
          }}
        >
          
          {user.map(user => (
          <Link
            key={user.id}
            to={'/profile/${user.id}'} style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#111',
          }}>
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
                src={user.avatar}
                alt='esli ne vivel to on mraz'
                sx={{
                  width: 48,
                  height: 48,
                }}
              />
              {user.inNetwork &&
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
}
            </Box>

            <span style={{
              fontSize: '14',
            }}>{user.name}</span>
          </Link>
          ))}
        </Card>
      </Box>
    </div>
  );
};

export default UserItem;
