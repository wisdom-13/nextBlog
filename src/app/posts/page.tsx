
import CarouselPosts from "@/components/CarouselPosts";
import Categories from "@/components/Categories";
import FeaturedPosts from "@/components/FeaturedPosts";
import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

import Link from 'next/link';


export default async function PostsPage() {

  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <section className="flex w-full max-w-screen-xl">
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}

