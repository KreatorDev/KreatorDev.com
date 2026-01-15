import React from 'react';
import Image from 'next/image';
import cardStyle from '@/shared/styles/card';

export type BlogPostType = {
  title: string;
  date: string;
  author: string;
  coverImage: string;
  content: string;
  writing: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <article className={`${cardStyle} mb-12`}>
      {/* Header */}
      <header className="w-full mb-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-neutral-500 flex items-center gap-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="w-full mb-6 relative h-64 md:h-96">
          <Image
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      )}

      {/* Writing Body (Rich HTML with links) */}
      <section
        className="prose prose-lg dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-400 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.writing }}
      />

      {/* Image Gallery */}
      {Array.isArray(post.images) && post.images.length > 0 && (
        <section className="mt-10 w-full">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.images.map((img, idx) => (
              <figure key={idx} className="relative">
                <div className="relative h-64 w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                {img.caption && (
                  <figcaption className="text-sm text-neutral-500 mt-2">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
