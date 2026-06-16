import React from 'react';
import { BlogPostType } from './BlogPost';
import cardStyle from '@/shared/styles/card';
import BlogItem from './BlogItem';

export default function BlogList({ posts }: { posts: BlogPostType[] }) {
  if (posts.length === 0) {
    return (
      <div className={`${cardStyle} items-center text-center py-14`}>
        <label className="text-lg font-light text-neutral-500 mx-10">
          No blog posts yet! Check back soon.
        </label>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {posts.map((post) => (
        <BlogItem key={post.title} post={post} />
      ))}
    </div>
  );
}
