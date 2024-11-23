import Problem from "@/components/sections/Problem/problem";
import Hero from '@/components/sections/Hero/hero'
import Solution from '@/components/sections/Solution/solution';
import Navigation from "@/components/Navigation/navigation";
import Objective from "@/components/sections/Objective/objective";
import Testimonials from "@/components/sections/Testimonials/testimonials";
import Steps from "@/components/sections/Steps/steps";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Objective />
      <Testimonials />
      <Steps />
      <Navigation />
    </main>
  )
}