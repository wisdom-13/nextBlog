import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from 'react-icons/ai';


export default function Contact() {
  return (
    <div className='flex flex-row shadow-xl rounded-md mt-12'>
      <div className='bg-gray-100 rounded-md p-6 basis-1/4'>
        <div className='flex'>
          <AiFillGithub className='hover:text-rose-500 text-2xl mr-2' />
          <AiOutlineTwitter className='hover:text-rose-500 text-2xl mr-2' />
          <AiFillMail className='hover:text-rose-500 text-2xl' />
        </div>
        <h1 className='text-3xl font-bold  mt-5'>Contact me</h1>
        <p className=''>wisdom_13_@naver.com</p>

      </div>
      <div className='p-6 basis-3/4'>
        <label className='block font-semibold mb-2'>Your Email</label>
        <input className='w-full text-sm text-slate-900 placeholder-slate-400 rounded-md p-2 px-3 ring-1 ring-slate-200' type='text' placeholder='Email' />
        <label className='block font-semibold mb-2 mt-3'>Subject</label>
        <input className='w-full text-sm text-slate-900 placeholder-slate-400 rounded-md p-2 px-3 ring-1 ring-slate-200' type='text' placeholder='제목' />
        <label className='block font-semibold mb-2 mt-3'>Message</label>
        <textarea className='w-full text-sm text-slate-900 placeholder-slate-400 rounded-md p-2 px-3 ring-1 ring-slate-200' placeholder='내용을 입력해주세요.'></textarea>
        <button className='bg-rose-500 text-white text-sm leading-6 font-semibold py-2 px-5 mt-3 rounded-lg float-right'>Submit</button>
      </div>
    </div >
  );
}

