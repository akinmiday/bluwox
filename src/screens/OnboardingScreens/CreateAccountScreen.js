// // src/screens/CreateAccountScreen.js
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Modal,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function CreateAccountScreen({ navigation }) {
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [agreed, setAgreed] = useState(false);

//   // State to show/hide the support modal
//   const [showSupportModal, setShowSupportModal] = useState(false);

//   const handleCreateAccount = () => {
//     // Example check: only navigate if the user agreed to terms
//     if (!agreed) {
//       Alert.alert('Terms of Service', 'Please agree to the terms of service before proceeding.');
//       return;
//     }
//     // TODO: Additional validation/logic
//     navigation.navigate('VerifyAccount');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Row with Back Icon + Title */}
//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
//           <Ionicons name="arrow-back" size={30} color="#0B48E0" />
//         </TouchableOpacity>
//         <View>
//           <Text style={styles.title}>Create An Account</Text>
//           <Text style={styles.subtitle}>Just a few details, and you're all set!</Text>
//         </View>
//       </View>

//       <TextInput
//         style={styles.input}
//         placeholder="Firstname"
//         value={firstname}
//         onChangeText={setFirstname}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Lastname"
//         value={lastname}
//         onChangeText={setLastname}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone number"
//         value={phone}
//         onChangeText={setPhone}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email address"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Create password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       {/* Checkbox Row */}
//       <View style={styles.checkboxContainer}>
//         <TouchableOpacity onPress={() => setAgreed(!agreed)} style={styles.checkboxIcon}>
//           <Ionicons
//             name={agreed ? 'checkbox' : 'square-outline'}
//             size={24}
//             color="#0B48E0"
//           />
//         </TouchableOpacity>
//         <Text style={styles.checkboxLabel}>
//           By using Bluwox you confirm that you have read and agree to our
//           <Text style={styles.linkText}> terms of service.</Text>
//         </Text>
//       </View>

//       {/* Create Account Button */}
//       <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
//         <Text style={styles.buttonText}>Create account</Text>
//       </TouchableOpacity>

//       {/* Already have an account? */}
//       <View style={styles.linkContainer}>
//         <Text>Already have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//           <Text style={styles.linkText}> Log In</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Floating Support Chat Icon */}
//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() => setShowSupportModal(true)}
//       >
//         <Ionicons name="chatbubble-ellipses-outline" size={28} color="#0B48E0" />
//       </TouchableOpacity>

//       {/* Support Modal */}
//       <Modal
//         visible={showSupportModal}
//         animationType="slide"
//         transparent
//         onRequestClose={() => setShowSupportModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             {/* Close Button */}
//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setShowSupportModal(false)}
//             >
//               <Ionicons name="close" size={24} color="#666" />
//             </TouchableOpacity>

//             <Text style={styles.modalTitle}>Contact us</Text>

//             <View style={styles.contactRow}>
//               <Text style={styles.contactLabel}>Email</Text>
//               <TouchableOpacity style={styles.contactAction}>
//                 <Text style={styles.contactActionText}>help@domain.com</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.contactRow}>
//               <Text style={styles.contactLabel}>Phone number</Text>
//               <TouchableOpacity style={styles.contactAction}>
//                 <Text style={styles.contactActionText}>0000 000 0000</Text>
//               </TouchableOpacity>
//             </View>

//             <TouchableOpacity style={styles.socialButton}>
//               <Ionicons name="logo-whatsapp" size={20} color="#0B48E0" style={styles.socialIcon} />
//               <Text style={styles.socialText}>WhatsApp</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// // ------------------- STYLES -------------------
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     paddingHorizontal: 20,
//     paddingTop: 40, // Space at the top for header
//   },
//   // Header row with icon and title on the same line
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//     marginTop: 50,
//   },
//   backIcon: {
//     marginRight: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#0B48E0',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 20,
//     marginTop: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 6,
//     padding: 15,
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   checkboxIcon: {
//     marginRight: 8,
//   },
//   checkboxLabel: {
//     fontSize: 12,
//     color: '#666',
//     flex: 1, // allows wrapping if text is long
//   },
//   linkText: {
//     color: '#0B48E0',
//   },
//   button: {
//     backgroundColor: '#0B48E0',
//     paddingVertical: 15,
//     borderRadius: 6,
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   linkContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 40,
//   },

//   // Floating chat icon
//   fab: {
//     position: 'absolute',
//     bottom: 30,
//     right: 20,
//     backgroundColor: '#FFF',
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     elevation: 5, // Android shadow
//     alignItems: 'center',
//     justifyContent: 'center',
//     // iOS shadow
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },

//   // Modal styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     justifyContent: 'flex-end',
//   },
//   modalContainer: {
//     backgroundColor: '#FFF',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//     minHeight: '40%', // partial screen
//   },
//   closeButton: {
//     alignSelf: 'flex-end',
//     marginBottom: 10,
//   },
//   modalTitle: {
//     fontSize: 24,
//     color: '#0B48E0',
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   contactRow: {
//     marginBottom: 15,
//   },
//   contactLabel: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   contactAction: {
//     backgroundColor: '#F8F9FA',
//     borderRadius: 6,
//     padding: 14,
//   },
//   contactActionText: {
//     color: '#0B48E0',
//     fontWeight: 'bold',
//   },
//   socialButton: {
//     flexDirection: 'row',
//     backgroundColor: '#F8F9FA',
//     borderRadius: 6,
//     padding: 14,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   socialIcon: {
//     marginRight: 10,
//   },
//   socialText: {
//     color: '#333',
//     fontSize: 14,
//   },
// });


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createUser } from '../../utilities/utils'; // Import the createUser function
import { useNavigation } from '@react-navigation/native';

export default function CreateAccountScreen() {
  const navigation = useNavigation();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  // State to show/hide the support modal
  const [showSupportModal, setShowSupportModal] = useState(false);

  const handleCreateAccount = async () => {
    if (!agreed) {
      Alert.alert(
        'Terms of Service',
        'Please agree to the terms of service before proceeding.'
      );
      return;
    }

    const userData = {
      firstname,
      lastname,
      phone,
      email: email.toLowerCase(), // ensure email is lowercase
      password,
    };

    setLoading(true);
    try {
      const result = await createUser(userData);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('VerifyAccount');
    } catch (error) {
      Alert.alert('Registration Failed', 'Please try again later.');
      console.error('Error creating account:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Header: Back Icon + Title */}
          <View style={styles.headerRow}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backIcon}
            >
              <Ionicons name="arrow-back" size={30} color="#0B48E0" />
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>Create An Account</Text>
              <Text style={styles.subtitle}>
                Just a few details, and you're all set!
              </Text>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Firstname"
            value={firstname}
            onChangeText={setFirstname}
          />
          <TextInput
            style={styles.input}
            placeholder="Lastname"
            value={lastname}
            onChangeText={setLastname}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Create password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Checkbox Row */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setAgreed(!agreed)}
              style={styles.checkboxIcon}
            >
              <Ionicons
                name={agreed ? 'checkbox' : 'square-outline'}
                size={24}
                color="#0B48E0"
              />
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              By using Bluwox you confirm that you have read and agree to our
              <Text style={styles.linkText}> terms of service.</Text>
            </Text>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleCreateAccount}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Create account</Text>
            )}
          </TouchableOpacity>

          {/* Already have an account? */}
          <View style={styles.linkContainer}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.linkText}> Log In</Text>
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
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  backIcon: {
    marginRight: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B48E0',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxIcon: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#666',
    flex: 1,
  },
  linkText: {
    color: '#0B48E0',
  },
  button: {
    backgroundColor: '#0B48E0',
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#FFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
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
    minHeight: '40%',
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
