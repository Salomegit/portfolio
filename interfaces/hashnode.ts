export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
  tags: {
    name: string;
    slug: string;
  }[];
  author: {
    name: string;
    profilePicture?: string;
  };
  readTimeInMinutes: number;
  url: string;
}

export interface HashnodeResponse {
  data: {
    publication: {
      id: string;
      title: string;
      displayTitle: string;
      descriptionSEO: string;
      posts: {
        edges: {
          node: HashnodePost;
        }[];
      };
    };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any[];
}
