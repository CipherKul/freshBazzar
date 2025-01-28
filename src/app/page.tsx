import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/Home/Hero";
import AboutUsSection from "@/components/ui/Home/InfoSection";
import MidSection from "@/components/ui/Home/MidSection";
import { ProductGrid } from "@/components/ui/Home/ProductGrid";
import Image from "next/image";
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
