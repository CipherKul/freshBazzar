"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/Home/Hero";
import AboutUsSection from "@/components/Home/InfoSection";
import MidSection from "@/components/Home/MidSection";
import { ProductGrid } from "@/components/Home/ProductGrid";

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if we should scroll to contact section
    if (searchParams.get("scroll") === "contact") {
      const contactSection = document.getElementById("contact-section")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  return (
    <main>
      <HeroSection />
      <MidSection />
      <ProductGrid />
      <AboutUsSection/>

      {/* Contact Section */}
      <section id="contact-section" className=" bg-[#D9FCB4]; ">
      </section>
    </main>
  );
}
