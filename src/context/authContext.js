// src/context/authContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    firstname: '',
    lastname: '',
  });

  // On component mount, try to load auth from AsyncStorage
  useEffect(() => {
    const loadAuth = async () => {
      try {
        const storedAuth = await AsyncStorage.getItem('auth');
        if (storedAuth) {
          setAuth(JSON.parse(storedAuth));
        }
      } catch (error) {
        console.error('Error loading auth data:', error);
      }
    };
    loadAuth();
  }, []);

  // Login function saves auth data in state and AsyncStorage
  const login = async (token, firstname, lastname) => {
    try {
      const authData = { token, firstname, lastname };
      setAuth(authData);
      await AsyncStorage.setItem('auth', JSON.stringify(authData));
    } catch (error) {
      console.error('Error saving auth data:', error);
    }
  };

  // Logout function clears auth data
  const logout = async () => {
    try {
      setAuth({ token: null, firstname: '', lastname: '' });
      await AsyncStorage.removeItem('auth');
    } catch (error) {
      console.error('Error removing auth data:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
