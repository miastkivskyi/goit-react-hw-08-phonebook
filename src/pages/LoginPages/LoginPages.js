import LoginForm from 'components/LoginForm/LoginForm';
import Section from 'components/Section/Section';
import { Helmet } from 'react-helmet';

const LoginPages = () => {
  return (
    <>
      <Helmet>
        <title>log in</title>
      </Helmet>
      <Section title="Log In">
        <LoginForm />
      </Section>
    </>
  );
};

export default LoginPages;
