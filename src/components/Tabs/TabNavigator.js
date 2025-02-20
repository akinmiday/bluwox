import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import WalletScreen from './WalletScreen';
import TaskScreen from './TaskScreen';
import SupportScreen from './SupportScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Wallet') {
            iconName = 'wallet-outline';
          } else if (route.name === 'Task') {
            iconName = 'list-outline';
          } else if (route.name === 'Support') {
            iconName = 'chatbubble-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0B48E0',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { backgroundColor: '#FFF' },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
