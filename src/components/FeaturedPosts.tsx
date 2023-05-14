import { getFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";
import PostsGrid from "./PostsGrid";

type Props = {
  category: string
}

export default async function FeaturedPosts({ category }: Props) {

  const posts = await getFeaturedPosts();
  const featured = posts.filter(post => post.featured);

  return (
    <div>
      <h2 className='mt-8 font-semibold text-2xl mb-5'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </div>
  );
}

