import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  return (
    <>
      <div className='p-6 bg-slate-100'>
        <span className='font-semibold text-rose-500 text-sm'>{post.category}</span>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
        <h3>{post.description}</h3>
        <small className='text-xs text-slate-400'>{post.date.toString()}</small>
      </div>
      <div className='p-6 w-full'>
        <MarkdownViewer content={post.content} />
      </div>
    </>
  );
}

