import AboutUs from '@/components/home/about-us'
import Hero from '@/components/home/hero'

export default function Page() {
  return (
    <div className="container flex flex-col gap-20">
      <Hero />
      <AboutUs />
    </div>
  )
}
