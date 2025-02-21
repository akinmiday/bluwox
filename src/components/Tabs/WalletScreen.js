import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function WalletScreen() {
  // Example data
  const totalMoneySpent = 25786.4;
  const transactions = [
    { title: 'Refund for Servicename', date: '2024-03-02', amount: 40 },
    { title: 'Refund for Servicename', date: '2024-03-02', amount: 40 },
    { title: 'Refund for Servicename', date: '2024-03-02', amount: 40 },
    { title: 'Refund for Servicename', date: '2024-03-02', amount: 40 },
    { title: 'Refund for Servicename', date: '2024-03-02', amount: 40 },
  ];

  // Helper to format the date
  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <View style={styles.container}>
      {/* Header: "Wallet" + "Manage your wallet" */}
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>Wallet</Text>
        <Text style={styles.headerSubtitle}>Manage your wallet</Text>
      </View>

      {/* Gradient Card: Total Money spent */}
      <LinearGradient
        colors={['#0B48E0', '#5749f8']}
        style={styles.gradientCard}
      >
        <View style={styles.gradientCardContent}>
          <Text style={styles.gradientCardTitle}>Total Money spent</Text>
          <Text style={styles.gradientCardValue}>
            {totalMoneySpent.toLocaleString()}
          </Text>
          {/* Cash icon in the corner */}
          <Ionicons
            name="cash-outline"
            size={60}
            color="#fff"
            style={styles.gradientCardIcon}
          />
        </View>
      </LinearGradient>

      {/* Action Buttons: Top up, Withdraw (light background, no border) */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={[styles.actionButton]}>
          <Text style={styles.actionButtonText}>+ Top up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton]}>
          <Text style={styles.actionButtonText}>- Withdraw</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions List */}
      <ScrollView style={styles.transactionsList}>
        {transactions.map((item, index) => (
          <View key={index} style={styles.transactionRow}>
            {/* Left side: Coin icon + Title + Date */}
            <View style={styles.transactionLeft}>
              <Ionicons
                name="cash-outline" // coin/cash icon
                size={24}
                color="#0B48E0"
                style={styles.transactionIcon}
              />
              <View>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionDate}>
                  <Ionicons name="calendar-outline" size={14} />{' '}
                  {formatDate(item.date)}
                </Text>
              </View>
            </View>

            {/* Right side: + amount in green */}
            <Text style={styles.transactionAmount}>
              +{item.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 40,
  },

  // Header
  headerTextContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: '#0B48E0',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },

  // Gradient card for total money spent
  gradientCard: {
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    marginVertical:30
  },
  gradientCardContent: {
    position: 'relative',
  },
  gradientCardTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  gradientCardValue: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  gradientCardIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    opacity: 0.2,
  },

  // Action buttons row
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  actionButton: {
    flex: 0.48,
    backgroundColor: '#F8F9FA',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#0B48E0',
    fontWeight: 'bold',
  },

  // Transactions
  transactionsList: {
    marginHorizontal: 20,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    marginRight: 10,
  },
  transactionTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#3E9A4F', // green color
    fontWeight: 'bold',
  },
});
