import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Fleet } from "@/components/sections/fleet";
import { RentalInfo } from "@/components/sections/rental-info";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <RentalInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
