import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import {Card, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { QuestionAnswer } from '@mui/icons-material';
import {menu} from './dataMenu'

const MenuItems: React.FC = () => {
    const history = useNavigate();
    return (
        <div>
            <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
            <Card
        variant='outlined'
        sx={{
          padding: '2',
          backgroundColor: '#eee6ff',
          border: 'none',
          borderRadius: '10px',
          marginTop: '12px',
        }}>
            <List>
            {menu.map(item => (
            <ListItem key={item.link}disablePadding>
              <ListItemButton
                onClick={() => history(item.link)}>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            ))}
          </List>
          </Card>
          </Box>
        </div>
    );
}

export default MenuItems;