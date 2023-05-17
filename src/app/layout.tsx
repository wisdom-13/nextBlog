import Header from '@/components/Header'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const sans = Open_Sans({ subsets: ['latin'] })

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
      <body className={sans.className}>
        <Header />
        <section className='w-full max-w-screen-xl'>{children} </section>
      </body>
    </html>
  )
}
