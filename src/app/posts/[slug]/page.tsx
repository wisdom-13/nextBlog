import Image from 'next/image';

import { getPostData } from '@/service/posts';
import { redirect } from 'next/navigation';
import PostContent from '@/components/PostContent';

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
    <article className='w-full shadow-xl rounded-md mt-6'>
      <div className='overflow-hidden h-1/5 max-h-[300px]'>
        <Image className='rounded-md w-full' src={`/images/posts/${post.path}.png`} alt={post.path} width={760} height={420} />
      </div>
      <PostContent post={post} />
    </article>
  );
}

