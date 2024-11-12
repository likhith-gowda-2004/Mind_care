// import Faculty from '../models/facultyModel.js';

// // Controller to fetch all faculties
// export const getAllFaculties = async (req, res) => {
//   try {
//     const faculties = await Faculty.find().populate('topicId');
//     if (!faculties.length) {
//       return res.status(404).json({ message: 'No faculties found' });
//     }
//     res.json(faculties);
//   } catch (error) {
//     console.error('Error fetching faculties:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

import Faculty from '../models/facultyModel.js';

// Controller to fetch all faculties
export const getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find().populate('topicId');
    if (faculties.length === 0) {
      return res.status(404).json({ message: 'No faculties found' });
    }
    res.json(faculties);
  } catch (error) {
    console.error('Error fetching faculties:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller to create a new faculty
export const createFaculty = async (req, res) => {
  const { name, specialization, contactInfo, topicId, availableSlots } = req.body;
  try {
    const newFaculty = new Faculty({ name, specialization, contactInfo, topicId, availableSlots });
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (error) {
    console.error('Error creating faculty:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller to update a faculty
export const updateFaculty = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(id, req.body, { new: true }).populate('topicId');
    if (!updatedFaculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    res.json(updatedFaculty);
  } catch (error) {
    console.error('Error updating faculty:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller to delete a faculty
export const deleteFaculty = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFaculty = await Faculty.findByIdAndDelete(id);
    if (!deletedFaculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    res.json({ message: 'Faculty deleted successfully' });
  } catch (error) {
    console.error('Error deleting faculty:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
