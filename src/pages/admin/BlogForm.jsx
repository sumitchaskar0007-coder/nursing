import React, { useState } from 'react';
import { blogAPI } from '../../api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogForm = ({ blog, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    metaTitle: blog?.metaTitle || '',
    metaDescription: blog?.metaDescription || '',
    author: blog?.author || 'Admin',
    content: blog?.content || '',
    excerpt: blog?.excerpt || '',
    categories: blog?.categories?.join(', ') || '',
    tags: blog?.tags?.join(', ') || '',
    readingTime: blog?.readingTime || '',
  });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(blog?.featuredImage?.url || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload a valid image file (JPEG, PNG, GIF, WEBP)');
        return;
      }

      setFeaturedImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.title?.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!formData.content?.trim()) {
      errors.content = 'Content is required';
    } else if (formData.content.trim().length < 100) {
      errors.content = 'Content must be at least 100 characters';
    }
    
    if (!formData.excerpt?.trim()) {
      errors.excerpt = 'Excerpt is required';
    } else if (formData.excerpt.trim().length < 50) {
      errors.excerpt = 'Excerpt must be at least 50 characters';
    }
    
    if (!formData.author?.trim()) {
      errors.author = 'Author is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      
      // Append all text fields
      formDataToSend.append('title', formData.title);
      formDataToSend.append('metaTitle', formData.metaTitle || formData.title);
      formDataToSend.append('metaDescription', formData.metaDescription || formData.excerpt);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('excerpt', formData.excerpt);
      
      if (formData.categories) {
        formDataToSend.append('categories', formData.categories);
      }
      
      if (formData.tags) {
        formDataToSend.append('tags', formData.tags);
      }
      
      if (formData.readingTime) {
        formDataToSend.append('readingTime', formData.readingTime);
      }

      // Append image if selected
      if (featuredImage) {
        formDataToSend.append('featuredImage', featuredImage);
        console.log('Appending image:', featuredImage.name);
      }

      // Log FormData contents for debugging
      console.log('FormData entries:');
      for (let pair of formDataToSend.entries()) {
        console.log(pair[0], pair[1] instanceof File ? `File: ${pair[1].name}` : pair[1]);
      }

      let response;
      if (blog) {
        console.log('Updating blog with ID:', blog._id);
        response = await blogAPI.update(blog._id, formDataToSend);
      } else {
        console.log('Creating new blog');
        response = await blogAPI.create(formDataToSend);
      }

      console.log('Response:', response.data);
      
      if (response.data.success) {
        onSuccess();
      } else {
        setError(response.data.message || 'Failed to save blog');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      
      // Handle specific error messages
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 401) {
          setError('Authentication failed. Please log in again.');
          // Redirect to login after 2 seconds
          setTimeout(() => {
            localStorage.removeItem('token');
            window.location.href = '/admin/login';
          }, 2000);
        } else if (error.response.status === 403) {
          setError('You do not have permission to perform this action.');
        } else {
          setError(error.response.data.message || `Server error: ${error.response.status}`);
        }
        console.error('Server response:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from server. Please check if the backend is running.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image', 'blockquote', 'code-block'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'color', 'background',
    'link', 'image', 'blockquote', 'code-block'
  ];

  // Generate slug preview
  const slugPreview = formData.title
    ?.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim() || '';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {blog ? 'Edit Blog' : 'Create New Blog'}
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error: </strong> {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Blog Title *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className={`w-full px-3 py-2 border ${
            validationErrors.title ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder="Enter blog title"
        />
        {validationErrors.title && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.title}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">
          URL will be: /blog/{slugPreview || 'your-blog-title'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Title
          </label>
          <input
            type="text"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="SEO title (optional)"
            maxLength="60"
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.metaTitle?.length || 0}/60 characters
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Author *
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className={`w-full px-3 py-2 border ${
              validationErrors.author ? 'border-red-500' : 'border-gray-300'
            } rounded-md`}
          />
          {validationErrors.author && (
            <p className="text-red-500 text-xs mt-1">{validationErrors.author}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Meta Description
        </label>
        <textarea
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
          rows="2"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="SEO description (optional)"
          maxLength="160"
        />
        <p className="text-xs text-gray-500 mt-1">
          {formData.metaDescription?.length || 0}/160 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Excerpt *
        </label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows="3"
          className={`w-full px-3 py-2 border ${
            validationErrors.excerpt ? 'border-red-500' : 'border-gray-300'
          } rounded-md`}
          placeholder="Brief summary of the blog (minimum 50 characters)"
        />
        {validationErrors.excerpt && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.excerpt}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">
          {formData.excerpt?.length || 0} characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Featured Image
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            name="featuredImage"
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            onChange={handleImageChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
          {previewImage && (
            <div className="relative">
              <img 
                src={previewImage} 
                alt="Preview" 
                className="h-16 w-16 object-cover rounded"
              />
              <button
                type="button"
                onClick={() => {
                  setPreviewImage('');
                  setFeaturedImage(null);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
              >
                ×
              </button>
            </div>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Max file size: 5MB. Supported formats: JPEG, PNG, GIF, WEBP
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content *
        </label>
        <div className="h-96 mb-12">
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            className={`h-80 ${validationErrors.content ? 'border-red-500' : ''}`}
          />
        </div>
        {validationErrors.content && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.content}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">
          Word count: {formData.content?.split(/\s+/).filter(Boolean).length || 0} words
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-16">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categories (comma separated)
          </label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Education, Parenting, Schools"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="IB, CBSE, Comparison"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Reading Time (minutes)
        </label>
        <input
          type="number"
          name="readingTime"
          value={formData.readingTime}
          onChange={handleChange}
          min="1"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Auto-calculated if left empty"
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving...
            </>
          ) : (blog ? 'Update Blog' : 'Create Blog')}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;