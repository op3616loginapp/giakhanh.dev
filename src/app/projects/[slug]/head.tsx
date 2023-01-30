import { allProjects } from "contentlayer/generated";
import Head from "@/ui/Head";

type ProjectHeadProps = {
  params: {
    slug: string;
  };
};

const ProjectHead = ({ params }: ProjectHeadProps) => {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) return <Head title="404" />;

  const { name, description, image } = project;

  return (
    <Head
      title={name}
      description={description}
      openGraph={{
        description,
        type: "website",
        title: `${name} | Khanh Le's Blog`,
        images: [
          {
            url: `http://localhost:3000${image}`,
            alt: name,
            width: 1600,
            height: 960,
            type: "image/png",
          },
        ],
      }}
    />
  );
};

export default ProjectHead;
