import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../context/authContext';
import { fetchTasks } from '../../utilities/utils';

export default function TaskScreen() {
  const { auth } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Tabs: All, Pending, Completed, Cancelled
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    if (auth.token) {
      setLoading(true);
      fetchTasks(auth.token)
        .then((data) => setTasks(data))
        .catch((err) => console.error('Error fetching tasks:', err))
        .finally(() => setLoading(false));
    }
  }, [auth.token]);

  // Filter tasks by active tab
  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 'All') return true;
    const statusLower = task.status?.toLowerCase();
    if (activeTab === 'Pending') return statusLower === 'pending';
    if (activeTab === 'Completed') return statusLower === 'completed';
    if (activeTab === 'Cancelled') return statusLower === 'cancelled';
    return true; // fallback
  });

  // Count tasks for each status to show in tabs
  const pendingCount = tasks.filter((t) => t.status?.toLowerCase() === 'pending').length;
  const completedCount = tasks.filter((t) => t.status?.toLowerCase() === 'completed').length;
  const cancelledCount = tasks.filter((t) => t.status?.toLowerCase() === 'cancelled').length;
  const totalCount = tasks.length;

  // Helper to format ISO date
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
      {/* Header Text */}
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>Task</Text>
        <Text style={styles.headerSubtitle}>Manage your task</Text>
      </View>

      {/* Top Card: now a gradient */}
      <LinearGradient
        colors={['#0B48E0', '#5749f8']}
        style={styles.topCard}
      >
        <View style={styles.topCardContent}>
          <Text style={styles.topCardTitle}>Total Tasks Requested</Text>
          <Text style={styles.topCardValue}>{totalCount}</Text>
          <Ionicons
            name="briefcase-outline"
            size={50}
            color="#fff"
            style={styles.topCardIcon}
          />
        </View>
      </LinearGradient>

      {/* Tabs: All, Pending, Completed, Cancelled */}
      <View style={styles.tabsContainer}>
        <TabItem
          label={`All (${totalCount})`}
          active={activeTab === 'All'}
          onPress={() => setActiveTab('All')}
        />
        <TabItem
          label={`Pending (${pendingCount})`}
          active={activeTab === 'Pending'}
          onPress={() => setActiveTab('Pending')}
        />
        <TabItem
          label={`Completed (${completedCount})`}
          active={activeTab === 'Completed'}
          onPress={() => setActiveTab('Completed')}
        />
        <TabItem
          label={`Cancelled (${cancelledCount})`}
          active={activeTab === 'Cancelled'}
          onPress={() => setActiveTab('Cancelled')}
        />
      </View>

      {/* Task List */}
      {loading ? (
        <ActivityIndicator size="large" color="#0B48E0" style={{ marginTop: 30 }} />
      ) : filteredTasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>No tasks found.</Text>
        </View>
      ) : (
        <ScrollView style={styles.tasksList}>
          {filteredTasks.map((task, idx) => (
            <View key={idx} style={styles.taskRow}>
              <View>
                <Text style={styles.taskName}>
                  <Ionicons name="sunny-outline" size={24} color="#FFA500" />
                  {task.name}
                </Text>
                <Text style={styles.taskDate}>
                  <Ionicons name="calendar-outline" size={14} /> {formatDate(task.date)}{'  '}
                  <Ionicons name="cash-outline" size={14} /> {task.price}
                </Text>
              </View>
              <View style={[styles.statusBadge, getStatusStyle(task.status)]}>
                <Text style={styles.statusBadgeText}>{task.status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

/** TabItem Component */
function TabItem({ label, active, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.tabItem, active && styles.activeTab]}
      onPress={onPress}
    >
      <Text style={[styles.tabItemText, active && styles.activeTabText]}>{label}</Text>
    </TouchableOpacity>
  );
}

/** Helper: Style statuses by text */
function getStatusStyle(status) {
  if (!status) return {};
  switch (status.toLowerCase()) {
    case 'pending':
      return { backgroundColor: '#FCEADE' };
    case 'in progress':
      return { backgroundColor: '#E7F3FE' };
    case 'awaiting approval':
      return { backgroundColor: '#FEF9E7' };
    case 'completed':
      return { backgroundColor: '#E4F7EA' };
    case 'cancelled':
      return { backgroundColor: '#FFE6E6' };
    default:
      return { backgroundColor: '#EEE' };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 20,
  },
  headerTextContainer: {
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
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
  topCard: {
    marginHorizontal: 20,
    margin: 30, // preserve your original margin
    borderRadius: 10,
    padding: 20,
  },
  topCardContent: {
    position: 'relative',
  },
  topCardTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  topCardValue: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  topCardIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    opacity: 0.2,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  tabItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
  },
  tabItemText: {
    color: '#666',
    fontSize: 14,
  },
  activeTab: {
    backgroundColor: '#0B48E0',
  },
  activeTabText: {
    color: '#fff',
  },
  tasksList: {
    marginHorizontal: 20,
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  taskDate: {
    fontSize: 12,
    color: '#666',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
});
