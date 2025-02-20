// src/screens/SuccessScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Icon/GIF in the center */}
      <Image
        source={require('../../../assets/success.gif')} // Replace with your file path
        style={styles.icon}
      />

      {/* Title */}
      <Text style={styles.title}>Congratulations!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Welcome to Bluwox! Your email address has been successfully verified.
      </Text>

      {/* Go Home Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Congratulations')}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

// -------------------- STYLES --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // black background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain', // or 'cover'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B48E0',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#0B48E0',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0B48E0',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
