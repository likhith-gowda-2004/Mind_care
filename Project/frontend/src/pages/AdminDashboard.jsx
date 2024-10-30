// src/pages/AdminDashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState({ title: '', content: '' });
    const [contentData, setContentData] = useState({ topicId: '', type: '', content: { details: '' } });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Set the base API URL
    const apiUrl = 'http://localhost:5000';

    useEffect(() => {
        fetchTopics();
    }, []);

    // Function to fetch all topics from the API
    const fetchTopics = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${apiUrl}/api/admin/topics`);
            console.log("Fetched topics:", response.data); // Log the response for debugging
            if (response.data.topics) {
                setTopics(response.data.topics);
            } else {
                setError("No topics found.");
            }
        } catch (error) {
            console.error("Error fetching topics:", error); // Log the error details
            setError("Failed to load topics. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Function to add a new topic
    const addTopic = async () => {
        if (!newTopic.title || !newTopic.content) {
            setError("Please enter both title and content for the topic.");
            return;
        }
        setError('');
        try {
            await axios.post(`${apiUrl}/api/admin/add-topic`, newTopic);
            fetchTopics();
            setNewTopic({ title: '', content: '' });
        } catch (error) {
            console.error("Error adding topic:", error);
            setError("Error adding topic. Please try again.");
        }
    };

    // Function to add new content to an existing topic
    const addContent = async () => {
        if (!contentData.topicId || !contentData.type || !contentData.content.details) {
            setError("Please select a topic, type, and provide content details.");
            return;
        }
        setError('');
        try {
            await axios.post(`${apiUrl}/api/admin/add-content`, contentData);
            fetchTopics();
            setContentData({ topicId: '', type: '', content: { details: '' } });
        } catch (error) {
            console.error("Error adding content:", error);
            setError("Error adding content. Please try again.");
        }
    };

    // Function to delete a topic by ID
    const deleteTopic = async (topicId) => {
        setError('');
        try {
            await axios.delete(`${apiUrl}/api/admin/delete-topic/${topicId}`);
            fetchTopics();
        } catch (error) {
            console.error("Error deleting topic:", error);
            setError("Error deleting topic. Please try again.");
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <p>Loading topics...</p>
            ) : (
                <>
                    {/* Add New Topic Section */}
                    <section className="admin-section">
                        <h2>Add New Topic</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={newTopic.title}
                            onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                        />
                        <textarea
                            placeholder="Content"
                            value={newTopic.content}
                            onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
                        ></textarea>
                        <button onClick={addTopic}>Add Topic</button>
                    </section>

                    {/* Add Content to Existing Topic Section */}
                    <section className="admin-section">
                        <h2>Add Content to Topic</h2>
                        <select
                            value={contentData.topicId}
                            onChange={(e) => setContentData({ ...contentData, topicId: e.target.value })}
                        >
                            <option value="">Select Topic</option>
                            {topics.map(topic => (
                                <option key={topic._id} value={topic._id}>{topic.title}</option>
                            ))}
                        </select>

                        <select
                            value={contentData.type}
                            onChange={(e) => setContentData({ ...contentData, type: e.target.value })}
                        >
                            <option value="">Select Content Type</option>
                            <option value="video">Video</option>
                            <option value="assessment">Assessment</option>
                            <option value="blog">Blog</option>
                            <option value="faculty">Faculty</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Content Details (e.g., URL for videos)"
                            value={contentData.content.details}
                            onChange={(e) =>
                                setContentData({
                                    ...contentData,
                                    content: { ...contentData.content, details: e.target.value },
                                })
                            }
                        />
                        <button onClick={addContent}>Add Content</button>
                    </section>

                    {/* Existing Topics List with Delete Option */}
                    <section className="admin-section">
                        <h2>Existing Topics</h2>
                        {topics.length > 0 ? (
                            <ul className="topic-list">
                                {topics.map((topic) => (
                                    <li key={topic._id} className="topic-item">
                                        <span>{topic.title}</span>
                                        <button onClick={() => deleteTopic(topic._id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No topics available</p>
                        )}
                    </section>
                </>
            )}
        </div>
    );
};

export default AdminDashboard;
