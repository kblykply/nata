'use client';

import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <article className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
      {/* Feature Image */}
      <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-md">{post.title}</h1>
          <p className="text-sm text-gray-200 mt-1">
            {new Date(post.date).toLocaleDateString('tr-TR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed [&_h2]:mt-10 [&_ul]:pl-6 [&_ul]:list-disc [&_li]:mt-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
