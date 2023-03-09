import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, FormControl, IconButton, InputAdornment } from '@mui/material';
import {
  ColorButton,
  StyledInput,
  StyledInputLable,
} from 'components/styled/styledMui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        width: '48ch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mb: '32px',
        ml: 'auto',
        mr: 'auto',
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="on"
      >
        <StyledInputLable htmlFor="standard-adornment-email">
          Email
        </StyledInputLable>
        <StyledInput
          id="standard-adornment-email"
          variant="standard"
          type="email"
          value={email}
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="on"
      >
        <StyledInputLable htmlFor="standard-adornment-password">
          Password
        </StyledInputLable>
        <StyledInput
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={e => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <ColorButton type="submit">Log In</ColorButton>
    </Box>
  );
};

export default LoginForm;
