// src/screens/NotificationsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen({ navigation }) {
  // Example notifications data
  const notifications = [
    { id: 1, title: 'Service update', subtitle: 'More information' },
    { id: 2, title: 'Service update', subtitle: 'More information' },
    { id: 3, title: 'Service update', subtitle: 'More information' },
    { id: 4, title: 'Service update', subtitle: 'More information' },
  ];

  return (
    <View style={styles.container}>
      {/* Header Row: Back arrow + "Notifications" */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#0B48E0" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {notifications.map((item) => (
          <View key={item.id} style={styles.notificationCard}>
            <Ionicons
              name="notifications-outline" // <-- Use a notification-related icon here
              size={32}
              color="#0B48E0"
              style={styles.notificationIcon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationSubtitle}>{item.subtitle}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// --------------------- STYLES ---------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 40, // space at the top
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: '#0B48E0',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  notificationIcon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationSubtitle: {
    fontSize: 12,
    color: '#666',
  },
});
