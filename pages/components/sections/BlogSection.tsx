// components/BlogSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { fetchHashnodePosts } from '@/lib/api/hashnode';
import { HashnodePost } from '@/interfaces/hashnode';
import BlogCard from './BlogCard';

interface BlogSectionProps {
  hostname: string;
  limit?: number;
  title?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ 
  hostname, 
  limit = 6,
  title = "Latest Blog Posts" 
}) => {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedPosts = await fetchHashnodePosts(hostname, limit);
        setPosts(fetchedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [hostname, limit]);

  if (loading) {
    return (
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="text-center text-red-500 bg-red-50 p-4 rounded-lg">
          <p>Error loading blog posts: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      {posts.length === 0 ? (
        <div className="text-center text-gray-500">
          No blog posts found.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogSection;