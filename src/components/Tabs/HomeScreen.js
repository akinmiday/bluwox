import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  // Track which horizontal card is visible
  const [activeIndex, setActiveIndex] = useState(0);

  // Example data for the cards
  const statsData = [
    { title: 'Pending Tasks', value: 25, icon: 'layers-outline' },
    { title: 'Total Tasks Requested', value: 25, icon: 'albums-outline' },
    { title: 'Total Money Spent', value: 25786.4, icon: 'cash-outline' },
  ];

  // Example tasks
  const recentTasks = [
    { name: 'Job name', date: '02 Mar 2024', price: '30,000', status: 'Pending' },
    { name: 'Job name', date: '02 Mar 2024', price: '30,000', status: 'In progress' },
    { name: 'Job name', date: '02 Mar 2024', price: '30,000', status: 'Awaiting approval' },
    { name: 'Job name', date: '02 Mar 2024', price: '30,000', status: 'Completed' },
    { name: 'Job name', date: '02 Mar 2024', price: '30,000', status: 'Awaiting approval' },
    { name: 'Job name', date: '02 Mar 2024', price: '30,000', status: 'Completed' },
    { name: 'Job name', date: '02 Mar 2024', price: '30,000', status: 'Awaiting approval' },
    { name: 'Job name', date: '02 Mar 2024', price: '30,000', status: 'Completed' },
  ];

  // State to determine whether we show all tasks or just a few
  const [showAllTasks, setShowAllTasks] = useState(false);

  // Decide how many tasks to display
  const tasksToShow = showAllTasks ? recentTasks : recentTasks.slice(0, 5);

  // Update activeIndex on horizontal scroll
  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / screenWidth);
    setActiveIndex(currentIndex);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Row: Avatar + Welcome text + Notification icon */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../../../assets/avatar.png')} // Replace with your avatar image
            style={styles.avatar}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.userName}>Jake Adeleke</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => {navigation.navigate("notifications")}}>
          <Ionicons name="notifications-outline" size={30} color="#0B48E0" />
        </TouchableOpacity>
      </View>

      {/* Horizontal scroll for 3 stats cards */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.statsScroll}
      >
        {statsData.map((item, index) => (
          <View key={index} style={[styles.cardContainer, { width: screenWidth }]}>
            <View style={styles.cardBackground}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardValue}>{item.value.toLocaleString()}</Text>
              <Ionicons
                name={item.icon}
                size={50}
                color="#fff"
                style={styles.cardIcon}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Dot Indicator */}
      <View style={styles.dotsContainer}>
        {statsData.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Recent Tasks Section */}
      <View style={styles.recentTasksContainer}>
        <Text style={styles.recentTasksTitle}>Recent Tasks</Text>

        {/* Show partial or all tasks based on showAllTasks */}
        {tasksToShow.map((task, idx) => (
          <View key={idx} style={styles.taskRow}>
            <View>
              <Text style={styles.taskName}>{task.name}</Text>
              <Text style={styles.taskDate}>
                <Ionicons name="calendar-outline" size={14} /> {task.date}{'  '}
                <Ionicons name="cash-outline" size={14} /> {task.price}
              </Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={[styles.statusText, getStatusStyle(task.status)]}>
                {task.status}
              </Text>
            </View>
          </View>
        ))}

        {/* Show "See all tasks" only if not already showing them */}
        {!showAllTasks && (
          <TouchableOpacity
            onPress={() => setShowAllTasks(true)}
            style={styles.seeAllButton}
          >
            <Text style={styles.linkBlue}>See all tasks</Text>
          </TouchableOpacity>
        )}

        {/* AD Card with normal color and centered text */}
        <View style={styles.adCard}>
          <Text style={styles.adText}>This is an AD</Text>
        </View>
      </View>
    </ScrollView>
  );
}

/** Helper: Style statuses by text */
function getStatusStyle(status) {
  switch (status.toLowerCase()) {
    case 'pending':
      return { backgroundColor: '#FCEADE', color: '#C05717' };
    case 'in progress':
      return { backgroundColor: '#E7F3FE', color: '#2A73D7' };
    case 'awaiting approval':
      return { backgroundColor: '#FEF9E7', color: '#C19F23' };
    case 'completed':
      return { backgroundColor: '#E4F7EA', color: '#3E9A4F' };
    default:
      return { backgroundColor: '#EEE', color: '#333' };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical:40
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    resizeMode: 'cover',
    marginTop:20
  },
  nameContainer: {
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 12,
    color: '#666',
  },
  userName: {
    fontSize: 16,
    color: '#0B48E0',
    fontWeight: 'bold',
  },
  statsScroll: {
    marginBottom: 10,
  },
  cardContainer: {
    height: 100,
  },
  cardBackground: {
    flex: 1,
    backgroundColor: '#0B48E0',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    padding: 15,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    opacity: 0.3,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  dot: {
    width: 30,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#0B48E0',
  },
  recentTasksContainer: {
    paddingHorizontal: 20,
  },
  recentTasksTitle: {
    fontSize: 16,
    color: '#0B48E0',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 8,
  },
  taskName: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  taskDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    
  },
  statusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  seeAllButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginBottom: 15,
  },
  linkBlue: {
    color: '#0B48E0',
    fontWeight:"500",
    marginTop:10
  },
  adCard: {
    backgroundColor: '#0B48E0', // normal color
    height: 100,
    borderRadius: 8,
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  adText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
