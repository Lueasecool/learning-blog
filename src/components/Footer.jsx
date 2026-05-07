import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} 学习心得博客 — 记录成长，分享知识</p>
      </div>
    </footer>
  );
}
