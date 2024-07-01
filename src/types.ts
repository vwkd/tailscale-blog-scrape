/**
 * Generated with Quicktype
 */

export interface Post {
  authors: Author[];
  excerpt: string | null;
  // featuredImage: Image | null;
  // flexContent:   FlexContent[] | null;
  publishedAt: string;
  slug: Slug;
  title: string;
  _id: string;
}

export interface Author {
  member: Member;
  title: string;
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: "teamMember";
  _updatedAt: Date;
}

export interface Member {
  image?: Image;
  name: string;
  jobTitle?: string;
  socialLink?: string;
  // bio?: Bio[];
}

export interface Image {
  alt: string;
  asset?: Asset;
  _type: "sanityImage";
}

export interface Asset {
  _ref: string;
  _type: "reference";
}

export interface Slug {
  current: string;
  _type: "slug";
}
