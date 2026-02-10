import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { getBlogPosts } from "@/data/blogPosts";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  content: string;
  created_at: string;
}

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug, locale } = await params;

  let post: { title: string; excerpt: string } | undefined;

  if (locale === "en") {
    const data = getBlogPosts("en");
    const found = data.find((p) => p.slug === slug);
    if (found) {
      post = { title: found.title, excerpt: found.excerpt };
    }
  } else {
    const res = await fetch("https://www.salihkaankoc.net/nata-core/blog");
    const json = await res.json();
    const found = json.data.find((p: BlogPost) => p.slug === slug);
    if (found) {
      post = { title: found.title, excerpt: found.excerpt };
    }
  }

  return {
    title: post?.title || "Blog",
    description: post?.excerpt || "",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug, locale } = await params;

  let post:
    | BlogPost
    | {
        id: number;
        title: string;
        slug: string;
        image: string;
        excerpt: string;
        content: string;
        created_at: string;
      }
    | undefined;

  if (locale === "en") {
    const data = getBlogPosts("en");
    const found = data.find((p) => p.slug === slug);
    if (found) {
      post = {
        id: found.id,
        title: found.title,
        slug: found.slug,
        image: found.image,
        excerpt: found.excerpt,
        content: found.content,
        created_at: found.date,
      };
    }
  } else {
    const res = await fetch("https://www.salihkaankoc.net/nata-core/blog");
    const json = await res.json();
    post = json.data.find((p: BlogPost) => p.slug === slug);
  }

  if (!post) return notFound();

  return (
    <article className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
     <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg mb-12">
  {/* Blurred Background */}
  <Image
    src={post.image}
    alt={`${post.title} blurred`}
    fill
    className="object-cover blur-lg scale-110 z-0"
    aria-hidden="true"
  />

  {/* Slight Black Overlay - stays behind text */}
  <div className="absolute inset-0 bg-black/20 z-21" />

  {/* Foreground Image (main) */}
  <Image
    src={post.image}
    alt={post.title}
    fill
    className="object-contain object-top z-20"
    priority
  />

  {/* Text Content - stays on top */}
  <div className="absolute bottom-6 left-6 right-6 text-white z-30">
    <h1 className="font-bold drop-shadow-md text-white text-[clamp(1.2rem,5vw,2.5rem)] leading-snug text-balance">{post.title}</h1>
    <p className="text-sm text-gray-200 mt-1">
      {new Date(post.created_at).toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })}
    </p>
  </div>
</div>



      <div
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed [&_h2]:mt-10 [&_ul]:pl-6 [&_ul]:list-disc [&_li]:mt-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
