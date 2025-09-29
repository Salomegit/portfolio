import React from 'react';
import Image from 'next/image';
import { HashnodePost } from '../../../interfaces/hashnode';

interface BlogCardProps {
  post: HashnodePost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* {post.coverImage?.url && (
        <div className="relative h-48 overflow-hidden">
          <Image 
            // src={post.coverImage.url} 
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )} */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {/* <a 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </a> */}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.brief}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readTimeInMinutes} min read</span>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <span 
                key={tag.slug}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* <a 
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Read More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a> */}
      </div>
    </article>
  );
};
export default BlogCard;