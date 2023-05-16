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
      <h2 className='font-semibold text-2xl mt-8 mb-5'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </div>
  );
}

