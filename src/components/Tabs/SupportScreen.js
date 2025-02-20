import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  // For copying text in Expo: import * as Clipboard from 'expo-clipboard';
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SupportScreen({ navigation }) {
  const phoneNumber = '0000 000 0000';
  const emailAddress = 'help@domain.com';

  // Example: copy phone number to clipboard
  const copyPhone = () => {
    // Clipboard.setStringAsync(phoneNumber);
    console.log('Copied phone:', phoneNumber);
  };

  // Example: open mail client
  const sendMail = () => {
    const mailtoUrl = `mailto:${emailAddress}`;
    Linking.openURL(mailtoUrl).catch(err =>
      console.error('Failed to open mail client', err)
    );
  };

  // Example: open a link in the browser
  const openLink = (url) => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open link', err)
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Row: Back arrow + Title */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#0B48E0" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact us</Text>
      </View>
    
      {/* Phone Row */}
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Phone number</Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputText}>{phoneNumber}</Text>
          <TouchableOpacity style={styles.actionButton} onPress={copyPhone}>
            <Text style={styles.actionButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Email Row */}
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputText}>{emailAddress}</Text>
          <TouchableOpacity style={styles.actionButton} onPress={sendMail}>
            <Text style={styles.actionButtonText}>Mail</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Social/Website Buttons */}
      <TouchableOpacity
        style={styles.linkRow}
        onPress={() => openLink('https://wa.me/00000000000')} // Replace with real WhatsApp link
      >
        <Ionicons
          name="logo-whatsapp"
          size={24}
          color="#0B48E0"
          style={styles.icon}
        />
        <Text style={styles.linkText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkRow}
        onPress={() => openLink('https://instagram.com')}
      >
        <Ionicons
          name="logo-instagram"
          size={24}
          color="#0B48E0"
          style={styles.icon}
        />
        <Text style={styles.linkText}>Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkRow}
        onPress={() => openLink('https://facebook.com')}
      >
        <Ionicons
          name="logo-facebook"
          size={24}
          color="#0B48E0"
          style={styles.icon}
        />
        <Text style={styles.linkText}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkRow}
        onPress={() => openLink('https://www.bluwox.com')}
      >
        <Ionicons
          name="globe-outline"
          size={24}
          color="#0B48E0"
          style={styles.icon}
        />
        <Text style={styles.linkText}>www.bluwox.com</Text>
      </TouchableOpacity>
    </View>
  );
}

// --------------------- STYLES ---------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  headerTitle: {
    fontSize: 24,
    color: '#0B48E0',
    fontWeight: 'bold',
    marginLeft: 20, // space between back arrow and title
  },
  rowContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 6,
    padding: 10,
    justifyContent: 'space-between',
  },
  inputText: {
    color: '#333',
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: '#0B48E0',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 6,
    padding: 16,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  linkText: {
    fontSize: 14,
    color: '#333',
  },
});
