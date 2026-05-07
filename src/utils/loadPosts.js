const mdModules = import.meta.glob("../../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlStr = match[1];
  const content = match[2];
  const data = {};

  yamlStr.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (!m) return;
    const key = m[1];
    let value = m[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim());
    }
    data[key] = value;
  });

  return { data, content };
}

export function loadAllPosts() {
  const posts = [];

  for (const [path, raw] of Object.entries(mdModules)) {
    try {
      const { data, content } = parseFrontmatter(raw);
      const slug = path.replace(/^.*[\\/]/, "").replace(".md", "");

      const excerpt = content
        .replace(/^#{1,6}\s.*/gm, "")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/!\[.*?\]\(.*?\)/g, "")
        .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
        .replace(/[*_~>`]/g, "")
        .trim()
        .slice(0, 150);

      posts.push({
        slug,
        title: data.title || slug,
        date: data.date ? new Date(data.date) : null,
        tags: data.tags || [],
        excerpt: excerpt || content.slice(0, 150),
        content,
      });
    } catch (err) {
      console.error(`Failed to load post: ${path}`, err);
    }
  }

  posts.sort((a, b) => (b.date || 0) - (a.date || 0));
  return posts;
}

export function loadPost(slug) {
  const posts = loadAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}
