'use client';

import { useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
}

const INPUT_CLASS = 'w-full text-sm text-slate-900 placeholder-slate-400 rounded-md p-2 px-3 ring-1 ring-slate-200';

const DEFAULT_DATA = { from: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(form)
      .then(() => {
        setBanner({ message: '메일이 성공적으로 발송되었습니다.', state: 'success' });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: '메일 발송에 실패했습니다.', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => { setBanner(null) }, 3000)
      })

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
        {banner && <Banner banner={banner} />}
        <button className='bg-rose-500 text-white text-sm leading-6 font-semibold py-2 px-5 mt-3 rounded-lg float-right'>Submit</button>
      </form>
    </>
  );
}

