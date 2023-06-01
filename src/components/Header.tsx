import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center w-full max-w-screen-xl justify-between font-semibold text-sm'>
      <Link href='/' className='text-lg'>🧶 JIHYE</Link>
      <nav className='flex space-x-8'>
        <Link className='hover:text-rose-500' href='/'>Home</Link>
        <Link className='hover:text-rose-500' href='/about'>About</Link>
        <Link className='hover:text-rose-500' href='/posts'>Posts</Link>
        <Link className='hover:text-rose-500' href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}

