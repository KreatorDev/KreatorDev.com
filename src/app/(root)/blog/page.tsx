import { blogPosts } from "@/data/blog-data";
import BlogList from "@/components/blog/BlogList";
import cardStyle from "@/shared/styles/card";
export default function Blog() {
  return (
    <div className="flex flex-col gap-6">
      <div className={cardStyle}>
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Welcome to my blog.
        </p>
      </div>
      <BlogList posts={blogPosts} />
    </div>
  );
}
