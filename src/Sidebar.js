// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <List>
      <ListItem button>
        <ListItemText primary="전체" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="음악" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="게임" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="라이브" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="앱" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="액션 어드벤쳐 게임" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="만화 영화" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="최근에 업로드된 동영상" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="새로운 맞춤 동영상" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
//test