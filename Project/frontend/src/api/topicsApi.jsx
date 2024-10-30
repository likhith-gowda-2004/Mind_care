// src/api/topicsApi.js
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';  // Set your backend URL here

export const fetchTopicContent = async (topicId) => {
  try {
    const response = await axios.get(`/api/topics/${topicId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching topic content:", error);
    throw error;
  }
};
