import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogAPI } from "../api";
import ProgressBar from "../components/blog/ProgressBar";
import CTASection from "../components/blog/CTASection";

const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    blogAPI.getBySlug(slug).then((res) => setBlog(res.data));
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ background: "#fff" }}>
      
      <ProgressBar />

      <div
        style={{
          maxWidth: "750px",
          margin: "auto",
          padding: "20px",
        }}
      >
        {/* TITLE */}
        <h1 style={{ fontSize: "42px", fontFamily: "Georgia" }}>
          {blog.title}
        </h1>

        {/* META */}
        <p style={{ color: "#777" }}>
          {blog.author} •{" "}
          {new Date(blog.createdAt).toDateString()} • {blog.readTime}
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

        <CTASection />
      </div>
    </div>
  );
};

export default Blog;