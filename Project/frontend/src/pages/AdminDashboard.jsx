// // src/pages/AdminDashboard.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//     const [topics, setTopics] = useState([]);
//     const [newTopic, setNewTopic] = useState({ title: '', description: '', content: '' });
//     const [contentData, setContentData] = useState({ topicId: '', type: '', content: '' });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     const apiUrl = 'http://localhost:5000';

//     useEffect(() => {
//         fetchTopics();
//     }, []);

//     const fetchTopics = async () => {
//         setLoading(true);
//         setError('');
//         try {
//             const response = await axios.get(`${apiUrl}/api/admin/topics`);
//             if (response.data.topics) {
//                 setTopics(response.data.topics);
//             } else {
//                 setError("No topics found.");
//             }
//         } catch (error) {
//             setError("Failed to load topics. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const addTopic = async () => {
//         if (!newTopic.title || !newTopic.description || !newTopic.content) {
//             setError("Please enter all required fields for the topic.");
//             return;
//         }
//         setError('');
//         try {
//             await axios.post(`${apiUrl}/api/admin/add-topic`, newTopic);
//             fetchTopics();
//             setNewTopic({ title: '', description: '', content: '' });
//         } catch (error) {
//             setError("Error adding topic. Please try again.");
//         }
//     };

//     const addContent = async () => {
//         if (!contentData.topicId || !contentData.type || !contentData.content) {
//             setError("Please select a topic, type, and provide content details.");
//             return;
//         }
//         setError('');
//         try {
//             await axios.post(`${apiUrl}/api/admin/add-content`, contentData);
//             fetchTopics();
//             setContentData({ topicId: '', type: '', content: '' });
//         } catch (error) {
//             setError("Error adding content. Please try again.");
//         }
//     };

//     const deleteTopic = async (topicId) => {
//         setError('');
//         try {
//             await axios.delete(`${apiUrl}/api/admin/delete-topic/${topicId}`);
//             fetchTopics();
//         } catch (error) {
//             setError("Error deleting topic. Please try again.");
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <h1>Admin Dashboard</h1>
//             {error && <div className="error-message">{error}</div>}
//             {loading ? (
//                 <p>Loading topics...</p>
//             ) : (
//                 <>
//                     <section className="admin-section">
//                         <h2>Add New Topic</h2>
//                         <input
//                             type="text"
//                             placeholder="Title"
//                             value={newTopic.title}
//                             onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
//                         />
//                         <textarea
//                             placeholder="Description"
//                             value={newTopic.description}
//                             onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
//                         ></textarea>
//                         <textarea
//                             placeholder="Content"
//                             value={newTopic.content}
//                             onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
//                         ></textarea>
//                         <button onClick={addTopic}>Add Topic</button>
//                     </section>

//                     <section className="admin-section">
//                         <h2>Add Content to Topic</h2>
//                         <select
//                             value={contentData.topicId}
//                             onChange={(e) => setContentData({ ...contentData, topicId: e.target.value })}
//                         >
//                             <option value="">Select Topic</option>
//                             {topics.map(topic => (
//                                 <option key={topic._id} value={topic._id}>{topic.title}</option>
//                             ))}
//                         </select>

//                         <select
//                             value={contentData.type}
//                             onChange={(e) => setContentData({ ...contentData, type: e.target.value })}
//                         >
//                             <option value="">Select Content Type</option>
//                             <option value="video">Video</option>
//                             <option value="assessment">Assessment</option>
//                             <option value="blog">Blog</option>
//                             <option value="faculty">Faculty</option>
//                         </select>

//                         <input
//                             type="text"
//                             placeholder="Content Details"
//                             value={contentData.content}
//                             onChange={(e) => setContentData({ ...contentData, content: e.target.value })}
//                         />
//                         <button onClick={addContent}>Add Content</button>
//                     </section>

//                     <section className="admin-section">
//                         <h2>Existing Topics</h2>
//                         {topics.length > 0 ? (
//                             <ul className="topic-list">
//                                 {topics.map((topic) => (
//                                     <li key={topic._id} className="topic-item">
//                                         <span>{topic.title}</span>
//                                         <button onClick={() => deleteTopic(topic._id)}>Delete</button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p>No topics available</p>
//                         )}
//                     </section>
//                 </>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//     const [topics, setTopics] = useState([]);
//     const [newTopic, setNewTopic] = useState({ title: '', description: '', content: '' });
//     const [contentData, setContentData] = useState({ topicId: '', type: '', content: '' });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     const apiUrl = 'http://localhost:5000';

//     useEffect(() => {
//         fetchTopics();
//     }, []);

//     const fetchTopics = async () => {
//         setLoading(true);
//         setError('');
//         try {
//             const response = await axios.get(`${apiUrl}/api/admin/topics`);
//             setTopics(response.data.topics || []);
//             if (!response.data.topics) setError("No topics found.");
//         } catch (error) {
//             setError("Failed to load topics. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const addTopic = async () => {
//         if (!newTopic.title || !newTopic.description || !newTopic.content) {
//             setError("Please enter all required fields for the topic.");
//             return;
//         }
//         setError('');
//         try {
//             await axios.post(`${apiUrl}/api/admin/add-topic`, newTopic);
//             fetchTopics();
//             setNewTopic({ title: '', description: '', content: '' });
//         } catch (error) {
//             setError("Error adding topic. Please try again.");
//         }
//     };

//     const addContent = async () => {
//         if (!contentData.topicId || !contentData.type || !contentData.content) {
//             setError("Please select a topic, type, and provide content details.");
//             return;
//         }
//         setError('');
//         try {
//             const payload = { 
//                 topicId: contentData.topicId,
//                 type: contentData.type,
//                 content: { details: contentData.content } // Wrap content details in an object
//             };
//             await axios.post(`${apiUrl}/api/admin/add-content`, payload);
//             fetchTopics();
//             setContentData({ topicId: '', type: '', content: '' });
//         } catch (error) {
//             setError("Error adding content. Please try again.");
//         }
//     };

//     const deleteTopic = async (topicId) => {
//         setError('');
//         try {
//             await axios.delete(`${apiUrl}/api/admin/delete-topic/${topicId}`);
//             fetchTopics();
//         } catch (error) {
//             setError("Error deleting topic. Please try again.");
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <h1>Admin Dashboard</h1>
//             {error && <div className="error-message">{error}</div>}
//             {loading ? (
//                 <p>Loading topics...</p>
//             ) : (
//                 <>
//                     <section className="admin-section">
//                         <h2>Add New Topic</h2>
//                         <input
//                             type="text"
//                             placeholder="Title"
//                             value={newTopic.title}
//                             onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
//                         />
//                         <textarea
//                             placeholder="Description"
//                             value={newTopic.description}
//                             onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
//                         ></textarea>
//                         <textarea
//                             placeholder="Content"
//                             value={newTopic.content}
//                             onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
//                         ></textarea>
//                         <button onClick={addTopic}>Add Topic</button>
//                     </section>

//                     <section className="admin-section">
//                         <h2>Add Content to Topic</h2>
//                         <select
//                             value={contentData.topicId}
//                             onChange={(e) => setContentData({ ...contentData, topicId: e.target.value })}
//                         >
//                             <option value="">Select Topic</option>
//                             {topics.map(topic => (
//                                 <option key={topic._id} value={topic._id}>{topic.title}</option>
//                             ))}
//                         </select>

//                         <select
//                             value={contentData.type}
//                             onChange={(e) => setContentData({ ...contentData, type: e.target.value })}
//                         >
//                             <option value="">Select Content Type</option>
//                             <option value="video">Video</option>
//                             <option value="assessment">Assessment</option>
//                             <option value="blog">Blog</option>
//                             <option value="faculty">Faculty</option>
//                         </select>

//                         <input
//                             type="text"
//                             placeholder="Content Details"
//                             value={contentData.content}
//                             onChange={(e) => setContentData({ ...contentData, content: e.target.value })}
//                         />
//                         <button onClick={addContent}>Add Content</button>
//                     </section>

//                     <section className="admin-section">
//                         <h2>Existing Topics</h2>
//                         {topics.length > 0 ? (
//                             <ul className="topic-list">
//                                 {topics.map((topic) => (
//                                     <li key={topic._id} className="topic-item">
//                                         <span>{topic.title}</span>
//                                         <button onClick={() => deleteTopic(topic._id)}>Delete</button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p>No topics available</p>
//                         )}
//                     </section>
//                 </>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState({ title: '', description: '', content: '' });
    const [contentData, setContentData] = useState({ topicId: '', type: '', title: '', url: '', content: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const apiUrl = 'http://localhost:5000';

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${apiUrl}/api/admin/topics`);
            if (response.data.topics) {
                setTopics(response.data.topics);
            } else {
                setError("No topics found.");
            }
        } catch (error) {
            setError("Failed to load topics. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const addTopic = async () => {
        if (!newTopic.title || !newTopic.description || !newTopic.content) {
            setError("Please enter all required fields for the topic.");
            return;
        }
        setError('');
        try {
            await axios.post(`${apiUrl}/api/admin/add-topic`, newTopic);
            fetchTopics();
            setNewTopic({ title: '', description: '', content: '' });
        } catch (error) {
            setError("Error adding topic. Please try again.");
        }
    };

    const addContent = async () => {
        if (!contentData.topicId || !contentData.type || !contentData.content) {
            setError("Please select a topic, type, and provide content details.");
            return;
        }

        if (contentData.type === 'video' && (!contentData.url || !contentData.title)) {
            setError("Please provide a title and URL for the video content.");
            return;
        }

        setError('');
        try {
            await axios.post(`${apiUrl}/api/admin/add-content`, contentData);
            fetchTopics();
            setContentData({ topicId: '', type: '', title: '', url: '', content: '' });
        } catch (error) {
            setError("Error adding content. Please try again.");
        }
    };

    const deleteTopic = async (topicId) => {
        setError('');
        try {
            await axios.delete(`${apiUrl}/api/admin/delete-topic/${topicId}`);
            fetchTopics();
        } catch (error) {
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
                    <section className="admin-section">
                        <h2>Add New Topic</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={newTopic.title}
                            onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                        />
                        <textarea
                            placeholder="Description"
                            value={newTopic.description}
                            onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
                        ></textarea>
                        <textarea
                            placeholder="Content"
                            value={newTopic.content}
                            onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
                        ></textarea>
                        <button onClick={addTopic}>Add Topic</button>
                    </section>

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

                        {contentData.type === 'video' && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Video Title"
                                    value={contentData.title}
                                    onChange={(e) => setContentData({ ...contentData, title: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Video URL"
                                    value={contentData.url}
                                    onChange={(e) => setContentData({ ...contentData, url: e.target.value })}
                                />
                            </>
                        )}

                        <input
                            type="text"
                            placeholder="Content Details"
                            value={contentData.content}
                            onChange={(e) => setContentData({ ...contentData, content: e.target.value })}
                        />
                        <button onClick={addContent}>Add Content</button>
                    </section>

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
