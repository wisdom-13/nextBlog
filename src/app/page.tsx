import About from '@/components/About'
import CarouselPosts from '@/components/CarouselPosts'
import FeaturedPosts from '@/components/FeaturedPosts'

export default function Home() {
  return (
    <>
      <About />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <CarouselPosts />
    </>
  )
}
