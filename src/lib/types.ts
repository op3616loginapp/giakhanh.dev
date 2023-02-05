import { BlogPost } from "contentlayer/generated";

export type BlogPostCore = Pick<
  BlogPost,
  "_id" | "slug" | "title" | "summary" | "date" | "image"
>;

type Link = {
  href: string;
  title: string;
};

type FooterLink = {
  links: Link[];
};

export type FooterLinks = FooterLink[];

export type DropdownItem = {
  href: string;
  text: string;
};

export type Headings = {
  id: string;
  title: string;
  level: number;
}[];

export type TwemojiProps = {
  emoji: string;
  size?: string;
  className?: string;
};
