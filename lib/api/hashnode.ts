import { HashnodePost, HashnodeResponse } from '../../interfaces/hashnode';
const HASHNODE_API_URL = 'https://gql.hashnode.com/';

const GET_POSTS_QUERY = `
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      id
      title
      displayTitle
      descriptionSEO
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            coverImage {
              url
            }
            tags {
              name
              slug
            }
            author {
              name
              profilePicture
            }
            readTimeInMinutes
            // url
          }
        }
      }
    }
  }
`;

export async function fetchHashnodePosts(
  hostname: string, 
  limit: number = 10
): Promise<HashnodePost[]> {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
        variables: {
          host: hostname,
          first: limit
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: HashnodeResponse = await response.json();
    console.log('Hashnode API response:', data);
    
    if (data.errors) {
      throw new Error('GraphQL errors: ' + JSON.stringify(data.errors));
    }

    return data.data.publication.posts.edges.map(edge => edge.node);
  } catch (error) {
    console.error('Error fetching Hashnode posts:', error);
    throw error;
  }
}