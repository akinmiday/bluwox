import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loginUser } from '../../utilities/utils';
import { useAuth } from '../../context/authContext';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen({}) {
  const { login } = useAuth(); // from our auth context
  const navigation = useNavigation();

  // Toggle between recognized user (Jake) and normal sign-in
  const [recognizedUser, setRecognizedUser] = useState(false);

  // Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Toggle to show or hide password
  const [showPassword, setShowPassword] = useState(false);
  
  // Loading state for login process
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const lowerCaseEmail = email.toLowerCase();
      // Call the login utility which should return { token, firstname, lastname }
      const data = await loginUser({ email, password });
      // Save auth data to context (and AsyncStorage via context)
      login(data.token, data.firstname, data.lastname);
      // Navigate to the Dashboard
      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      });
    } catch (error) {
      Alert.alert('Login Failed', 'Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const toggleSignInMode = () => {
    setRecognizedUser(!recognizedUser);
    setEmail('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Header: Back Arrow + Dynamic Title */}
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="#0B48E0" />
            </TouchableOpacity>
            <View style={{ marginLeft: 20, gap: 10 }}>
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
              secureTextEntry={!showPassword} // Toggle secure text
              value={password}
              onChangeText={setPassword}
            />
            {/* Eye Icon toggles password visibility */}
            <TouchableOpacity
              style={styles.eyeIconContainer}
              onPress={togglePasswordVisibility}
            >
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <View style={styles.linkRow}>
            <Text style={styles.linkGray}>Forgot Password?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={styles.linkBlue}> Reset Password</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button or Activity Indicator */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Sign in</Text>
            )}
          </TouchableOpacity>

          {/* Fingerprint Icon (optional) */}
          <View style={styles.fingerprintContainer}>
            <Ionicons name="finger-print" size={60} color="#0B48E0" />
          </View>

          {/* Bottom Links: Toggle recognizedUser vs. normal sign-in */}
          {recognizedUser ? (
            <View style={styles.linkRow}>
              <Text style={styles.linkGray}>
                Sign in to a different account?
              </Text>
              <TouchableOpacity onPress={toggleSignInMode}>
                <Text style={styles.linkBlue}> Sign in</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.linkRow}>
              <Text style={styles.linkGray}>Don’t have an account yet?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={styles.linkBlue}> Create Account</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    backgroundColor: '#fff',
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
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
    top: 24,
  },
  linkRow: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
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
