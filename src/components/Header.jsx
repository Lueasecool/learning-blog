import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          学习心得
        </Link>
        <nav className="header-nav">
          <Link to="/" className="header-link">
            首页
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
