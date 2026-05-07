import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { loadPost } from "../utils/loadPosts";
import "./Post.css";

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPost(loadPost(slug));
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="post-loading">加载中...</div>;
  }

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>文章未找到</h2>
        <p>你访问的文章不存在或已被移除。</p>
        <Link to="/" className="post-back-link">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <article className="post">
      <header className="post-header">
        <Link to="/" className="post-back-link">
          ← 返回首页
        </Link>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          {post.date && (
            <time className="post-date" dateTime={post.date.toISOString()}>
              {formatDate(post.date)}
            </time>
          )}
          {post.tags.length > 0 && (
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="post-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>
      <div className="post-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const codeStr = String(children).replace(/\n$/, "");
              const inline =
                !match && !codeStr.includes("\n");
              if (inline) {
                return (
                  <code className="inline-code" {...props}>
                    {children}
                  </code>
                );
              }
              return (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match ? match[1] : "text"}
                  PreTag="div"
                >
                  {codeStr}
                </SyntaxHighlighter>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
