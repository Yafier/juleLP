import HeroFirst from '@/components/sections/Hero-first/page';
import Hero from '@/components/sections/Hero/hero'
import Problem from "@/components/sections/Problem/problem";
import Solution from '@/components/sections/Solution/solution';
import Navigation from "@/components/Navigation/navigation";
import Objective from "@/components/sections/Objective/objective";
import Testimonials from "@/components/sections/Testimonials/testimonials";
import Steps from "@/components/sections/Steps/steps";
import Fomo from "@/components/sections/Fomo/fomo";
import { Faq } from "@/components/sections/Faq/faq";
import { Cta } from "@/components/sections/Cta/cta";



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroFirst />
      <Hero />
      <Problem />
      <Solution />
      <Objective />
      <Testimonials />
      <Steps />
      <Fomo />
      <Faq />
      <Cta />
      <Navigation />
    </main>
  )
}