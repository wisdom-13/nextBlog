import Image from 'next/image';

import { getPost } from '@/service/posts';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  }
}

export default async function page({ params: { slug } }: Props) {

  const post = await getPostData(slug);

  if (!post) {
    redirect('/posts');
  }

  return (
    <div className='w-full shadow-xl rounded-md'>
      <Image className='rounded-md' src={`/images/posts/${post.path}.png`} alt={post.path} width={640} height={354} />
      <div className='p-6'>
        <span className='font-semibold text-rose-500 text-sm'>{post.category}</span>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
        <h3>{post.description}</h3>
      </div>
      <div className='p-6'>
        {post.path}
      </div>

    </div>
  );
}

