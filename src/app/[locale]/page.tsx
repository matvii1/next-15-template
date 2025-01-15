import AboutUs from '@/components/home/about-us'
import Goals from '@/components/home/goals'
import Hero from '@/components/home/hero'
import OurPartners from '@/components/home/our-partners'
import OurTeam from '@/components/home/our-team'
import Reports from '@/components/home/reports'
import News from '@/components/news'

export default function Page() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <AboutUs />
      <OurTeam />
      <OurPartners />
      <Goals />
      <Reports />
      <News />
    </div>
  )
}
