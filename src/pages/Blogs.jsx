import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogAPI } from '../api';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogAPI.getAll();
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="blogs-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blogs-error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="blogs-page">
      <header className="blogs-header">
        <h1>Stories & Insights</h1>
        <p>Expert advice for parents navigating their child's education journey</p>
      </header>

      <div className="blogs-grid">
        {blogs.map(blog => (
          <Link to={`/blog/${blog.slug}`} key={blog._id} className="blog-card">
            {blog.featuredImage && (
              <div className="blog-card-image">
                <img src={blog.featuredImage.url} alt={blog.title} />
              </div>
            )}
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="blog-card-category">{blog.categories?.[0] || 'Education'}</span>
                <span className="blog-card-date">
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-card-excerpt">{blog.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-card-author">By {blog.author}</span>
                <span className="blog-card-reading-time">{blog.readingTime} min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;