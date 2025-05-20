
import Blogs from "../components/Blogs";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  published_at: string;
  date: string;
}

export default async function Page() {
  const res = await fetch("https://www.salihkaankoc.net/nata-core/blog", {
    next: { revalidate: 60 }, // Optional: ISR-like caching (60s)
  });
  const json = await res.json();

  const posts: BlogPost[] = json.data.map((item: any) => ({
    ...item,
    date: item.published_at,
  }));

  return (
    <main className="min-h-screen bg-whitetext-white">
    
      <Blogs posts={posts} />
    </main>
  );
}
