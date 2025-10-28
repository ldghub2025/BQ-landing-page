import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { WhyItMatters } from "@/components/why-it-matters"
import { ForDoctors } from "@/components/for-doctors"
import { ForPatients } from "@/components/for-patients"
import { Collaborations } from "@/components/collaborations"
import { ForInvestors } from "@/components/for-investors"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <WhyItMatters />
      <ForDoctors />
      <ForPatients />
      <Collaborations />
      <ForInvestors />
      <Footer />
    </main>
  )
}
