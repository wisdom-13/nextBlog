import Contact from "@/components/Contact";
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from 'react-icons/ai';


export default function ContactPage() {
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
      <Contact />
    </div >
  );
}

