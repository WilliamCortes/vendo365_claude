import Hero       from '@/components/sections/Hero'
import LogoBar    from '@/components/sections/LogoBar'
import Problem    from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import Features   from '@/components/sections/Features'
import Evidence   from '@/components/sections/Evidence'
import Pricing    from '@/components/sections/Pricing'
import CtaClose   from '@/components/sections/CtaClose'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Problem />
      <HowItWorks />
      <Features />
      <Evidence />
      <Pricing />
      <CtaClose />
    </>
  )
}
