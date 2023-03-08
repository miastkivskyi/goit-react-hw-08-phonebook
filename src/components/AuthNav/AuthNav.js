import { List, ListItem } from '@mui/material';
import { ColorLinkButton } from 'components/styled/styledMui';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <List sx={{ display: 'flex' }}>
      <ListItem color="secondary">
        <ColorLinkButton component={NavLink} to="/register" color="black">
          Sing Up
        </ColorLinkButton>
      </ListItem>
      <ListItem>
        <ColorLinkButton component={NavLink} to="/login" color="black">
          Log In
        </ColorLinkButton>
      </ListItem>
    </List>
  );
};
export default AuthNav;
