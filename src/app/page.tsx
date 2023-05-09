import FeaturedPosts from '@/components/FeaturedPosts'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </>
  )
}
