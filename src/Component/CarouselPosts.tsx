import { getPosts } from "@/service/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getPosts();

  return (
    <ul className='grid'>
      <MultiCarousel>
        {posts.map(post => (
          <PostCard key={post.path} post={post}></PostCard>
        ))}
      </MultiCarousel>
    </ul>
  );
}