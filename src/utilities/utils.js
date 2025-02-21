// src/utils/utils.js
import axios from 'axios';
import Constants from 'expo-constants';

// Use an environment variable for the API URL, or default to localhost.
// const API_URL = process.env.API_BASE_URL;
const API_URL = Constants.expoConfig?.extra?.apiBaseUrl;

// Register a new user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Login a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Create a new task for an authenticated user.
// token is the JWT received after login.
export const createTask = async (taskData, token) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Fetch all tasks for the authenticated user.
export const fetchTasks = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
