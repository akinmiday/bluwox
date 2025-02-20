import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import OnboardScreens from "./src/screens/OnboardingScreens/OnboardScreens"

export default function App() {
  return (
    <NavigationContainer>
        <OnboardScreens />
    </NavigationContainer>
  );
}
