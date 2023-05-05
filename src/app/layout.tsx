import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BLOG',
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
        <header>
          <h1><Link href='/'>Blog</Link></h1>
          <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
