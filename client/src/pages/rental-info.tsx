import { Navbar } from "@/components/ui/navbar";
import { RentalInfo } from "@/components/sections/rental-info";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone } from "lucide-react";

export default function RentalInfoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            RENTAL <span className="text-primary">INFORMATION</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg mb-8">
            Everything you need to know before renting a bike or scooty from us. 
            We believe in transparency and making your rental experience hassle-free.
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold" data-testid="button-rental-contact">
              <Phone className="w-4 h-4 mr-2" />
              Have Questions? Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <main>
        <RentalInfo />
      </main>
      <Footer />
    </div>
  );
}
