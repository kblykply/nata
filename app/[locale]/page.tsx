import PostModernSlider from "../components/slider";
import Projects from "../components/projects";
import Boxes from "../components/5box";
import FeaturedProjects from "../components/featured";
import FinishedProjects from "../components/finished";
import ProjectFilters from "../components/ProjectFilters";
import Blogs from "../components/Blogs";
import { getBlogPosts } from "@/data/blogPosts";


export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  created_at: string;
  date: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let posts: BlogPost[];

  if (locale === "en") {
    const data = getBlogPosts("en");
    posts = data.map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      image: item.image,
      excerpt: item.excerpt,
      created_at: item.date,
      date: item.date,
    }));
  } else {
    const res = await fetch("https://www.salihkaankoc.net/nata-core/blog", {
      next: { revalidate: 60 },
    });
    const json = await res.json();

    posts = json.data.map((item: any) => ({
      ...item,
      date: item.published_at,
    }));
  }

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
