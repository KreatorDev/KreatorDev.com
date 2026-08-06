import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPostType } from './BlogPost';
import cardStyle from '@/shared/styles/card';
import { createSlug } from '@/utils/slug-utils';

type BlogItemProps = {
  post: BlogPostType;
};

export default function BlogItem({ post }: BlogItemProps) {
  const slug = createSlug(post.title);
  
  return (
    <Link href={`/blog/${slug}`}>
      <div className={`${cardStyle} hover:shadow-md transition-shadow cursor-pointer`}>
        <div className="flex flex-col sm:flex-row w-full gap-5">
          {/* Post image */}
          {post.coverImage && (
            <div className="w-full sm:w-1/4 relative h-48">
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}
          
          {/* Post content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            
            <div className="flex items-center text-neutral-500 text-sm mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-300 line-clamp-3 mb-4">
              {post.content}
            </p>
            
            <div className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Read more →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
