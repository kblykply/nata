'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Blog Yazıları</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden group"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-[200px]">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{post.title}</h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-sm text-[#3A78D4] font-medium hover:underline"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
