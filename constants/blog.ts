export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  overview: string;
  content: string;
  category: string[];
  date: string;
  author: string;
}

export type BlogCategory = {
  slug: string;
  name: string;
  parent?: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "tech",
    name: "Technology"
  },
  {
    slug: "design",
    name: "Design"
  },
  {
    slug: "life",
    name: "Life"
  },
  {
    slug: "reactjs",
    name: "React.js",
    parent: "tech"
  },
  {
    slug: "nextjs",
    name: "Next.js",
    parent: "tech"
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    overview: "Learn the basics of Next.js and build your first app.",
    content: "Next.js is a framework that make it easy to build full-stack application. It provides file-based routing, server components, and more.",
    category: ["tech", "nextjs"],
    date: "February 7, 2026",
    author: "Joselito Panimdim"
  },
  {
    id: "2",
    slug: "react-hooks-deep-dive",
    title: "React Hooks Deep Dive",
    overview: "Understanding the useState, useEffect, and custom hooks.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: ["tech", "reactjs"],
    date: "February 7, 2026",
    author: "Jutin Macan"
  },
  {
    id: "3",
    slug: "minimal-design-principles",
    title: "Minimal Design Principles",
    overview: "Introduction to Minimal Design Principles",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: ["tech", "design"],
    date: "February 7, 2026",
    author: "Klexa Gaviola"
  },
  {
    id: "4",
    slug: "work-life-balance",
    title: "Work Life Balance",
    overview: "Tips for staying healthy while being a developer.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: ["life"],
    date: "February 7, 2026",
    author: "Jaymar Yecyec"
  }
]