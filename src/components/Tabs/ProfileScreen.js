import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from '../../context/authContext';
import { useNavigation } from '@react-navigation/native';


export default function ProfileScreen({  }) {
  const [darkMode, setDarkMode] = useState(false);
   const { auth, logout } = useAuth();
   const navigation = useNavigation()

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    // TODO: Implement real dark mode logic if needed
  };

  const handleLogout = async() => { 
    await logout()
    console.log('Logged out');
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
    
  };

  return (
    <View style={styles.container}>
      {/* Header Row: Avatar + Welcome Text */}
      <View style={styles.headerRow}>
        <Image
          source={require('../../../assets/avatar.png')} // Replace with your actual avatar image
          style={styles.avatar}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.userName}> {auth.firstname || 'Guest'} {auth.lastname || ''}</Text>
        </View>
      </View>

      {/* Profile Options */}
      <TouchableOpacity style={styles.optionRow}>
        <View style={styles.leftSection}>
          <Ionicons
            name="swap-horizontal"
            size={24}
            color="#0B48E0"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Switch to Client</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <View style={styles.leftSection}>
          <Ionicons
            name="person-outline"
            size={24}
            color="#0B48E0"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Profile information</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <View style={styles.leftSection}>
          <Ionicons
            name="construct-outline"
            size={24}
            color="#0B48E0"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Manage Services</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <View style={styles.leftSection}>
          <Ionicons
            name="lock-closed-outline"
            size={24}
            color="#0B48E0"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Login and security</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <View style={styles.leftSection}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="#0B48E0"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>About Bluwox</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>

      {/* Dark Mode Toggle */}
      <View style={styles.optionRow}>
        <View style={styles.leftSection}>
          <Ionicons
            name="moon-outline"
            size={24}
            color="#0B48E0"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Dark Mode</Text>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#0B48E0' }}
          thumbColor={darkMode ? '#fff' : '#f4f3f4'}
          onValueChange={handleToggleDarkMode}
          value={darkMode}
        />
      </View>

      {/* Log Out */}
      <TouchableOpacity style={styles.optionRow} onPress={handleLogout}>
        <View style={styles.leftSection}>
          <Ionicons
            name="log-out-outline"
            size={24}
            color="#FF3B30"
            style={styles.optionIcon}
          />
          <Text style={[styles.optionText, { color: '#FF3B30' }]}>Log out</Text>
        </View>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Bluwox is powered by <Text style={{color:"#0B48E0", fontWeight:"500"}}>ChamsAccess</Text>
      </Text>
    </View>
  );
}

// ------------------ STYLES ------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  // Header row: avatar on the left, text on the right
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 25,
    resizeMode: 'cover',
    marginTop:25
  },
  nameContainer: {
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
  },
  userName: {
    fontSize: 18,
    color: '#0B48E0',
    fontWeight: 'bold',
  },
  optionRow: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
