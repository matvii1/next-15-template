import AboutUs from '@/components/home/about-us'
import Hero from '@/components/home/hero'
import OurPartners from '@/components/home/our-partners'
import OurTeam from '@/components/home/our-team'

export default function Page() {
  return (
    <div className="container flex flex-col gap-20">
      <Hero />
      <AboutUs />
      <OurTeam />
      <OurPartners />
    </div>
  )
}
