import { BlogPostType } from '@/components/blog/BlogPost';

export const blogPosts: BlogPostType[] = [
  {
    title: "My 2025 Year in Review",
    date: "January 15, 2026",
    author: "Ayoub Kremcht",
    coverImage: "/blog/year_in_review/2025_year_in_review.png",
    content: "This is my 2025 Year in Review",
    writing: `
<p>Hi! My name is Ayoub, and this is my 2025 year in review. I traveled to <a href="https://en.wikipedia.org/wiki/Australia" target="_blank" rel="noopener noreferrer">Australia</a>.</p>
`,
    images: [
      {
        src: "/blog/year_in_review/working.png",
        alt: "Working on a project",
        caption: "A snapshot from a focused work session."
      },
      {
        src: "/blog/year_in_review/traveling.png",
        alt: "Travel memories",
        caption: "A highlight from a trip in 2025."
      }
    ]
  }
];
