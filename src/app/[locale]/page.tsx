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

      <div className="container">
        <div className="relative flex h-[400px] justify-center overflow-hidden rounded-2xl border p-10">
          <p className="text-4xl font-extrabold">Для нас важлива ваша підтримка</p>

          <div className="absolute bottom-[-100px] right-0 blur-3xl">
            <div className="size-[200px] rounded-full bg-pink"></div>
          </div>
          <div className="absolute bottom-[140px] right-0 blur-3xl">
            <div className="size-[100px] rounded-full bg-orange"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
