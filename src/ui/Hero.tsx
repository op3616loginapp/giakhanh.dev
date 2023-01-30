import { HERO_LINKS } from "@/config/links";
import Image from "@/ui/MDXComponents/Image";
import Link from "@/ui/Link";

type Link = {
  icon: React.ReactNode;
  href: string;
};

export type HeroLinks = Link[];

const Hero = () => {
  return (
    <div className="space-y-6 md:my-16">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <div className="space-y-4 md:max-w-lg">
          <h1 className="text-4xl font-bold text-secondary">Khanh Le</h1>
          <h2 className="text-lg font-medium text-accent-500">
            24 yrs • Full-stack Developer
          </h2>
          <p className="text-lg">
            I am a student, currently learning web development skills such as
            Next.js, Node.js, Prisma, and database management. I can feel a
            sense of accomplishment when my code is recognized and appreciated.
          </p>
        </div>
        <div className="h-20 w-20 md:h-28 md:w-28">
          <Image
            src="/static/images/avatar.png"
            width={112}
            height={112}
            alt="Khanh Le"
            rounded="rounded-full"
            loading="eager"
            priority
          />
        </div>
      </div>
      <div className="flex gap-6">
        {HERO_LINKS.map((link, i) => (
          <Link key={i} href={link.href} icon={false} animation={false}>
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
