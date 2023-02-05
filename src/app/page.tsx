import { getAllPosts } from "@/lib/mdx";
import BlogPosts from "@/ui/BlogPost";
import ProjectCards from "@/ui/ProjectCards";
import HeroSection from "@/ui/HeroSection";

const Home = () => {
  const posts = getAllPosts({
    limit: 4,
  });

  return (
    <>
      <HeroSection />
      <ProjectCards />
      <BlogPosts posts={posts} />
    </>
  );
};

export default Home;
