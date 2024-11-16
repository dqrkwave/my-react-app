import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/forumPage.css';

function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/forum_posts/')
            .then(response => setPosts(response.data))
            .catch(error => console.error("Error fetching forum posts", error));
    }, []);

    const handlePostSubmit = () => {
        axios.post('http://localhost:8000/api/forum_posts/', { content: newPost })
            .then(response => {
                setPosts([...posts, response.data]);
                setNewPost('');
            })
            .catch(error => console.error("Error posting forum content", error));
    };

    return (
        <div className="forum-page">
            <h2>Forum</h2>
            <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Write your thoughts here..."
            />
            <button onClick={handlePostSubmit}>Post</button>

            <h3>Forum Posts:</h3>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default ForumPage;
