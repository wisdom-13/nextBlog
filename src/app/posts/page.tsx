
import CarouselPosts from "@/Component/CarouselPosts";
import PostCard from "@/Component/PostCard";
import { getPosts } from "@/service/posts";

export default async function PostsPage() {

  const posts = await getPosts();
  const featured = posts.filter(post => post.featured);

  return (
    <section>
      <h2 className='mt-8 font-semibold text-2xl mb-5'>Featured Posts</h2>

      <ul className='grid gap-4 grid-cols-4'>
        {featured.map((post, index) => (
          <PostCard key={index} post={post}></PostCard>
        ))}
      </ul>

      <h2 className='mt-8 font-semibold text-2xl mb-5'>You may like</h2>
      <CarouselPosts />

    </section>
  );
}

