export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks: number;
  fork: boolean;
  private: boolean;
};

export type BlogPost = {
  title: string;
  url: string;
  description?: string;
  edited_at: string;
  published_at?: string;
  reading_time_minutes: number;
  public_reactions_count: number;
  tag_list?: string[];
};

const REPOS_URL = "https://api.github.com/users/starkblaze01/repos?per_page=200";
const BLOGS_URL = "/api/blogs";

export async function fetchAllRepos(): Promise<Repo[]> {
  const res = await fetch(REPOS_URL);
  if (!res.ok) throw new Error(`GitHub repos fetch failed: ${res.status}`);
  return res.json();
}

export async function fetchAllBlogs(): Promise<BlogPost[]> {
  const res = await fetch(BLOGS_URL);
  if (!res.ok) throw new Error(`Blog feed fetch failed: ${res.status}`);
  return res.json();
}
