import Image from 'next/image';

import { getPostData } from '@/service/posts';
import { redirect } from 'next/navigation';
import MarkdownViewer from '@/components/MarkdownViewer';

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
      <div className='p-6 bg-slate-100'>
        <span className='font-semibold text-rose-500 text-sm'>{post.category}</span>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
        <h3>{post.description}</h3>
        <small className='text-xs text-slate-400'>{post.date.toString()}</small>
      </div>
      <div className='p-6 w-full'>
        <MarkdownViewer content={post.content} />
      </div>
    </article>
  );
}

