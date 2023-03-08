import { Box, FormControl } from '@mui/material';
import {
  ColorButton,
  StyledInput,
  StyledInputLable,
} from 'components/styled/styledMui';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selector';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const checkContactExist = (name, number) => {
    return (
      contacts &&
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };

    if (checkContactExist(name, number)) {
      toast.error(`The entered name or number already exists`);
      return;
    }
    dispatch(addContact(newContact));
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setNumber('');
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
    >
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
      >
        <StyledInputLable htmlFor="standard-phonebook-name">
          Name
        </StyledInputLable>
        <StyledInput
          id="standard-phonebook-name"
          variant="standard"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
      >
        <StyledInputLable htmlFor="standard-phonebook-number">
          Number
        </StyledInputLable>
        <StyledInput
          id="standard-phonebook-number"
          variant="standard"
          type="tel"
          name="phone"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormControl>
      <ColorButton sx={{ width: '18ch', ml: 'auto', mr: 'auto' }} type="submit">
        Add contact
      </ColorButton>
    </Box>
  );
};

export default ContactForm;
