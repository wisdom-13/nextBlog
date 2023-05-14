import { getAllPosts } from "@/service/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getAllPosts();

  return (
    <div className="w-full max-w-screen-xl">
      <h2 className='mt-8 font-semibold text-2xl mb-5'>You may like</h2>

      <MultiCarousel>
        {posts.map(post => (
          <PostCard key={post.path} post={post}></PostCard>
        ))}
      </MultiCarousel>

    </div>
  );
}