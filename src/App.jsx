import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main className="container" style={{ flex: 1, paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
