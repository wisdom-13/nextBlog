import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from "@/service/posts";


export default async function PostsPage() {

  const posts = await getPosts();
  const featured = posts.filter(post => post.featured);

  return (
    <section>
      <h2 className='mt-8 font-semibold text-2xl mb-5'>Featured Posts</h2>

      <ul className='grid gap-4 grid-cols-4'>
        {featured.map((post, index) => (
          <li key={index} className='shadow-xl rounded-md'>
            <Link href={`posts/${post.path}`}>
              <Image className='rounded-md' src={`/images/posts/${post.path}.png`} alt={post.path} width={300} height={300} />
              <div className='p-3 px-4'>
                <span className='font-semibold text-rose-500 text-sm'>{post.category}</span>
                <h3 className='font-semibold my-1'>{post.title}</h3>
                <p className='text-sm text-slate-500'>{post.description}</p>
                <small className='text-xs text-slate-400'>{post.date}</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

