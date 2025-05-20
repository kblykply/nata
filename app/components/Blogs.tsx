'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  created_at: string;
}

interface BlogsProps {
  posts: BlogPost[];
}

export default function Blogs({ posts }: BlogsProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    }, 600); // Simulate loading delay
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Son Durum Haberler
        </h2>
        <Link
          href="/blog"
          className="border border-gray-300 text-sm px-5 py-2 rounded-full hover:bg-gray-100 transition whitespace-nowrap"
        >
          Her Şeyi Görün
        </Link>
      </div>

      {/* Blog List */}
      <div className="space-y-10">
        {visiblePosts.map((post, index) => {
          const isNew = index >= visibleCount - 3;
          return (
            <div
              key={post.id}
              className={`${
                isNew && !loading ? 'animate-fade-in' : ''
              } transition-opacity duration-500`}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative group flex flex-col md:flex-row justify-between items-start gap-6 bg-gray-50 p-6 rounded-xl transition hover:shadow-md">
                  {/* Hover Image */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                    <div className="w-[180px] h-[120px] rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={180}
                        height={120}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Left Side: Title + Date */}
                  <div className="md:w-1/3 z-20">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    <span className="inline-block mt-2 text-xs px-4 py-1 bg-white rounded-full text-gray-700">
                      {new Date(post.created_at).toLocaleDateString('tr-TR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Right Side: Excerpt */}
                  <div className="md:w-1/3 flex justify-between items-start gap-4 z-20">
                    <p className="text-sm text-gray-700">{post.excerpt}</p>
                    <div className="border border-gray-300 text-xl rounded-full w-8 h-8 flex items-center justify-center bg-white">
                      +
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-10">
          {loading ? (
            <div className="inline-block w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
          ) : (
            <button
              onClick={handleLoadMore}
              className="bg-[#aa1e3a] text-white text-sm font-medium px-6 py-3 rounded-full shadow hover:opacity-90 transition"
            >
              +3 daha gör
            </button>
          )}
        </div>
      )}
    </section>
  );
}
