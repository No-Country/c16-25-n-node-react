import { createContext, useContext } from 'react';

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is no Auth provider');
  return context;
};

export const AuthProvider = authContext.Provider;