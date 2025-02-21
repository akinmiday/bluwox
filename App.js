import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnboardScreens from "./src/screens/OnboardingScreens/OnboardScreens"
import { AuthProvider } from './src/context/authContext';

export default function App() {
  return (
    <NavigationContainer>
        <AuthProvider>
        <OnboardScreens />
        </AuthProvider>
    </NavigationContainer>
  );
}
