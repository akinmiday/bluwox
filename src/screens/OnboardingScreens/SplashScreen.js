// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Simulate a short loading period, then navigate to Onboarding1
    const timer = setTimeout(() => {
      navigation.replace('Onboarding1');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace with your actual logo or splash image */}
      <Image
        source={require('../../../assets/bluwox_logo.png')}
        style={styles.logo}
      />
      {/* <Text style={styles.title}>Bluwox</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B48E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});
