import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, FormControl, IconButton, InputAdornment } from '@mui/material';
import {
  ColorButton,
  StyledInput,
  StyledInputLable,
} from 'components/styled/styledMui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.reventDefault();
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
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
      >
        <StyledInputLable htmlFor="standard-adornment-name">
          Name
        </StyledInputLable>
        <StyledInput
          id="standard-adornment-name"
          variant="standard"
          type="text"
          value={name}
          name="name"
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
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
        autoComplete="off"
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
      <ColorButton type="submit">Register</ColorButton>
    </Box>
  );
};

export default RegisterForm;
