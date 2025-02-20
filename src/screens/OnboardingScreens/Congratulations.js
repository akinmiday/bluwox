import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Congratulations({ navigation }) {
  return (
    <ImageBackground
      source={require('../../../assets/onboarding3.png')} // Replace with your actual image
      style={styles.container}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(255,255,255,0.8)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.subtitle}>
         Welcome to Bluwox! Your email has been successfully verified
        </Text>


        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    color: '#0B48E0',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:"center"
  },
  subtitle: {
    fontSize: 16,
    color: '#0B48E0',
    marginBottom: 30,
    textAlign:"center"
  },
  button: {
    backgroundColor: '#0B48E0',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
