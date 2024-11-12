// import axios from 'axios';

// // Fetch all faculties
// export const getFaculties = async () => {
//   try {
//     const response = await axios.get('http://localhost:5000/api/faculties'); // Updated endpoint to match the router
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching faculty data:', error);
//     throw error;
//   }
// };

import axios from 'axios';

const baseURL = 'http://localhost:5000/api/faculties';

// Fetch all faculties
export const getFaculties = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching faculty data:', error);
    throw error;
  }
};

// Create a new faculty
export const createFaculty = async (facultyData) => {
  try {
    const response = await axios.post(baseURL, facultyData);
    return response.data;
  } catch (error) {
    console.error('Error creating faculty:', error);
    throw error;
  }
};

// Update a faculty
export const updateFaculty = async (id, facultyData) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, facultyData);
    return response.data;
  } catch (error) {
    console.error('Error updating faculty:', error);
    throw error;
  }
};

// Delete a faculty
export const deleteFaculty = async (id) => {
  try {
    await axios.delete(`${baseURL}/${id}`);
  } catch (error) {
    console.error('Error deleting faculty:', error);
    throw error;
  }
};
