import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div style={{ borderBottom: "1px solid #eee", padding: "15px 0" }}>
      <Link to={`/blog/${blog.slug}`}>
        <h2>{blog.title}</h2>
      </Link>
      <p>{blog.excerpt}</p>
    </div>
  );
};

export default BlogCard;