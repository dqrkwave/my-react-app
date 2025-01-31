import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/forumPage.css';

const ForumPage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [posting, setPosting] = useState(false);
    const navigate = useNavigate();

    const API_URL = process.env.REACT_APP_API_URL || 'https://my-react-app-drab-zeta.vercel.app/api';
    
    console.log("API URL:", API_URL);

    // Fetch posts from the API
    const fetchPosts = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`${API_URL}/forum_posts/`);
            console.log("Fetched posts:", response.data);
            if (Array.isArray(response.data)) {
                setPosts(response.data);
            } else {
                throw new Error('Invalid data format from API');
            }
        } catch (err) {
            console.error('Error fetching posts:', err);
            setError('Failed to load forum posts. Please try again later.');
            // Set mock data for UI testing if API fails
            setPosts([{ id: 1, content: "Test Post", created_at: new Date().toISOString() }]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // Handle new post submission
    const handlePostSubmit = async () => {
        if (!newPost.trim()) {
            setError('Post content cannot be empty.');
            return;
        }

        setPosting(true);
        setError('');
        try {
            const response = await axios.post(
                `${API_URL}/forum_posts/`,
                { content: newPost },
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log("Post submitted:", response.data);
            setPosts((prevPosts) => [response.data, ...prevPosts]); // Add new post to top
            setNewPost('');
        } catch (err) {
            console.error('Error submitting post:', err);
            setError('Failed to submit your post. Please try again.');
        } finally {
            setPosting(false);
        }
    };

    return (
        <div className="forum-page">
            <h2>Community Forum</h2>

            {/* Navigation Button */}
            <button onClick={() => navigate('/')} className="back-button">
                Go to Home
            </button>

            {/* Post Input Section */}
            <div className="forum-input-container">
                <textarea
                    className="forum-textarea"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Write your thoughts here..."
                    maxLength={500}
                />
                <button 
                    className="forum-submit-button"
                    onClick={handlePostSubmit}
                    disabled={posting}
                >
                    {posting ? 'Posting...' : 'Post'}
                </button>
            </div>

            {error && <p className="forum-error">{error}</p>}

            {/* Forum Posts Section */}
            {loading ? (
                <p>Loading posts...</p>
            ) : (
                <>
                    {posts.length > 0 ? (
                        <ul className="forum-posts">
                            {posts.map((post) => (
                                <li key={post.id} className="forum-post">
                                    <div className="forum-post-content">{post.content}</div>
                                    <div className="forum-post-meta">
                                        <span>Posted on {new Date(post.created_at).toLocaleString()}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No posts yet. Be the first to share your thoughts!</p>
                    )}
                </>
            )}
        </div>
    );
};

export default ForumPage;
