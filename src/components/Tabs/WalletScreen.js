// src/screens/WalletScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Screen</Text>
      <Text style={styles.text}>Manage your funds and transactions here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#0B48E0',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
