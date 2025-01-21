import AboutUs from '@/components/home/about-us'
import Goals from '@/components/home/goals'
import Hero from '@/components/home/hero'
import OurPartners from '@/components/home/our-partners'
import OurTeam from '@/components/home/our-team'
import Reports from '@/components/home/reports'
import News from '@/components/news'
import Appear from '@/components/ui/appear'
import SupportButton from '@/components/ui/support-button'

export default function Page() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Hero />

      <Appear>
        <AboutUs />
      </Appear>
      <Appear>
        <OurTeam />
      </Appear>

      <Appear>
        <OurPartners />
      </Appear>

      <Appear>
        <Goals />
      </Appear>

      <Appear>
        <Reports />
      </Appear>

      <Appear>
        <News />
      </Appear>

      <Appear>
        <div className="container mt-10 flex justify-center">
          <SupportButton />
        </div>
      </Appear>
    </div>
  )
}
