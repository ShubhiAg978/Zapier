export const metadata = {
  title: "Automate your work today | Zapier",
  description: "Workflow automation software for everyone. Zapier automates your work across 7000+ app integrations, so you can focus on what matters.",
}

import Hero from '@/components/sections/hero'
import HeroVideo from '@/components/sections/herovideo'
import Newsletter from '@/components/sections/newsletter'
import Zigzag from '@/components/sections/zigzag'
import Testimonials from '@/components/sections/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <HeroVideo />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
