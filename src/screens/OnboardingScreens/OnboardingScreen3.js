import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OnboardingScreen3({ navigation }) {
  const [showSupportModal, setShowSupportModal] = useState(false);

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
        <Text style={styles.title}>Your Trusted Artisan Connection</Text>
        <Text style={styles.subtitle}>
          Quickly find skilled and verified artisans for your home and business needs. 
          Reliable service, every time.
        </Text>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        {/* Primary button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.linkText}>I already have an account</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Support Chat Icon */}
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

            {/* Example Contact Rows */}
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
              <Ionicons name="logo-whatsapp" size={20} color="#0B48E0" style={styles.socialIcon} />
              <Text style={styles.socialText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#0B48E0',
    marginBottom: 30,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 50,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#0B48E0',
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
  },
  linkText: {
    color: '#0B48E0',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
  },

  // Floating chat icon
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#FFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 5, // Android shadow
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
    fontSize: 18,
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
    padding: 10,
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
