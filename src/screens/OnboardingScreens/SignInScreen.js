import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignInScreen({ navigation }) {
  // Toggle between recognized user (Jake) and normal sign-in
  const [recognizedUser, setRecognizedUser] = useState(false);

  // Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO: Add your sign-in logic
    navigation.navigate('Dashboard');
  };

  const toggleSignInMode = () => {
    setRecognizedUser(!recognizedUser);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {/* Header: Back Arrow + Dynamic Title */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#0B48E0" />
        </TouchableOpacity>

      <View style={{marginLeft:20, gap:10}}>
      {recognizedUser ? (
          <Text style={styles.title}>Hi Jake, welcome back</Text>
        ) : (
          <Text style={styles.title}>Sign in</Text>
        )}
         {recognizedUser ? (
        <Text style={styles.subtitle}>It's so good to see you again!</Text>
      ) : (
        <Text style={styles.subtitle}>It’s so good to see you again!</Text>
      )}
      </View>
      </View>

     

      {/* Show email input only if unrecognized user */}
      {!recognizedUser && (
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      )}

      {/* Password Field (always visible) */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {/* Optional Eye Icon */}
        <Ionicons name="eye-off" size={20} color="#999" style={styles.eyeIcon} />
      </View>

      {/* Forgot Password */}
      <View style={styles.linkRow}>
        <Text style={styles.linkGray}>Forgot Password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.linkBlue}> Reset Password</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      {/* Fingerprint Icon (optional) */}
      <View style={styles.fingerprintContainer}>
        <Ionicons name="finger-print" size={60} color="#0B48E0" />
      </View>

      {/* Bottom Links: Toggle recognizedUser vs. normal sign-in */}
      {recognizedUser ? (
        // If recognized, show "Sign in to a different account?"
        <View style={styles.linkRow}>
          <Text style={styles.linkGray}>Sign in to a different account?</Text>
          <TouchableOpacity onPress={toggleSignInMode}>
            <Text style={styles.linkBlue}> Sign in</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // If unrecognized, show "Don't have an account yet? Create Account"
        <View style={styles.linkRow}>
          <Text style={styles.linkGray}>Don’t have an account yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.linkBlue}> Create Account</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    color: '#0B48E0',
    fontWeight: 'bold',
    
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  passwordContainer: {
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    backgroundColor: '#FFF',
    color: '#000',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 24, // Adjust for vertical alignment
  },
  linkRow: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent:"center"
  },
  linkGray: {
    color: '#666',
  },
  linkBlue: {
    color: '#0B48E0',
  },
  button: {
    backgroundColor: '#0B48E0',
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fingerprintContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
});
