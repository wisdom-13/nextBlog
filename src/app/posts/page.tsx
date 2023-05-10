
import CarouselPosts from "@/components/CarouselPosts";
import Category from "@/components/Category";
import FeaturedPosts from "@/components/FeaturedPosts";

import Link from 'next/link';


export default async function PostsPage() {

  return (
    <section className="flex w-full max-w-screen-xl">
      <Category />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts category={'all'} />
    </section>
  );
}

