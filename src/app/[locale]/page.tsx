import { ArrowRight } from 'lucide-react'

import AboutUs from '@/components/home/about-us'
import Goals from '@/components/home/goals'
import Hero from '@/components/home/hero'
import OurPartners from '@/components/home/our-partners'
import OurTeam from '@/components/home/our-team'
import Reports from '@/components/home/reports'
import News from '@/components/news'
import Appear from '@/components/ui/appear'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

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
        <div className="container flex justify-center">
          <Link
            className={cn(
              'group/interactive relative w-[300px] cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-orange p-2 px-6 text-center text-2xl font-bold text-white'
            )}
            href={'/'}
          >
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-white transition-all duration-300 md:group-hover/interactive:scale-[100.8]"></div>
              <span className="inline-block transition-all duration-300 md:group-hover/interactive:translate-x-12 md:group-hover/interactive:opacity-0">
                Підтримати проєкт
              </span>
            </div>

            <div className="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-2xl font-bold text-orange opacity-0 transition-all duration-300 md:group-hover/interactive:-translate-x-5 md:group-hover/interactive:opacity-100">
              <span>Підтримати проєкт</span>
              <ArrowRight />
            </div>
          </Link>
        </div>
      </Appear>
    </div>
  )
}
