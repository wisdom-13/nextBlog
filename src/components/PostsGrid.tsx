import { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </ul>
  );
}

