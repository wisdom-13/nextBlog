
import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";

export default async function PostsPage() {

  return (
    <section>

      {/* @ts-expect-error Server Component */}
      <CarouselPosts />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />

    </section>
  );
}

