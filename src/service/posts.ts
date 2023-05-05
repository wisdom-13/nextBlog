import path from 'path';
import { promises as fs } from 'fs';

export type Posts = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: string;
}

export async function getPosts(): Promise<Posts[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}