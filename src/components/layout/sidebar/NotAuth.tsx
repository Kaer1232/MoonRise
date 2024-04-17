import React from "react";
import { Button, Card } from "@mui/material";
import { Box } from '@mui/system';
import { Link } from "react-router-dom";

const NotAuth: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: '#f1f7fa',
          border: 'none',
          borderRadius: '10px',
        }}
      >
        <Link
          to={"/profile/${user.id}"}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#111',
          }}
        >
            <Button variant="text">Авторизация</Button>
        </Link>
      </Card>
    </Box>
  );
};

export default NotAuth;