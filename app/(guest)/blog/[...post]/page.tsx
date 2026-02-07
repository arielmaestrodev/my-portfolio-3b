import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/constants/blog";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ post: string }> }) {
  const { post } = await params;
  const segment = post[0];
  
  const blogPost = BLOG_POSTS.find((post) => post.slug === segment);

  if (!blogPost || blogPost === null) {
    notFound();
  }

  console.log(blogPost);
  
  return (
    <article className="py-8">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4 hover:underline">
        <ArrowLeft className="w-4" />
        Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2">{blogPost.title}</h1>
      <p className="text-muted-foreground text-sm mb-6">{blogPost.date} • {blogPost.author} • {blogPost.category.join(" - ").toLocaleUpperCase()}</p>
      <p className="text-gray-700 dark:text-gray-200">{blogPost.content}</p>
    </article>
  )
}