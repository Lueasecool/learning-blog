import { Link } from "react-router-dom";
import "./PostCard.css";

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link to={`/post/${post.slug}`} className="post-card-link">
        <h2 className="post-card-title">{post.title}</h2>
      </Link>
      <div className="post-card-meta">
        {post.date && (
          <time className="post-card-date" dateTime={post.date.toISOString()}>
            {formatDate(post.date)}
          </time>
        )}
        {post.tags.length > 0 && (
          <div className="post-card-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="post-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {post.excerpt && <p className="post-card-excerpt">{post.excerpt}...</p>}
    </article>
  );
}
