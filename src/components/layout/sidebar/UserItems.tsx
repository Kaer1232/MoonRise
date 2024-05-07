import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { Avatar, Button, Card } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../providers/useAuth';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage'

const UserItem: React.FC = () => {
  const { ga, user } = useAuth();
  const [currentUser, setCurrentUser] = useState({
    id: user?.id || '',
    avatar: user?.avatar || '',
    name: user?.name || '',
  });
  const [isRegForm, setIsRegForm] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignOut = () => {
    signOut(ga).then(() => {
      window.location.reload();
    });
    setCurrentUser({ id: '', avatar: '', name: '' });
  };
  /*const storage = firebase.storage();
  const storageRef = storage.ref();*/


  return (
    <>
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
            <Link
              to={`/profile`}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#111',
              }}
            >
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
                  src={currentUser.avatar}
                  alt='пользовательский аватар'
                  sx={{
                    width: 48,
                    height: 48,
                  }}
                />
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

              <span style={{ fontSize: 14 }}>{currentUser.name}</span>
            </Link>

            <Link to='/auth'>
              <Button
                type='reset'
                variant='text'
                onClick={handleSignOut}
              >
                Выйти
              </Button>
            </Link>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default UserItem;