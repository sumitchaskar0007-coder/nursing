import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogAPI } from "../api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const res = await blogAPI.getAll();
      setBlogs(Array.isArray(res.data) ? res.data : res.data.blogs || []);
      setError(null);
    } catch (err) {
      console.error("Error loading blogs:", err);
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px", marginTop: "100px" }}>
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red", marginTop: "100px" }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "80px auto 40px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "40px", textAlign: "center" }}>
        Our Blog
      </h1>

      {blogs.length === 0 ? (
        <p style={{ textAlign: "center" }}>No blogs found. Check back later!</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "30px"
        }}>
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              to={`/blog/${blog.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                backgroundColor: "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
                {blog.coverImage && (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover"
                    }}
                  />
                )}
                <div style={{ padding: "20px" }}>
                  <h2 style={{
                    fontSize: "24px",
                    marginBottom: "10px",
                    color: "#333"
                  }}>
                    {blog.title}
                  </h2>
                  <p style={{
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "10px"
                  }}>
                    {blog.author} • {new Date(blog.createdAt).toLocaleDateString()} • {blog.readTime}
                  </p>
                  {blog.excerpt && (
                    <p style={{
                      color: "#777",
                      lineHeight: "1.6",
                      marginBottom: "15px"
                    }}>
                      {blog.excerpt}
                    </p>
                  )}
                  <span style={{
                    color: "#00adb5",
                    fontWeight: "bold"
                  }}>
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;