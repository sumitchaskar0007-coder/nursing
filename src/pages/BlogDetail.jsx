import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogAPI } from "../api";
import ProgressBar from "../components/blog/ProgressBar";
import CTASection from "../components/blog/CTASection";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true);
        const res = await blogAPI.getBySlug(slug);
        setBlog(res.data);
        setError(null);
      } catch (err) {
        console.error("Error loading blog:", err);
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      loadBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px", marginTop: "100px" }}>
        <p>Loading blog...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div style={{ textAlign: "center", padding: "50px", marginTop: "100px" }}>
        <h2>{error || "Blog not found"}</h2>
        <Link to="/blog" style={{ color: "#00adb5", textDecoration: "none" }}>
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff" }}>
      <ProgressBar />

      <div
        style={{
          maxWidth: "750px",
          margin: "80px auto 40px auto",
          padding: "20px",
        }}
      >
        {/* Back Button */}
        <Link 
          to="/blog" 
          style={{ 
            display: "inline-block", 
            marginBottom: "20px",
            color: "#00adb5",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          ← Back to All Blogs
        </Link>

        {/* TITLE */}
        <h1 style={{ fontSize: "42px", fontFamily: "Georgia", marginBottom: "15px" }}>
          {blog.title}
        </h1>

        {/* META */}
        <p style={{ color: "#777", marginBottom: "20px" }}>
          {blog.author} •{" "}
          {new Date(blog.createdAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })} • {blog.readTime}
        </p>

        {/* IMAGE */}
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            style={{
              width: "100%",
              borderRadius: "8px",
              margin: "20px 0",
            }}
          />
        )}

        {/* CONTENT */}
        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#222",
          }}
        />

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #eee" }}>
            <h3 style={{ marginBottom: "10px" }}>Tags:</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    color: "#666"
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <CTASection />
      </div>
    </div>
  );
};

export default BlogDetail;