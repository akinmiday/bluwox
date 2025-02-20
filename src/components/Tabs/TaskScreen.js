// src/screens/TaskScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Screen</Text>
      <Text style={styles.text}>View and manage your tasks here.</Text>
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
