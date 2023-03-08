import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/operations';
import RestricteRoute from './RestricteRoute';
import { useAuth } from 'hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import { Layout } from './Layout';

const HomePages = lazy(() => import('../pages/HomePages'));
const RegisterPages = lazy(() => import('../pages/RegisterPages'));
const LoginPages = lazy(() => import('../pages/LoginPages'));
const ContactsPages = lazy(() => import('../pages/ContactsPages'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route
            path="/register"
            element={
              <RestricteRoute
                component={RegisterPages}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestricteRoute component={LoginPages} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPages} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    )
  );
};

export default App;
