// interfaces/hashnode.ts

export interface HashnodeTag {
  name: string;
  slug: string;
}

export interface HashnodeCoverImage {
  url: string;
}

export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  publishedAt: string;
  readTimeInMinutes: number;
  url: string;
  coverImage?: HashnodeCoverImage;
  tags?: HashnodeTag[];
}

// Optional: If you want to add author information later
export interface HashnodeAuthor {
  name: string;
  profilePicture?: string;
  username: string;
}

// Extended version with author (optional)
export interface HashnodePostWithAuthor extends HashnodePost {
  author: HashnodeAuthor;
}