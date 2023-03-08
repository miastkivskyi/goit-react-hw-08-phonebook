import {
  Button,
  Input,
  InputLabel,
  ListItemButton,
  styled,
} from '@mui/material';

export const ColorLinkButton = styled(ListItemButton)(() => ({
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: `8px`,
  '&:hover': {
    backgroundColor: '#39814f',
    color: `#fff`,
    border: `1px solid #39814f`,
  },
  '&.active': {
    backgroundColor: '#39814f',
    color: `#fff`,
    border: `1px solid #39814f`,
    borderRadius: `8px`,
  },
}));

export const ColorButtonMenu = styled(ListItemButton)(() => ({
  color: 'white',
  padding: '8px',
  border: '1px solid #39814f',
  borderRadius: `8px`,
  marginLeft: '50px',
  '&:hover': {
    backgroundColor: '#39814f',
    color: `black`,
    border: `1px solid #39814f`,
  },
}));
export const ColorButton = styled(Button)(() => ({
  color: 'black',
  padding: '5px',
  border: '1px solid #39814f',
  borderRadius: `8px`,
  '&:hover': {
    backgroundColor: '#39814f',
    color: `#fff`,
    border: `1px solid #39814f`,
  },
}));

export const StyledInput = styled(Input)({
  marginBottom: '32px',
  '&.MuiInput-underline:after': {
    borderBottomColor: '#39814f',
  },

  '&.MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#39814f',
    },
  },
});

export const StyledInputLable = styled(InputLabel)({
  '&.Mui-focused': {
    color: '#39814f',
  },
});

export const IconButton = styled(Button)(() => ({
  color: '#39814f',
  padding: '5px',
  border: '1px solid #39814f',
  borderRadius: `8px`,
  '&:hover': {
    backgroundColor: `#39814f`,
    color: `#fff`,
    border: `1px solid #39814f`,
  },
}));
