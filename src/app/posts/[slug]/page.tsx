import Image from 'next/image';

import { getFeaturedPosts, getPostData } from '@/service/posts';
import { redirect } from 'next/navigation';
import PostContent from '@/components/PostContent';
import AdjacentPostCard from '@/components/AdjacentPostCard';

import { Metadata } from 'next';

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return { title, description };
}

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
    <article className='w-full shadow-xl rounded-md mt-6 overflow-hidden'>
      <div className='overflow-hidden h-1/5 max-h-[300px]'>
        <Image className='rounded-md w-full' src={`/images/posts/${post.path}.png`} alt={post.path} width={760} height={420} />
      </div>
      <PostContent post={post} />
      <section className='flex'>
        {post.prev && <AdjacentPostCard post={post.prev} type='prev' />}
        {post.next && <AdjacentPostCard post={post.next} type='next' />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }))
}