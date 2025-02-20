// src/screens/VerifyAccountScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerifyAccountScreen({ navigation }) {
  const [code, setCode] = useState(Array(6).fill('')); // 6-digit code

  // State to show/hide the support modal
  const [showSupportModal, setShowSupportModal] = useState(false);

  const handleVerify = () => {
    // Handle verification logic
    navigation.navigate('Success');
  };

  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      {/* Header Row: Back Icon + Title */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#0B48E0" />
        </TouchableOpacity>
        <View style={{ marginLeft: 20, gap: 10 }}>
          <Text style={styles.headerTitle}>Verify account</Text>
          <Text style={styles.subtitle}>
            We’ve sent a verification code to your email address name@mail.com
          </Text>
        </View>
      </View>

      {/* Label above the 6 code fields */}
      <Text style={styles.label}>Secure code</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            placeholder="0"
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
          />
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Resend code?</Text>
        <Text style={styles.timerText}>2:00</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify account</Text>
      </TouchableOpacity>

      {/* Floating chat/help icon */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setShowSupportModal(true)}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={28} color="#0B48E0" />
      </TouchableOpacity>

      {/* Support Modal */}
      <Modal
        visible={showSupportModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowSupportModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowSupportModal(false)}
            >
              <Ionicons name="close" size={24} color="#666" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Contact us</Text>

            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Email</Text>
              <TouchableOpacity style={styles.contactAction}>
                <Text style={styles.contactActionText}>help@domain.com</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Phone number</Text>
              <TouchableOpacity style={styles.contactAction}>
                <Text style={styles.contactActionText}>0000 000 0000</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-whatsapp"
                size={20}
                color="#0B48E0"
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// ------------------ STYLES ------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40, // space at top for safe area/header
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0B48E0',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    paddingRight: 30,
  },
  label: {
    fontSize: 14,
    color: '#0B48E0',
    marginBottom: 8,
    fontWeight: '400',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    width: 45,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 30,
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
  timerText: {
    fontSize: 16,
    color: '#0B48E0',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#0B48E0',
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Floating Action Button
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Android elevation
    elevation: 5,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: '40%', // partial screen
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    color: '#0B48E0',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactRow: {
    marginBottom: 15,
  },
  contactLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  contactAction: {
    backgroundColor: '#F8F9FA',
    borderRadius: 6,
    padding: 14,
  },
  contactActionText: {
    color: '#0B48E0',
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderRadius: 6,
    padding: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialText: {
    color: '#333',
    fontSize: 14,
  },
});
