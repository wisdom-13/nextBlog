'use client';

import { useState } from 'react';

type Form = {
  from: string;
  subject: string;
  message: string;
}

const INPUT_CLASS = 'w-full text-sm text-slate-900 placeholder-slate-400 rounded-md p-2 px-3 ring-1 ring-slate-200';

export default function Contact() {
  const [form, setForm] = useState<Form>({ from: '', subject: '', message: '' });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <>
      <form className='p-6 basis-3/4' onSubmit={onSubmit}>
        <label className='block font-semibold mb-2'>Your Email</label>
        <input className={INPUT_CLASS} type='text' placeholder='Email' name='from' required autoFocus value={form.from} onChange={onChange} />
        <label className='block font-semibold mb-2 mt-3'>Subject</label>
        <input className={INPUT_CLASS} type='text' placeholder='제목' name='subject' required autoFocus value={form.subject} onChange={onChange} />
        <label className='block font-semibold mb-2 mt-3'>Message</label>
        <textarea className={INPUT_CLASS} placeholder='내용을 입력해주세요.' name='message' required autoFocus value={form.message} onChange={onChange} ></textarea>
        <button className='bg-rose-500 text-white text-sm leading-6 font-semibold py-2 px-5 mt-3 rounded-lg float-right'>Submit</button>
      </form>
    </>
  );
}

