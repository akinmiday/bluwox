import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import SplashScreen from './SplashScreen';
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';
import SignInScreen from './SignInScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import CreateAccountScreen from './CreateAccountScreen';
import VerifyAccountScreen from './VerifyAccountScreen';
import SuccessScreen from './SuccessScreen';
import CongratulationsScreen from "./Congratulations"
import TabNavigator from '../../components/Tabs/TabNavigator';
import NotificationsScreen from '../../components/NotificationsScreen';

const Stack = createStackNavigator();

export default function OnboardScreens() {
  return (
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Congratulations" component={CongratulationsScreen} />
        <Stack.Screen name="Dashboard" component={TabNavigator} />
        <Stack.Screen name="notifications" component={NotificationsScreen} />
      </Stack.Navigator>
  );
}
