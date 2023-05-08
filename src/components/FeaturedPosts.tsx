import { getPosts } from "@/service/posts";
import PostCard from "./PostCard";


export default async function FeaturedPosts() {

  const posts = await getPosts();
  const featured = posts.filter(post => post.featured);

  return (
    <div className="w-full max-w-screen-xl">
      <h2 className='mt-8 font-semibold text-2xl mb-5'>Featured Posts</h2>
      <div className='grid gap-4 grid-cols-4'>
        {featured.map((post, index) => (
          <PostCard key={index} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
}

