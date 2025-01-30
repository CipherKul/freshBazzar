import { Button } from "@/components/ui/button";
import HeroSection from "@/components/Home/Hero";
import AboutUsSection from "@/components/Home/InfoSection";
import MidSection from "@/components/Home/MidSection";
import { ProductGrid } from "@/components/Home/ProductGrid";
export default function Home() {
  return (
   <>
   <HeroSection />
   <MidSection />
   <ProductGrid />
   <AboutUsSection/>
   </>
  );
}
