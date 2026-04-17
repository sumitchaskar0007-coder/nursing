import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogAPI } from "../../api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: "",
    author: "",
    readTime: "",
    excerpt: "",
    content: "",
    image: null,
  });

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const res = await blogAPI.getAll();
      // Handle both array response and object with blogs property
      setBlogs(Array.isArray(res.data) ? res.data : res.data.blogs || []);
    } catch (error) {
      console.error("Error loading blogs:", error);
      alert("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 AUTO SLUG GENERATOR
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 HANDLE IMAGE
  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  // 🔥 SUBMIT
  const handleSubmit = async () => {
    if (!form.title || !form.content) {
      alert("Please fill in title and content");
      return;
    }

    setSubmitting(true);
    
    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("author", form.author || "Admin");
      formData.append("readTime", form.readTime || "5 min read");
      formData.append("excerpt", form.excerpt);
      formData.append("content", form.content);
      formData.append("slug", generateSlug(form.title));

      if (form.image) {
        formData.append("image", form.image);
      }

      const response = await blogAPI.create(formData);
      
      if (response.data.success) {
        alert("✅ Blog Created Successfully");
        
        // Reset form
        setForm({
          title: "",
          author: "",
          readTime: "",
          excerpt: "",
          content: "",
          image: null,
        });
        
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
        
        // Reload blogs
        await loadBlogs();
      } else {
        alert("Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert(error.response?.data?.message || "Failed to create blog");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    
    try {
      await blogAPI.delete(id);
      alert("Blog deleted successfully");
      await loadBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "80px auto 40px auto" }}>
      
      {/* Back to Dashboard Button */}
      <div style={{ marginBottom: "20px" }}>
        <Link 
          to="/admin" 
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            backgroundColor: "#6c757d",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500",
            transition: "background-color 0.3s"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#5a6268"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#6c757d"}
        >
          ← Back to Dashboard
        </Link>
      </div>

      <h2 style={{ marginBottom: "20px" }}>📝 Blog Admin Panel</h2>

      {/* TITLE */}
      <input
        name="title"
        placeholder="Enter Blog Title *"
        value={form.title}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      {/* AUTHOR */}
      <input
        name="author"
        placeholder="Author Name (default: Admin)"
        value={form.author}
        onChange={handleChange}
        style={inputStyle}
      />

      {/* READ TIME */}
      <input
        name="readTime"
        placeholder="Read Time (default: 5 min read)"
        value={form.readTime}
        onChange={handleChange}
        style={inputStyle}
      />

      {/* EXCERPT */}
      <textarea
        name="excerpt"
        placeholder="Short SEO Description (Meta Description)"
        value={form.excerpt}
        onChange={handleChange}
        style={{ ...inputStyle, height: "80px" }}
      />

      {/* IMAGE */}
      <input 
        type="file" 
        onChange={handleImage} 
        style={{ marginBottom: "15px" }}
        accept="image/*"
      />

      {/* EDITOR */}
      <ReactQuill
        value={form.content}
        onChange={(value) => setForm({ ...form, content: value })}
        modules={modules}
        formats={formats}
        style={{ marginBottom: "20px", height: "300px" }}
        placeholder="Write your blog content here..."
      />

      {/* SUBMIT */}
      <button 
        onClick={handleSubmit} 
        style={buttonStyle}
        disabled={submitting}
      >
        {submitting ? "Publishing..." : "🚀 Publish Blog"}
      </button>

      <hr style={{ margin: "40px 0" }} />

      {/* BLOG LIST */}
      <h3>📚 Existing Blogs ({blogs.length})</h3>

      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs found. Create your first blog above!</p>
      ) : (
        blogs.map((b) => (
          <div key={b._id} style={cardStyle}>
            <h4>{b.title}</h4>
            <p style={{ color: "#666", fontSize: "14px" }}>
              {b.author} • {new Date(b.createdAt).toLocaleDateString()} • {b.readTime}
            </p>
            {b.excerpt && <p style={{ color: "#888" }}>{b.excerpt.substring(0, 150)}...</p>}
            {b.coverImage && (
              <img 
                src={b.coverImage} 
                alt={b.title} 
                style={{ maxWidth: "100px", maxHeight: "60px", objectFit: "cover", marginTop: "10px" }}
              />
            )}
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => handleDelete(b._id)} style={deleteBtn}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

// 🎨 STYLES
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "12px 20px",
  background: "#00adb5",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "70px",
};

const deleteBtn = {
  background: "red",
  color: "#fff",
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const cardStyle = {
  border: "1px solid #eee",
  padding: "15px",
  marginTop: "10px",
  borderRadius: "6px",
  backgroundColor: "#fafafa",
};

// 🔥 REACT QUILL TOOLBAR
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "blockquote",
  "code-block",
  "link",
  "image",
];

export default BlogAdmin;