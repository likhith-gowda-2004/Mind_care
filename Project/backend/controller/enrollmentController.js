import Enrollment from '../models/enrollmentModel.js';
import User from '../models/userModel.js';
import Topic from '../models/topicModel.js';

export const enrollInTopic = async (req, res) => {
  try {
    const { userId, topicId } = req.body;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Check if topic exists
    const topic = await Topic.findById(topicId);
    if (!topic) {
      return res.status(404).json({ 
        success: false, 
        message: 'Topic not found' 
      });
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({ 
      student: userId, 
      topic: topicId 
    });
    
    if (existingEnrollment) {
      return res.status(400).json({ 
        success: false, 
        message: 'Already enrolled in this topic' 
      });
    }

    // Create new enrollment
    const enrollment = await Enrollment.create({
      student: userId,
      topic: topicId
    });

    res.status(201).json({
      success: true,
      message: 'Successfully enrolled in topic',
      enrollment
    });

  } catch (error) {
    console.error('Error in enrollment:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing enrollment',
      error: error.message 
    });
  }
};

export const getEnrollmentsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const enrollments = await Enrollment.find({ student: userId })
      .populate('topic')
      .exec();

    res.status(200).json({
      success: true,
      enrollments
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching enrollments',
      error: error.message 
    });
  }
};

export const unenrollFromTopic = async (req, res) => {
  try {
    const { userId, topicId } = req.body;

    // Check if enrollment exists
    const enrollment = await Enrollment.findOne({ 
      student: userId, 
      topic: topicId 
    });

    if (!enrollment) {
      return res.status(404).json({ 
        success: false, 
        message: 'Enrollment not found' 
      });
    }

    // Delete the enrollment
    await Enrollment.findByIdAndDelete(enrollment._id);

    res.status(200).json({
      success: true,
      message: 'Successfully unenrolled from topic'
    });

  } catch (error) {
    console.error('Error in unenrollment:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing unenrollment',
      error: error.message 
    });
  }
};