'use client';

import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Son durum Haberler</h2>
        <Link
          href="/blog"
          className="border border-gray-300 text-sm px-5 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Her şeyi görün
        </Link>
      </div>

      {/* Blog List */}
      <div className="space-y-10">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block"
          >
            <div className="relative group flex flex-col md:flex-row justify-between items-center gap-6 bg-gray-50 p-6 rounded-xl transition hover:shadow-md">
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
                  {new Date(post.created_at).toLocaleDateString("tr-TR", {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Right Side: Excerpt */}
              <div className="md:w-1/3 flex justify-between items-start gap-4 z-20">
                <p className="text-sm text-gray-700 max-w-[90%]">{post.excerpt}</p>
                <div className="border border-gray-300 text-xl rounded-full w-8 h-8 flex items-center justify-center bg-white">
                  +
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
