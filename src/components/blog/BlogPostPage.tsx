'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/data/blog-data';
import BlogPost from './BlogPost';
import { createSlug } from '@/utils/slug-utils';
import NotFound from '../other/404';
import Link from 'next/link';
import ChevronLeftIcon from '@/assets/icons/chevron-left';

export default function BlogPostPage() {
  const params = useParams(); // pulls slug from URL
  const slug =
    typeof params?.slug === 'string'
      ? params.slug
      : Array.isArray(params?.slug)
        ? params.slug[0]
        : null;

  if (!slug) {
    return null;
  }

  const post = blogPosts.find((p) => createSlug(p.title) === slug);

  if (!post) {
    return <NotFound err="Blog post not found" />;
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <Link href="/blog" className="flex items-center text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300">
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="ml-1">Back to all posts</span>
        </Link>
      </div>
      <BlogPost post={post} />
    </div>
  );
}
