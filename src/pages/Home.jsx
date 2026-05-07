import { useState, useEffect } from "react";
import { loadAllPosts } from "../utils/loadPosts";
import PostCard from "../components/PostCard";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts(loadAllPosts());
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="home-empty">加载中...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="home-empty">
        <p>暂无文章</p>
        <p className="home-empty-hint">
          在 posts/ 目录下创建 .md 文件开始写作
        </p>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home-header">
        <h1>学习心得</h1>
        <p className="home-subtitle">记录学习过程中的思考与收获</p>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
