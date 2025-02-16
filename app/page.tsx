import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
export default function Home() {
  return (
    <main>
      <HeroGeometric title1="Recover Your Server" title2="In Just One Click"/>
      <Features />
      <Pricing />
    </main>
  );
}
