import BlogPosts from "@/ui/BlogPost";
import Hero from "@/ui/Hero";
import ProjectCards from "@/ui/ProjectCards";
import { getAllPosts } from "@/lib/mdx";

const Home = () => {
  const posts = getAllPosts({
    limit: 4,
  });

  return (
    <>
      <Hero />
      <ProjectCards />
      <BlogPosts posts={posts} />
    </>
  );
};

export default Home;
