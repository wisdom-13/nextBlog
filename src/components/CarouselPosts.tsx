import { getPosts } from "@/service/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getPosts();

  return (
    <div>
      <h2 className='mt-8 font-semibold text-2xl mb-5'>You may like</h2>
      <div className='grid'>
        <MultiCarousel>
          {posts.map(post => (
            <PostCard key={post.path} post={post}></PostCard>
          ))}
        </MultiCarousel>
      </div>
    </div>
  );
}