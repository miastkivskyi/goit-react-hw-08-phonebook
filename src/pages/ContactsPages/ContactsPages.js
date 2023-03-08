import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selector';
import Search from 'components/Filter/Filter';
import Phonebook from 'components/ContactForm/ContactForm';
import Section from 'components/Section/Section';
import Contacts from 'components/ContactList/Contacts';
import { Box } from '@mui/material';
import { LinearIndeterminate } from 'components/Loader/Loader';
import { Helmet } from 'react-helmet';

const ContactsPages = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Section title="Phonebook">
          <Phonebook />
        </Section>
        <Section title="Contacts">
          <Search />
          {isLoading && !error && <LinearIndeterminate />}
          <Contacts />
        </Section>
      </Box>
    </>
  );
};

export default ContactsPages;
