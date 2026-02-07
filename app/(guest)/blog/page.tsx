import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/constants/blog";

export default function BlogPage() {

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {/* Filter Category */}
      <div className="mt-6 mb-4 flex gap-2">
        <Link href="/blog">
          <Button variant="outline">All Posts</Button>
        </Link>

        {BLOG_CATEGORIES.map((category) => (
          <Link key={category.slug} href={`/blog/category/${category.slug}`}>
            <Button variant="outline">{category.name}</Button>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
          <Link key={post.id} href={`./blog/${post.slug}`}>
            <div className="border rounded-lg p-4 hover:bg-muted/50">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-muted-foreground text-base mt-1">{post.overview}</p>
              <p className="text-sm text-muted-foreground text-base mt-2">{post.date} • {post.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}