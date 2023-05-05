import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TtottiH',
  description: 'JIHYE HOME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='flex items-center w-full max-w-screen-xl justify-between font-semibold text-sm'>
          <Link href='/' className='text-lg'>🧶 TtottiH</Link>
          <nav className='flex space-x-8'>
            <Link className='hover:text-rose-500' href='/'>Home</Link>
            <Link className='hover:text-rose-500' href='/about'>About</Link>
            <Link className='hover:text-rose-500' href='/posts'>Posts</Link>
            <Link className='hover:text-rose-500' href='/contact'>Contact</Link>
          </nav>

        </header>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
