import React from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const UserItem: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to='/profile' style={{display:'flex', alignItems: 'center', textDecoration: 'none'}}>
          <Box
            sx={{
              position: 'relative',
              marginRight: 5,
              borderRadius: '50%',
              overflow: 'hidden',
              width: 50,
              height: 50
            }}
          >
            <img
              src='my-app/public/index.html'
              alt=''
              width={50}
              height={50}
            />
            <Box
              sx={{
                backgroundColor: 'green',
                width: 4,
                height: 4,
                position: 'absolute',
                bottom: 2,
                left: 2,
              }}
            ></Box>
          </Box>

          <span>Алексей Валерев</span>
        </Link>
      </Box>
    </div>
  );
};

export default UserItem;