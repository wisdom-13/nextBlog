'use client';

import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();

  return (
    <section className='mt-6 text-center'>
      <div>
        <h1 className='font-bold text-2xl'>Lee Jihye</h1>
        <p className='font-semibold'>소통하는 Front-end 개발자</p>
        <p>5년차 웹개발자</p>
        <button onClick={() => {
          router.push('/contact');
        }} className='bg-rose-500 text-white text-sm leading-6 font-semibold py-2 px-5 mt-3 rounded-lg'>Contact Me</button>
      </div>
    </section>
  );
}

