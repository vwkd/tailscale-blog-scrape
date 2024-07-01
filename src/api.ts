import { type Post } from "./types.ts";

/**
 * Get a page of blog posts from API
 * @param page page number
 * @returns array of posts for page
 */
export async function getPage(page: number): Promise<Post[]> {
  const response = await fetch(
    `https://tailscale.com/api/blogposts?page=${page}`,
  );
  const posts: Post[] = await response.json();
  return posts;
}
