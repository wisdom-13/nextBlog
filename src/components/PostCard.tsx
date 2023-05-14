import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/service/posts';

type Prop = { post: Post }

export default function PostCard({ post }: Prop) {
  return (
    <div className='hover:shadow-xl shadow-md rounded-md overflow-hidden'>
      <Link href={`posts/${post.path}`}>
        <Image className='rounded-md w-full' src={`/images/posts/${post.path}.png`} alt={post.path} width={300} height={200} />
        <div className='p-3 px-4'>
          <span className='font-semibold text-rose-500 text-sm'>{post.category}</span>
          <h3 className='font-semibold my-1'>{post.title}</h3>
          <p className='w-full truncate text-sm text-slate-500'>{post.description}</p>
          <small className='text-xs text-slate-400'>{post.date.toString()}</small>
        </div>
      </Link>
    </div>
  );
}