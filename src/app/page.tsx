import About from '@/components/About'
import FeaturedPosts from '@/components/FeaturedPosts'

export default function Home() {
  return (
    <>
      <About />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </>
  )
}
