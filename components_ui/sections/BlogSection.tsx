// components/BlogSection.tsx
'use client';

import React from 'react';
import { HashnodePost } from '@/interfaces/hashnode';
import BlogCard from './BlogCard';
import Link from 'next/link';

interface BlogSectionProps {
  title?: string;
}

// Static blog posts data
const BLOG_POSTS: HashnodePost[] = [
  {
    id: '1',
    title: 'How to Structure Your Next.js App: A Complete Guide',
    brief: 'Building scalable and maintainable Next.js applications requires thoughtful project organization from the very beginning.',
    publishedAt: 'Sep 21, 2025',
    readTimeInMinutes: 5,
    url: 'https://githinjisal-dev.hashnode.dev/how-to-structure-your-nextjs-app-a-complete-guide',
    coverImage: {
      url: '/images/nextjs-structure.png'
    },
    tags: [
      { name: 'Next.js', slug: 'nextjs' },
      { name: 'React', slug: 'react' },
      { name: 'Web Development', slug: 'web-dev' }
    ]
  },
  {
    id: '2',
    title: 'Master TypeScript Fundamentals: Interfaces, Functions, and Classes Explained',
    brief: 'TypeScript might seem intimidating at first, but it\'s essentially JavaScript with superpowers.',
    publishedAt: 'Sep 18, 2025',
    readTimeInMinutes: 8,
    url: 'https://githinjisal-dev.hashnode.dev/master-typescript-fundamentals-interfaces-functions-and-classes-explained',
    coverImage: {
      url: '/images/typescript.png'
    },
    tags: [
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'Programming', slug: 'programming' },
      { name: 'Classes and Objects', slug: 'class-obj' }
    ]
  },
  {
    id: '3',
    title: 'Taming the Style Sheet Beast: Your Guide to SASS/SCSS',
    brief: 'Think of them as CSS with a PhD. SASS (Syntactically Awesome Style Sheets) and its more popular sibling SCSS (Sassy CSS) are called preprocessors.',
    publishedAt: 'Sep 9, 2025',
    readTimeInMinutes: 3,
    url: 'https://githinjisal-dev.hashnode.dev/taming-the-style-sheet-beast-your-guide-to-sassscss',
    coverImage: {
      url: '/images/sass.png'
    },
    tags: [
      { name: 'CSS', slug: 'css' },
      { name: 'SASS', slug: 'sass' },
      { name: 'Stylesheet', slug: 'style' }
    ]
  },
  {
    id: '4',
    title: 'AWS Architecture: Best Practices for Scaling and Load Balancing',
    brief: 'In today’s cloud-driven world, ensuring your applications are highly available, scalable, and fault-tolerant is crucial.',
    publishedAt: 'Jul 21, 2025',
    readTimeInMinutes: 5,
    url: 'https://githinjisal-dev.hashnode.dev/aws-architecture-best-practices-for-scaling-and-load-balancing',
    coverImage: {
      url: '/images/cloud.jpg'
    },
    tags: [
      { name: 'Cloud', slug: 'cloud' },
      { name: 'AWS', slug: 'aws' },
      { name: 'VPC', slug: 'vpc' },
      { name: 'Load Balancing', slug: 'load-balance' }
    ]
  },
  {
    id: '5',
    title: 'Build Your First Secure AWS VPC: Public/Private Subnets, NAT Gateways & Web Servers!',
    brief: 'As a cloud enthusiast and gaining more knowledge on the cloud, I recently built a production-ready VPC with public and private subnets, NAT gateways, and a secure web server.',
    publishedAt: 'Jul 9, 2025',
    readTimeInMinutes: 7,
    url: 'https://githinjisal-dev.hashnode.dev/build-your-first-secure-aws-vpc-public-private-subnets-nat-gateways-and-web-servers',
    coverImage: {
      url: '/images/vpc.png'
    },
    tags: [
      { name: 'VPC', slug: 'vpc' },
      { name: 'Networking', slug: 'Networking' },
      { name: 'Cloud', slug: 'Cloud' }
    ]
  },
  {
    id: '6',
    title: 'EC2 on Watch: Real-Time CPU Alerts with CloudWatch + SNS in 4 Simple Steps',
    brief: 'Imagine your EC2 instance suddenly hits more than 80% CPU usage. Is it a hacker? A bug? Without monitoring, you’d never know.',
    publishedAt: '2023-12-15',
    readTimeInMinutes: 9,
    url: 'https://githinjisal-dev.hashnode.dev/ec2-on-watch-real-time-cpu-alerts-with-cloudwatch-sns-in-4-simple-steps',
    coverImage: {
      url: '/images/cloud.jpg'
    },
    tags: [
      { name: 'EC2', slug: 'ec2' },
      { name: 'CLoudWatch', slug: 'cloudwatch' },
      { name: 'SNS', slug: 'sns' }
    ]
  }
];

const BlogSection: React.FC<BlogSectionProps> = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#5B2333] to-[#5B2333]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#F7F4F3] mb-4">
              Latest <span className="text-[#F24333]">Blogs</span>
            </h2>
            <p className="text-xl text-[#B0B0B0] max-w-2xl">
              Explore my latest thoughts on web development, programming, and technology trends.
            </p>
          </div>
           <Link
      href="https://githinjisal-dev.hashnode.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center space-x-3 bg-[#2A2A2A] hover:bg-[#F24333] text-[#F7F4F3] px-6 py-3 rounded-xl border border-[#3A3A3A] hover:border-[#F24333] transition-all duration-300 transform hover:-translate-y-1"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
      <span className="font-semibold">View All on Hashnode</span>
      <svg
        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div 
              key={post.id} 
              className="transform hover:-translate-y-2 transition-transform duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;