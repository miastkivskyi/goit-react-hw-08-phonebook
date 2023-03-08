import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { List, ListItem } from '@mui/material';
import { ColorLinkButton } from 'components/styled/styledMui';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <List sx={{ display: 'flex' }}>
        <ListItem color="secondary">
          <ColorLinkButton component={NavLink} to="/" color="inherit">
            Home
          </ColorLinkButton>
        </ListItem>

        {isLoggedIn && (
          <ListItem>
            <ColorLinkButton component={NavLink} to="/contacts" color="inherit">
              Contacts
            </ColorLinkButton>
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default Navigation;
