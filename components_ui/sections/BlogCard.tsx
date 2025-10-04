// components/BlogCard.tsx
import React from 'react';
import Image from 'next/image';
import { HashnodePost } from '@/interfaces/hashnode';

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

    const coverImageUrl = post.coverImage?.url || '/images/cloud.jpg';


  return (
    <article className="bg-[#564D4A] rounded-2xl border border-[#564D4A] overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:border-[#F24333]/30">
      
        <div className="relative h-52 overflow-hidden">
          <Image 
            src={coverImageUrl} 
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      
      
      <div className="p-7">
        <div className="flex items-center gap-4 text-sm text-[#888888] mb-4">
          <span className="bg-[#F24333]/10 text-[#F24333] px-3 py-1 rounded-full text-xs font-medium">
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTimeInMinutes} min
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#F7F4F3] mb-3 leading-tight group-hover:text-[#F24333] transition-colors duration-300">
          <a 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:no-underline"
          >
            {post.title}
          </a>
        </h3>
        
        <p className="text-[#B0B0B0] mb-6 leading-relaxed line-clamp-3">
          {post.brief}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.slice(0, 3).map(tag => (
              <span 
                key={tag.slug}
                className="px-3 py-1.5 bg-[#2A2A2A] text-[#CCCCCC] text-xs rounded-lg border border-[#3A3A3A] hover:bg-[#F24333]/10 hover:text-[#F24333] hover:border-[#F24333]/30 transition-all duration-300 cursor-default"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <a 
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#F24333] to-[#FF6B4A] text-white px-6 py-3 rounded-xl hover:from-[#FF6B4A] hover:to-[#F24333] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold group/btn"
        >
          Read More
          <svg className="ml-3 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default BlogCard;