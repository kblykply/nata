import PostModernSlider from "./components/slider";
import Projects from "./components/projects";
import Boxes from "./components/5box";
import FeaturedProjects from "./components/featured";
import FinishedProjects from "./components/finished";
import ProjectFilters from "./components/ProjectFilters";
import Blogs from "./components/Blogs";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  created_at: string;
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
      <PostModernSlider />
      <Boxes />
      <ProjectFilters />
      <FeaturedProjects />
      <FinishedProjects />
      <Blogs posts={posts} />
    </main>
  );
}
