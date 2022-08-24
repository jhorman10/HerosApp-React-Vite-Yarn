import { useReducer } from 'react';
import { authReducers } from '../reducers';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducers, {}, init);

  const handleLogin = (name = '') => {
    const user = { id: 'ABC', name };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
