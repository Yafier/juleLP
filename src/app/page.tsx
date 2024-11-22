import Problem from "@/components/sections/Problem/problem";
import Hero from '@/components/sections/Hero/hero'
import Solution from '@/components/sections/Solution/solution';
import Navigation from "@/components/Navigation/navigation";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Navigation />
    </main>
  )
}