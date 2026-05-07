---
title: 欢迎来到我的学习博客
date: 2026-05-07
tags: [随笔, React, Vite]
---

## 关于这个博客

这是一篇示例文章，欢迎开始你的学习记录之旅！这个博客使用以下技术搭建：

- **Vite** — 极速的构建工具
- **React** — 组件化的前端框架
- **Markdown** — 简洁的写作格式

## 代码高亮

博客支持多种编程语言的代码高亮，非常适合用来记录编程学习心得：

```python
def fibonacci(n):
    """计算斐波那契数列"""
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return b

print(fibonacci(10))  # 输出: 55
```

```javascript
// 快速排序实现
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter((x) => x <= pivot);
  const right = arr.slice(1).filter((x) => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

## 数学公式？

> 当前版本暂不支持数学公式渲染，后续可以考虑加入 KaTeX 支持。

## 开始写作

你可以直接在 `posts/` 目录下创建新的 `.md` 文件来发布文章：

1. 文件开头使用 frontmatter 设置文章元数据
2. 正文使用标准 Markdown 语法
3. 保存后刷新页面即可看到新文章
